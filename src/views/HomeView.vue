<template>
  <div class="row d-flex justify-content-center m-3">
    <div class="col-md-4 my-2 text-wrap">
      <div class="card w-100" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title text-center">Seleções Cadastradas</h5>
          <h3 class="card-text text-center">{{ store.teams.length }}</h3>
        </div>
      </div>
    </div>
    <div class="col-md-4 my-2 text-wrap">
      <div class="card w-100" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title text-center">Jogadores Cadastrados</h5>
          <h3 class="card-text text-center">{{ store.players.length }}</h3>
        </div>
      </div>
    </div>
    <div class="col-md-4 my-2 text-wrap">
      <div class="card w-100" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title text-center">Partidas Cadastradas</h5>
          <h3 class="card-text text-center">{{ store.matchs.length }}</h3>
        </div>
      </div>
    </div>
  </div>
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
