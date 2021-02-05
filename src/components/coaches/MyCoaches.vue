<template>
  <div>
    <find-coaches />
    <find-coaches-list />
  </div>
</template>

<script>
import FindCoaches from "./FindCoaches";
import FindCoachesList from "./FindCoachesList";
export default {
  components: { FindCoaches, FindCoachesList },
  created() {
    this.$store.dispatch("getCoaches");
    this.$store.dispatch("getUserRegister");
  },
  beforeRouteLeave() {
    console.log("good bye!");
  },
};
</script>

<style></style>
