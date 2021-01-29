<template>
  <section class="find__coaches">
    <my-card>
      <h2 class="card__title">Find Your Coach</h2>
      <template v-for="area in allAreas" :key="area">
        <filter-coach :area="area" />
      </template>
    </my-card>
  </section>
</template>

<script>
import MyCard from "../common/MyCard";
import FilterCoach from "../filter/FilterCoach";
import { mapActions } from "vuex";
export default {
  name: "FindCoaches",
  components: { MyCard, FilterCoach },
  computed: {
    allAreas() {
      return this.$store.getters.allAreas;
    },
  },
  created() {
    this.getAreas();
  },
  methods: mapActions(["getAreas"]),
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
</style>
