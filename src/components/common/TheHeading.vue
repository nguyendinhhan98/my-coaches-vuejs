<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo">
        <router-link :to="{ name: 'Coaches' }">Find a Coach</router-link>
      </h1>
      <ul class="header__menu-list">
        <li class="header__menu-item">
          <router-link :to="{ name: 'Coaches' }">All Coaches</router-link>
        </li>
        <template v-if="checkLogin">
          <li class="header__menu-item">
            <router-link :to="{ name: 'CoachesRequest' }">Request</router-link>
          </li>
          <li class="header__menu-item">
            <my-button @click="logout" :isOutline="true">Logout</my-button>
          </li>
        </template>

        <template v-else>
          <li class="header__menu-item">
            <router-link :to="{ name: 'Auth' }">Login</router-link>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
import MyButton from "../common/MyButton";
import { mapGetters } from "vuex";
export default {
  name: "TheHeading",
  components: { MyButton },
  computed: mapGetters(["checkLogin"]),
  methods: {
    logout() {
      // this.$store.commit("TOGGLE_AUTH");
      // localStorage.removeItem("userID");
      this.$store.dispatch("logout");
      this.$router.push({ name: "Coaches" });
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  margin: 0;
}

.header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

.logo a {
  color: #fff;
  margin: 0;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__menu-item {
  margin: 0 0.5rem;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

a.router-link-active {
  border: 1px solid #f391e3;
}

h1 a.router-link-exact-active {
  border-color: transparent;
}
</style>
