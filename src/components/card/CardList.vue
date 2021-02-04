<template>
  <ul class="card-list" v-for="list in allList" :key="list.id">
    <card-item :listItem="list"></card-item>
  </ul>
</template>

<script>
import CardItem from "./CardItem";
export default {
  name: "CardList",
  components: { CardItem },
  computed: {
    allList() {
      return this.$store.getters.allCoaches;
    },
  },
};
</script>

<style>
.card-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
