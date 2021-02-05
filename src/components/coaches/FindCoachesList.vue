<template>
  <section>
    <my-card>
      <div class="controls">
        <my-button class="outline" @click="$store.dispatch('getCoaches')">
          Refresh
        </my-button>
        <template v-if="isRegister"> </template>
        <template v-else>
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
        </template>
      </div>
      <template v-if="loading">
        <my-loading></my-loading>
      </template>
      <template v-else>
        <card-list></card-list>
      </template>
    </my-card>
  </section>
</template>

<script>
import MyCard from "../common/MyCard";
import CardList from "../card/CardList";
import MyButton from "../common/MyButton";
import ButtonLink from "../common/ButtonLink";
import MyLoading from "../loading/MyLoading";
import { mapState } from "vuex";
export default {
  name: "FindCoachesList",
  components: { MyCard, CardList, MyButton, ButtonLink, MyLoading },
  computed: {
    ...mapState(["auth", "loading", "isRegister", "isFindCoaches"]),
  },
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
