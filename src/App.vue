<template>
  <the-heading />
  <router-view v-slot="{ Component }">
    <transition name="moveUp" mode="out-in">
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

.moveUp-leave-active {
  animation: moveUp 0.4s ease-in;
}

@keyframes moveUp {
  0% {
    transform: translatey(0px);
  }
  100% {
    transform: translateY(80px);
  }
}
*/ .moveUp-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.moveUp-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.moveUp-enter-active {
  transition: all 0.3s ease-out;
}

.moveUp-leave-active {
  transition: all 0.3s ease-in;
}

.moveUp-enter-to,
.moveUp-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
