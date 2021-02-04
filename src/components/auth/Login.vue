<template>
  <my-card>
    <form @submit.prevent="flag ? login() : signup()">
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
      <p v-if="checkValid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p>
      <template v-if="flag">
        <button type="submit">Login</button>
        <button class="flat" @click.prevent="toggle">Signup instead</button>
      </template>
      <template v-else>
        <button type="submit">Signup</button>
        <button class="flat" @click.prevent="toggle">Login instead</button>
      </template>
    </form>

    <error-auth></error-auth>
  </my-card>
</template>

<script>
import MyCard from "../common/MyCard";
import ErrorAuth from "../common/ErrorAuth";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: { MyCard, ErrorAuth },
  data() {
    return {
      flag: true,
      email: "",
      password: "",
      checkValid: false,
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    },
    login() {
      if (this.email == "" || this.password == "") {
        this.checkValid = true;
      } else {
        this.$store.commit("SET_OPEN_DIALOG", true);
        this.$store.commit("SET_AUTHEN_DIALOG", true);
        this.$store.commit("SET_LOADING_DIALOG", true);
        let url = this.$route.query.redirect;
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            this.$store.dispatch("loginAndSignup", { userCredential, url });
          })
          .catch(() => {
            this.$store.dispatch("errorLoginAndSignup");
          });
      }
    },
    signup() {
      if (this.email == "" || this.password == "") {
        this.checkValid = true;
      } else {
        this.$store.commit("SET_OPEN_DIALOG", true);
        this.$store.commit("SET_AUTHEN_DIALOG", true);
        this.$store.commit("SET_LOADING_DIALOG", true);
        let url = this.$route.query.redirect;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            this.$store.dispatch("loginAndSignup", { userCredential, url });
          })
          .catch(() => {
            this.$store.dispatch("errorLoginAndSignup");
          });
      }
    },
  },
  beforeRouteLeave() {
    console.log("good bye!");
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

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
