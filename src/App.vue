<template>
  <div class="wrapper d-flex">
    <MenuComponent />
    <div class="content">
      <h3
        class="d-flex justify-content-center w-100 fw-bold align-items-center text-center p-2"
      >
        Sistema Copa do Mundo 2022 - Catar
      </h3>
      <div class="container">
        <div class="p-md-5">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MenuComponent from "@/components/MenuComponent.vue";
export default {
  components: {
    MenuComponent,
  },
};
</script>
<style scoped>
.wrapper {
  height: 1200px;
}

.wrapper > div > h3 {
  height: 60px;
  box-shadow: 0px -4px 17px var(--vt-c-indigo);
}
.content {
  width: 100%;
}
</style>
