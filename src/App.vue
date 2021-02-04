<template>
  <the-heading />
  <router-view v-slot="{ Component }">
    <transition name="animate" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
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

.animate-enter-from {
  transform: translateY(-50px);
  transition: 0.3s;
  opacity: 0;
}
.animate-enter-to {
  transform: translateY(0);
  transition: 0.3s;
  opacity: 1;
}
.animate-enter-active {
  transition-delay: 0.3s;
  animation-delay: 0.3s;
}
.animate-leave-from {
  transform: translateY(0px);
  transition: 0.3s;
  opacity: 1;
}
.animate-leave-to {
  transform: translateY(50px);
  transition: 0.3s;
  opacity: 0;
}
</style>
