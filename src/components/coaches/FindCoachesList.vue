<template>
  <section>
    <my-card>
      <div class="controls">
        <my-button class="outline">
          Refresh
        </my-button>
        <template v-if="auth">
          <button-link :link="'/register'">
            Register as Coach
          </button-link>
        </template>
        <template v-else>
          <button-link :link="'/auth'" :query="'register'">
            Login to Register as Coach
          </button-link>
        </template>
      </div>
      <card-list></card-list>
    </my-card>
  </section>
</template>

<script>
import MyCard from "../common/MyCard";
import CardList from "../card/CardList";
import MyButton from "../common/MyButton";
import ButtonLink from "../common/ButtonLink";
import { mapState } from "vuex";
export default {
  name: "FindCoachesList",
  components: { MyCard, CardList, MyButton, ButtonLink },
  computed: mapState(["auth"]),
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
