<template>
  <the-heading />
  <router-view />
</template>
<script>
import TheHeading from "./components/common/TheHeading";
export default {
  name: "App",
  components: { TheHeading },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);

html {
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
:focus :active {
  outline: none;
}
</style>
