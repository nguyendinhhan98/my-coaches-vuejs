<template>
  <find-coaches />
  <find-coaches-list />
</template>

<script>
import FindCoaches from "./FindCoaches";
import FindCoachesList from "./FindCoachesList";
export default {
  components: { FindCoaches, FindCoachesList },
  created() {
    this.$store.dispatch("getUserRegister");
  },
  beforeRouteLeave(to, from) {
    console.log("good bye!");
  },
};
</script>

<style></style>
