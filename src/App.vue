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
        <div class="px-md-5">
          <div class="card-head w-100 m-3">
            <div class="card">
              <div class="card-body">
                <h5 class="title fw-bold text-center">
                  {{ store.title }}
                </h5>
              </div>
            </div>
          </div>
          <RouterView @change-title="changeTitle(title)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MenuComponent from "../src/components/MenuComponent.vue";
import { mainStore } from "../src/stores/mainStore";
export default {
  setup() {
    const store = mainStore();
    return {
      store,
    };
  },
  components: {
    MenuComponent,
  },

  mounted() {
    this.store.getTeams();
    this.store.getPlayers();
    this.store.getMatchs();
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
