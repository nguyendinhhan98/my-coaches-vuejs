<template>
  <div :class="[openDialog ? 'backdrop' : '']"></div>
  <transition name="dialog">
    <dialog :open="openDialog" v-if="openDialog">
      <header>
        <template v-if="authenDialog">
          <h2>Authenticating...</h2>
        </template>
        <template v-else>
          <h2>An error occurred</h2>
        </template>
      </header>
      <section>
        <template v-if="loadingDialog">
          <my-loading></my-loading>
        </template>
        <template v-else>
          <p>Failed to authenticate. Check your login data.</p>
        </template>
      </section>
      <menu>
        <button @click="closeDialog">
          Close
        </button>
      </menu>
    </dialog>
  </transition>
</template>

<script>
import MyLoading from "../loading/MyLoading";
import { mapState } from "vuex";
export default {
  name: "ErrorAuth",
  components: { MyLoading },
  computed: mapState(["openDialog", "authenDialog", "loadingDialog"]),
  methods: {
    closeDialog() {
      this.$store.commit("SET_OPEN_DIALOG", false);
    },
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
dialog {
  width: 40rem;
  position: fixed;
  top: 20vh;
  left: calc(50% - 20rem);
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px #00000042;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #fff;
}

header {
  background-color: #3a0061;
  color: #fff;
  width: 100%;
  padding: 1rem;
}

header > h2 {
  margin: 0;
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

section {
  padding: 1rem;
  display: block;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: #fff;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.5s;
}

.dialog-leave-active {
  transition: all 0.5s;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
