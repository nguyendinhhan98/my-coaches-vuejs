<template>
  <section class="find__coaches">
    <my-card>
      <h2 class="card__title">Find Your Coach</h2>
      <span class="card__option">
        <input
          type="checkbox"
          class="card__option-item"
          value="frontend"
          @change="FILTER_COACHES(areas)"
          v-model="areas"
        />
        <label for="frontend">Frontend</label>
      </span>
      <span class="card__option">
        <input
          type="checkbox"
          class="card__option-item"
          value="backend"
          @change="FILTER_COACHES(areas)"
          v-model="areas"
        />
        <label for="backend">Backend</label>
      </span>
      <span class="card__option">
        <input
          type="checkbox"
          class="card__option-item"
          value="fullstack"
          @change="FILTER_COACHES(areas)"
          v-model="areas"
        />
        <label for="fullstack">Fullstack</label>
      </span>
    </my-card>
  </section>
</template>

<script>
import MyCard from "../common/MyCard";
import FilterCoach from "../filter/FilterCoach";
import { mapMutations } from "vuex";
export default {
  name: "FindCoaches",
  components: { MyCard, FilterCoach },
  data() {
    return {
      areas: ["frontend", "backend", "fullstack"],
    };
  },
  computed: {
    allAreas() {
      return this.$store.getters.allAreas;
    },
  },
  methods: mapMutations(["FILTER_COACHES"]),
};
</script>

<style scoped>
.card__title {
  margin: 0.5rem 0;
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

.card__option {
  margin-right: 1rem;
}

.card__option > label {
  margin-left: 0.25rem;
}

input {
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
}
</style>
