<template>
  <section>
    <my-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <template v-if="loading">
        <my-loading></my-loading>
      </template>
      <template v-else>
        <h3 v-if="request.length == 0">
          You haven't received any requests yet!
        </h3>
        <ul v-else v-for="req in request" :key="req">
          <li>
            <div>
              <a :href="`mailto:${req.email}`">{{ req.email }}</a>
            </div>
            <p>{{ req.message }}</p>
          </li>
        </ul>
      </template>
    </my-card>
  </section>
</template>

<script>
import MyCard from "../common/MyCard";
import MyLoading from "../loading/MyLoading";
import axios from "axios";
import { mapState } from "vuex";
export default {
  components: { MyCard, MyLoading },
  name: "CoachesRequest",
  data() {
    return {
      request: [],
    };
  },
  computed: { ...mapState(["loading"]) },

  created() {
    this.$store.commit("SET_LOADING", true);
    axios
      .get("https://my-coaches-default-rtdb.firebaseio.com/request.json")
      .then((response) => {
        setTimeout(() => {
          this.$store.commit("SET_LOADING", false);
        }, 700);
        for (let i = 0; i < Object.values(response.data).length; i++) {
          if (
            Object.values(response.data)[i].id == localStorage.getItem("userID")
          ) {
            this.request.push(Object.values(response.data)[i]);
          }
        }
      })
      .catch((error) => {});
  },
  beforeRouteLeave() {
    console.log("good bye!");
  },
};
</script>

<style scoped>
header,
h3 {
  text-align: center;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: 700;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
