import axios from "axios";
import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    areas: ["frontend", "backend", "fullstack"],
    coaches: [],
    auth: localStorage.getItem("userID") || null,
    loading: false,
    isRegister: false,
    openDialog: false,
    authenDialog: false,
    loadingDialog: false,
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
        axios
          .get("https://my-coaches-default-rtdb.firebaseio.com/coaches.json")
          .then((response) => {
            let temp = [];
            for (let i = 0; i < Object.values(response.data).length; i++) {
              temp.push(Object.values(response.data)[i].id);
            }
            commit("CHECK_USER_REGISTER", temp);
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    },

    logout({ commit }) {
      localStorage.removeItem("userID");
      commit("SET_IS_REGISTER", false);
      commit("TOGGLE_AUTH", null);
    },
    loginAndSignup({ commit }, payload) {
      var user = payload.userCredential.user;
      commit("TOGGLE_AUTH", user.uid);
      localStorage.setItem("userID", user.uid);
      setTimeout(() => {
        commit("SET_OPEN_DIALOG", false);
        commit("SET_LOADING_DIALOG", false);
        if (payload.url) {
          router.push({ name: "Register" });
        } else {
          router.push({ name: "Coaches" });
        }
      }, 500);
    },
    errorLoginAndSignup({ commit }) {
      commit("SET_OPEN_DIALOG", true);
      commit("SET_AUTHEN_DIALOG", true);
      commit("SET_LOADING_DIALOG", true);
      setTimeout(() => {
        commit("SET_AUTHEN_DIALOG", false);
        commit("SET_LOADING_DIALOG", false);
      }, 500);
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

    SET_OPEN_DIALOG(state, payload) {
      state.openDialog = payload;
    },

    SET_AUTHEN_DIALOG(state, payload) {
      state.authenDialog = payload;
    },

    SET_LOADING_DIALOG(state, payload) {
      state.loadingDialog = payload;
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
