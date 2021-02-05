import axios from "axios";
import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    areas: ["frontend", "backend", "fullstack"],
    coaches: [],
    auth: localStorage.getItem("userID") || null,
    loading: false,
    isFindCoaches: false,
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
        if (response.data == null) {
          commit("SET_FIND_COACHES", false);
        } else {
          commit("SET_FIND_COACHES", true);
          let obj = Object.values(response.data);
          for (let i = 0; i < obj.length; i++) {
            let id = { id: Object.keys(response.data)[i] };
            let temp = Object.assign(obj[i], id);
            resCoaches.push(temp);
          }
        }
        commit("SET_COACHES", resCoaches);
        setTimeout(() => {
          commit("SET_LOADING", false);
        }, 700);
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
            if (response.data) {
              for (let i = 0; i < Object.values(response.data).length; i++) {
                temp.push(Object.values(response.data)[i].id);
              }
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
    SET_COACHES(state, payload) {
      state.coaches = payload;
    },
    TOGGLE_AUTH(state, payload) {
      state.auth = payload;
    },
    FILTER_COACHES(state, payload) {
      state.areas = payload;
    },

    SET_IS_REGISTER(state, payload) {
      state.isRegister = payload;
    },

    SET_LOADING(state, payload) {
      state.loading = payload;
    },

    SET_FIND_COACHES(state, payload) {
      state.isFindCoaches = payload;
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

    CHECK_USER_REGISTER(state, payload) {
      if (state.auth != null) {
        if (payload.indexOf(state.auth) != -1) {
          state.isRegister = true;
        } else {
          state.isRegister = false;
        }
      }
    },
  },
});
