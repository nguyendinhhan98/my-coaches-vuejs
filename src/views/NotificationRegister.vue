<template>
  <section>
    <my-card>
      <h2>Page not found</h2>
      <h3>
        Bạn đã đăng ký-Vui lòng không lươn lẹo ~~ Vui lòng trở về
        <a href="/coaches" class="">coaches</a>
        .
      </h3>
    </my-card>
  </section>
</template>

<script>
import MyCard from "../components/common/MyCard";
export default {
  components: { MyCard },
  name: "NotificationRegister",
};
</script>

<style scoped>
header,
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
</style>
