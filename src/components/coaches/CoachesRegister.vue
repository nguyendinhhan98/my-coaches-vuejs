<template>
  <my-card>
    <div class="card">
      <h2>Register as a coach now!</h2>
      <form>
        <div class="form-control">
          <label for="firstname">Firstname</label>
          <input type="text" id="firstname" />
        </div>
        <div class="form-control">
          <label for="lastname">Lastname</label>
          <input type="text" id="lastname" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea id="description" rows="5"></textarea>
        </div>
        <div class="form-control">
          <label for="rate">Hourly Rate</label>
          <input type="number" id="rate" />
        </div>
        <div class="form-control">
          <h3>Areas of Expertise</h3>
          <div v-for="area in getAreas" :key="area">
            <filter-coach :area="area"></filter-coach>
          </div>
        </div>
        <my-button>Register</my-button>
      </form>
    </div>
  </my-card>
</template>

<script>
import MyCard from "../common/MyCard";
import MyButton from "../common/MyButton";
import FilterCoach from "../filter/FilterCoach";
export default {
  name: "CoachesRegister",
  components: { MyCard, MyButton, FilterCoach },
  computed: {
    getAreas() {
      return this.$store.getters.allAreas;
    },
  },
};
</script>

<style scoped>
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

form {
  display: block;
  margin-top: 0em;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
</style>
