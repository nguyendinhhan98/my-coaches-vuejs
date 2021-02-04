import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    areas: ["frontend", "backend", "fullstack"],
    coaches: [],
    auth: localStorage.getItem("userID") || null,
    loading: false,
    isRegister: false,
  },
  getters: {
    allCoaches: (state) => {
      return state.coaches.filter((coaches) => {
        let flag = false;
        for (let i = 0; i < coaches.areas.length; i++) {
          if (state.areas.indexOf(coaches.areas[i]) != -1) {
            flag = true;
            break;
          }
        }
        return flag;
      });
    },
    checkLogin: (state) => state.auth != null,
  },
  actions: {
    async getCoaches({ commit }) {
      commit("SET_LOADING", true);
      const resCoaches = [];
      try {
        const response = await axios.get(
          "https://my-coaches-default-rtdb.firebaseio.com/coaches.json"
        );
        let obj = Object.values(response.data);
        for (let i = 0; i < obj.length; i++) {
          let id = { id: Object.keys(response.data)[i] };
          let temp = Object.assign(obj[i], id);
          resCoaches.push(temp);
        }
        commit("SET_COACHES", resCoaches);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
      }
    },

    async getUserRegister({ commit }) {
      try {
        const response = await axios.get(
          "https://my-coaches-default-rtdb.firebaseio.com/register.json"
        );
        let temp = [];
        for (let i = 0; i < Object.values(response.data).length; i++) {
          temp.push(Object.values(Object.values(response.data)[i])[0]);
        }
        commit("CHECK_USER_REGISTER", temp);
      } catch (error) {
        console.log(error);
      }
    },

    postUserRegister({ commit }, userID) {
      axios
        .post("https://my-coaches-default-rtdb.firebaseio.com/register.json", {
          id: userID,
        })
        .catch((error) => console.log(error));
    },
    logout({ commit }) {
      localStorage.removeItem("userID");
      commit("SET_IS_REGISTER", false);
      commit("TOGGLE_AUTH", null);
    },
  },
  mutations: {
    SET_COACHES(state, coaches) {
      state.coaches = coaches;
    },
    TOGGLE_AUTH(state, payload) {
      state.auth = payload;
    },
    FILTER_COACHES(state, areas) {
      state.areas = areas;
    },

    SET_IS_REGISTER(state, payload) {
      state.isRegister = payload;
    },

    SET_LOADING(state, payload) {
      state.loading = payload;
    },

    CHECK_USER_REGISTER(state, listUserRegister) {
      if (state.auth != null) {
        if (listUserRegister.indexOf(state.auth) != -1) {
          state.isRegister = true;
        } else {
          state.isRegister = false;
        }
      }
    },
  },
});
