<template>
  <my-card>
    <form @submit.prevent="flag ? login() : register()">
      <div class="form-control">
        <label for="email">
          E-Mail
        </label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password">
          Password
        </label>
        <input type="password" id="password" v-model="password" />
      </div>
      <template v-if="flag">
        <button type="submit">Login</button>
        <button class="flat" @click.prevent="toggle">Signup instead</button>
      </template>
      <template v-else>
        <button type="submit">Signup</button>
        <button class="flat" @click.prevent="toggle">Login instead</button>
      </template>
    </form>
  </my-card>
</template>

<script>
import MyCard from "../common/MyCard";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: { MyCard },
  data() {
    return {
      flag: true,
      email: "",
      password: "",
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          this.$store.commit("TOGGLE_AUTH");
          this.$router.push({ name: "Coaches" });
          localStorage.setItem("coachesID", user.uid);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
        });
    },
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
        });
    },
  },
};
</script>
TheHeading

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover {
  background-color: #edd2ff;
}

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: #fff;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}
</style>
