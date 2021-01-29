<template>
  <span class="card__option">
    <input type="checkbox" class="card__option-item" :value="area" :id="area" />
    <label :for="area">{{ area }}</label>
  </span>
</template>

<script>
export default {
  name: "FilterCoach",
  props: ["area"],
};
</script>

<style scoped>
.card__option {
  margin-right: 1rem;
}
.card__option > input + label {
  vertical-align: middle;
}

input {
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
}

label {
  margin-left: 0.25rem;
}
</style>
