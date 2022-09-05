<template>
  <form @submit.prevent="Save()" @reset="Cancel()">
    <div class="row">
      <div class="mb-3 col-md-4">
        <label class="form-label">Mandante</label>
        <select class="form-select" v-model="team_a" required>
          <option value="" selected>Escolha uma Seleção</option>
          <option v-for="(team, index) in teams" :value="team.id" :key="index">
            {{ team.name }}
          </option>
        </select>
      </div>
      <div class="mb-3 col-md-4">
        <label class="form-label">Visitante</label>
        <select class="form-select" v-model="team_b" required>
          <option value="" selected>Escolha uma Seleção</option>
          <option v-for="(team, index) in teams" :value="team.id" :key="index">
            {{ team.name }}
          </option>
        </select>
      </div>
      <div class="mb-3 col-md-4">
        <label class="form-label">Data</label>
        <input
          type="datetime-local"
          class="form-control"
          placeholder="Escolha o dia e horário do jogo"
          required
          v-model="matchday"
        />
      </div>
      <div class="mb-3 col-md-6">
        <label class="form-label">Placar Mandante</label>
        <input
          type="number"
          class="form-control"
          placeholder="Escolha o dia e horário do jogo"
          min="0"
          step="1"
          required
          v-model="goal_a"
        />
      </div>
      <div class="mb-3 col-md-6">
        <label class="form-label">Placar Visitante</label>
        <input
          type="number"
          class="form-control"
          placeholder="Escolha o dia e horário do jogo"
          min="0"
          step="1"
          required
          v-model="goal_b"
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
      team_a: "",
      team_b: "",
      goal_a: 0,
      goal_b: 0,
      matchday: "",
    };
  },

  methods: {
    async Save() {
      const formItens = this.mountForm();
      const response = await store.postMatchs(formItens);
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

    emitChangeView() {
      this.$emit("changeView", "MatchsTableComponent");
    },

    mountForm() {
      const setData = JSON.stringify({
        team_a: this.team_a,
        team_b: this.team_b,
        goal_a: this.goal_a,
        goal_b: this.goal_b,
        matchday: this.matchday,
      });
      return setData;
    },
  },
};
</script>

<style></style>
