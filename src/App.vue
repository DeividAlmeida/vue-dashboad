<template>
  <MenuComponent />
  <RouterView />
</template>

<script lang="ts">
import MenuComponent from "@/components/MenuComponent.vue";
export default {
  components: {
    MenuComponent,
  },
};
</script>
<style scoped></style>
