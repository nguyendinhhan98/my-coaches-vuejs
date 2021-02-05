<template>
  <h2
    class="center"
    v-if="allList.length == 0 || $store.state.coaches.length == 0"
  >
    No Coaches Found!
  </h2>

  <ul v-else class="card-list">
    <card-item
      v-for="list in allList"
      :key="list.id"
      :listItem="list"
    ></card-item>
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

<style scoped>
.card-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.center {
  text-align: center;
  margin-top: 20px;
}
</style>
