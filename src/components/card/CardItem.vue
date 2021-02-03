<template>
  <li class="card-item">
    <h3 class="card__name-item">
      {{ listItem.firstName + " " + listItem.lastName }}
    </h3>
    <h4 class="card__price-item">${{ listItem.hourlyRate }}/hour</h4>
    <div class="card-badge">
      <my-badge
        v-for="(area, index) in listItem.areas"
        :key="index"
        :area="area"
      >
        {{ area.toUpperCase() }}
      </my-badge>
    </div>
    <div class="action">
      <button-link :link="`/coaches/${listItem.id}/contact`" class="outline"
        >Contact</button-link
      >
      <button-link :link="`/coaches/${listItem.id}`">View Details</button-link>
    </div>
  </li>
</template>

<script>
import MyBadge from "../common/MyBadge";
import ButtonLink from "../common/ButtonLink";
export default {
  name: "CardItem",
  components: { MyBadge, ButtonLink },
  props: ["listItem"],
};
</script>

<style scoped>
.card-item {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.card__name-item,
.card-badge,
.card__price-item,
.card-action {
  margin: 0.5rem 0;
}

.card__name-item {
  font-size: 1.5rem;
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

h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.action {
  display: flex;
  justify-content: flex-end;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.outline:hover {
  background-color: #edd2ff;
}
</style>
