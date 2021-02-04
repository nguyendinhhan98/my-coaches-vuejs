<template>
  <form @submit.prevent="sendRequest">
    <div class="form-control">
      <label for="email">Your E-Mail</label
      ><input type="email" id="email" v-model="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label
      ><textarea rows="5" id="message" v-model="message"></textarea>
    </div>
    <div class="actions">
      <my-button>Send Message</my-button>
    </div>
  </form>
</template>

<script>
import MyButton from "../common/MyButton";
import axios from "axios";

export default {
  components: { MyButton },
  props: ["id"],
  name: "CoachesContactForm",
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    sendRequest() {
      axios
        .post("https://my-coaches-default-rtdb.firebaseio.com/request.json", {
          id: this.id,
          email: this.email,
          message: this.message,
        })
        .catch((error) => console.log(error));

      this.$router.push({ name: "Coaches" });
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}

.label {
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
</style>
