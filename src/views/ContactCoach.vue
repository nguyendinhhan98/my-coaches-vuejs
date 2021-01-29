<template>
  <section>
    <my-card>
      <h2>Dinh Han</h2>
      <h3>$200/hour</h3>
    </my-card>
  </section>
  <section>
    <my-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <button-link>Contact</button-link>
        <coaches-contact-form />
      </header>
    </my-card>
  </section>
  <section>
    <my-card>
      <my-badge>BACKEND</my-badge>
      <p>Welcome!</p>
    </my-card>
  </section>
</template>

<script>
import MyCard from "../components/common/MyCard";
import ButtonLink from "../components/common/ButtonLink";
import MyBadge from "../components/common/MyBadge";
import CoachesContactForm from "../components/coaches/CoachesContactForm.vue";
export default {
  name: "ContacCoach",
  components: { MyCard, ButtonLink, MyBadge, CoachesContactForm },
};
</script>

<style scoped>
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
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
