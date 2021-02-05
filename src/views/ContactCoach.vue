<template>
  <div>
    <section>
      <my-card>
        <h2>{{ listCoaches.firstName + " " + listCoaches.lastName }}</h2>
        <h3>{{ listCoaches.hourlyRate }}$/hour</h3>
      </my-card>
    </section>
    <section>
      <my-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <button-link :link="'#'">Contact</button-link>
          <coaches-contact-form :id="listCoaches.id" />
        </header>
      </my-card>
    </section>
    <section>
      <my-card>
        <my-badge v-for="area in listCoaches.areas" :key="area" :area="area">
          {{ area.toUpperCase() }}</my-badge
        >
        <p>{{ listCoaches.description }}</p>
      </my-card>
    </section>
  </div>
</template>

<script>
import MyCard from "../components/common/MyCard";
import ButtonLink from "../components/common/ButtonLink";
import MyBadge from "../components/common/MyBadge";
import CoachesContactForm from "../components/coaches/CoachesContactForm.vue";
import axios from "axios";
export default {
  name: "ContacCoach",
  components: { MyCard, ButtonLink, MyBadge, CoachesContactForm },
  data() {
    return {
      listCoaches: [],
    };
  },
  created() {
    axios
      .get(
        "https://my-coaches-default-rtdb.firebaseio.com/coaches/" +
          this.$route.params.id +
          ".json"
      )
      .then((response) => {
        this.listCoaches = response.data;
      });
  },
  beforeRouteLeave() {
    console.log("good bye!");
  },
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
