<template>
  <form @submit.prevent="Save()" @reset="Cancel()">
    <div class="row">
     <div class="mb-3 col-md-4">
        <label class="form-label">Seleções</label>
        <select class="form-select" v-model="team_id" required>
          <option value="" selected>Escolha uma Seleção</option>
          <option v-for="(team, index) in teams" :value="team.id" :key="index">
            {{ team.name }}
          </option>
        </select>
      </div>
      <div class="mb-3 col-md-4">
        <label class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          placeholder="Nome do Jogador"
          required
          v-model="name"
        />
      </div>
      <div class="mb-3 col-md-4">
        <label class="form-label">Número</label>
        <input
          type="number"
          step="1"
          min="1"
          class="form-control"
          placeholder="Número do Jogador"
          v-model="number"
        />
      </div>
    </div>
    <button class="btn btn-primary m-1" type="submit">Salvar</button>
    <button class="btn btn-danger m-1 fw-bold" type="reset">Cancelar</button>
  </form>
</template>

<script>
import { mainStore } from "@/stores/mainStore";
const store = mainStore();

export default {
  emits: ["changeView"],

  setup() {
    return {
      teams: store.teams,
      name: "",
      number: "",
      team_id: "",
    };
  },

  methods: {
    async Save() {
      const formItens = this.mountForm();
      const response = await store.postPlayers(formItens);
      if (response) {
        this.emitChangeView();
        this.$toast.success(`Dados salvos com sucesso !`);
      } else {
        this.$toast.error(`Houve algum erro ao salvar os dados !`);
      }
    },

    Cancel() {
      this.$toast.info(`Dados não foram salvos !`);
      this.emitChangeView();
    },

    imgToBase64(input) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    },

    emitChangeView() {
      this.$emit("changeView", "PlayersTableComponent");
    },

    mountForm() {
      const setData = JSON.stringify({
        name: this.name,
        number: this.number,
        team_id: this.team_id,
      });
      return setData;
    },
  },
};
</script>

<style></style>
