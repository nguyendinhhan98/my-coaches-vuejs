import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    areas: [],
    coaches: [],
    auth: localStorage.getItem("coachesID") || null,
  },
  getters: {
    allCoaches: (state) => state.coaches,
    allAreas: (state) => state.areas,
    getAuth: (state) => state.auth,
  },
  actions: {
    async getCoaches({ commit }) {
      const resCoaches = [];
      try {
        const response = await axios.get(
          "https://my-coaches-default-rtdb.firebaseio.com/coaches.json"
        );
        let obj = Object.values(response.data);
        //add id in resData
        for (let i = 0; i < obj.length; i++) {
          let id = { id: Object.keys(response.data)[i] };
          let temp = Object.assign(obj[i], id);
          resCoaches.push(temp);
        }
        // console.log("resCoaches", resCoaches);
        commit("SET_COACHES", resCoaches);
      } catch (error) {
        console.log(error);
      }
    },

    async getAreas({ commit }) {
      try {
        const response = await axios.get(
          "https://my-coaches-default-rtdb.firebaseio.com/areas.json"
        );
        commit("SET_AREAS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_COACHES(state, coaches) {
      state.coaches = coaches;
    },
    SET_AREAS(state, areas) {
      state.areas = areas;
    },
    TOGGLE_AUTH(state) {
      state.auth = !state.auth;
    },
  },
});
