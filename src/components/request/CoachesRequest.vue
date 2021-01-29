<template>
  <section>
    <my-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <h3>
        You haven't received any requests yet!
      </h3>
    </my-card>
  </section>
</template>

<script>
import MyCard from "../common/MyCard";
export default {
  components: { MyCard },
  name: "CoachesRequest",
};
</script>

<style scoped>
header,
h3 {
  text-align: center;
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

h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
