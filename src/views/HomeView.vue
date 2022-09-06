<template>
  <div></div>
</template>

<script>
import { mainStore } from "@/stores/mainStore";
export default {
  setup() {
    const store = mainStore();
    return {
      store,
    };
  },
  mounted() {
    this.store.changeTitle("Seja Bem Vindo !!");
  },
};
</script>

<style></style>
