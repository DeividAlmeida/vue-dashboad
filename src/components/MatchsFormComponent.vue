<template>
  <form @submit.prevent="Save()" @reset="Cancel()">
    <div class="row">
      <div class="mb-3 col-md-4">
        <label class="form-label">Mandante</label>
        <select
          class="form-select"
          v-model="team_a"
          required
          @change="setPlayersA()"
        >
          <option value="" selected>Escolha uma Seleção</option>
          <option v-for="(team, index) in teams" :value="team.id" :key="index">
            {{ team.name }}
          </option>
        </select>
      </div>
      <div class="mb-3 col-md-4">
        <label class="form-label">Visitante</label>
        <select
          class="form-select"
          v-model="team_b"
          required
          @change="setPlayersB()"
        >
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
          placeholder="Dia da partida"
          required
          v-model="matchday"
        />
      </div>
      <div class="mb-3 col-md-6">
        <label class="form-label">Placar Mandante</label>
        <input
          type="number"
          class="form-control"
          placeholder="Gols dos Mandante"
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
          placeholder="Gols do Visitante"
          min="0"
          step="1"
          required
          v-model="goal_b"
        />
      </div>
    </div>
    <hr />
    <div class="row">
      <h5 class="d-flex justify-content-center">Logs da Partida</h5>
      <div class="mb-3 col-md-6">
        <label class="form-label">Tipo de Log</label>
        <select class="form-select" v-model="log_emoji">
          <option value="" selected>Escolha uma Opção</option>
          <option value="⚽⬆">Gol</option>
          <option value="⚽⬇">Gol Contra</option>
          <option value="🟨">Cartão Amarelo</option>
          <option value="🟨🟥">Segundo Cartão Amarelo</option>
          <option value="🟥">Cartão Vermelho</option>
          <option value="🔃">Substituição</option>
        </select>
      </div>
      <div class="mb-3 col-md-6">
        <label class="form-label">Log do Time</label>
        <select class="form-select" v-model="log_team">
          <option value="" selected>Escolha uma Seleção</option>
          <option value="0">Mandante</option>
          <option value="1">Visitante</option>
        </select>
      </div>
      <div class="mb-3 col-md-6">
        <label class="form-label">Minutos de partida</label>
        <input
          type="number"
          class="form-control"
          placeholder="Escolha o dia e horário da patida"
          min="0"
          step="1"
          v-model="log_time"
        />
      </div>
      <div class="mb-3 col-md-6" v-if="log_team == 0">
        <label class="form-label">Jogador</label>
        <select class="form-select" v-model="log_player">
          <option value="" selected>Escolha um Jogador</option>
          <option
            v-for="(player, index) in players_a"
            :value="player.name"
            :key="index"
          >
            {{ player.name }}
          </option>
        </select>
      </div>
      <div class="mb-3 col-md-6" v-else-if="log_team == 1">
        <label class="form-label">Jogador</label>
        <select class="form-select" v-model="log_player">
          <option value="" selected>Escolha um Jogador</option>
          <option
            v-for="(player, index) in players_b"
            :value="player.name"
            :key="index"
          >
            {{ player.name }}
          </option>
        </select>
      </div>
      <div class="mb-3 col-md-6" v-if="log_team == 0 && log_emoji == '🔃'">
        <label class="form-label">Jogador Substituto</label>
        <select class="form-select" v-model="log_player_second">
          <option value="" selected>Escolha um Jogador</option>
          <option
            v-for="(player, index) in players_a"
            :value="player.name"
            :key="index"
          >
            {{ player.name }}
          </option>
        </select>
      </div>
      <div class="mb-3 col-md-6" v-else-if="log_team == 1 && log_emoji == '🔃'">
        <label class="form-label">Jogador Substituto</label>
        <select class="form-select" v-model="log_player_second">
          <option value="" selected>Escolha um Jogador</option>
          <option
            v-for="(player, index) in players_b"
            :value="player.name"
            :key="index"
          >
            {{ player.name }}
          </option>
        </select>
      </div>
      <div class="col-12 d-flex justify-content-end">
        <button class="btn btn-primary m-1" @click="addLog()" type="button">
          Adicionar
        </button>
      </div>
    </div>
    <div class="row m-4" v-if="logs_a.length > 0 || logs_b.length > 0">
      <div class="col-md-6">
        <h5 class="m-3">Mandante</h5>
        <div v-for="(log, index) of logs_a" :key="index" class="d-block">
          <div class="d-flex justify-content-between">
            <span>{{ log }}</span>
            <button
              class="btn btn-danger m-1 fw-bold"
              type="button"
              @click="removeLog(index, 0)"
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h5 class="m-3">Visitante</h5>
        <div v-for="(log, index) of logs_b" :key="index" class="d-block">
          <div class="d-flex justify-content-between">
            <span>{{ log }}</span>
            <button
              class="btn btn-danger m-1 fw-bold"
              type="button"
              @click="removeLog(index, 1)"
            >
              X
            </button>
          </div>
        </div>
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

  data() {
    return {
      teams: store.teams,
      team_a: "",
      team_b: "",
      players_a: null,
      players_b: null,
      goal_a: 0,
      goal_b: 0,
      logs_a: [],
      logs_b: [],
      matchday: "",
      log_emoji: "",
      log_team: "",
      log_player: "",
      log_player_second: "",
      log_time: "0",
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
        goals_a: this.goal_a,
        goals_b: this.goal_b,
        logs_a: JSON.stringify(this.logs_a),
        logs_b: JSON.stringify(this.logs_b),
        matchday: this.matchday,
      });
      return setData;
    },

    async setPlayersA() {
      this.players_a = await store.getTeamPlayers(this.team_a);
    },

    async setPlayersB() {
      this.players_b = await store.getTeamPlayers(this.team_b);
    },

    addLog() {
      let log;
      switch (this.log_emoji) {
        case "⚽⬆":
          log = `[Gol] ${this.log_player} ${this.log_emoji} '${this.log_time}`;
          break;

        case "⚽⬇":
          log = `[Gol Contra] ${this.log_player} ${this.log_emoji} '${this.log_time}`;
          break;

        case "🟨":
          log = `[Cartão Amarelo] ${this.log_player} ${this.log_emoji} '${this.log_time}`;
          break;

        case "🟨🟥":
          log = `[Segundo Cartão Amarelo] ${this.log_player} ${this.log_emoji} '${this.log_time}`;
          break;

        case "🟥":
          log = `[Cartão Vermelho] ${this.log_player} ${this.log_emoji} '${this.log_time}`;
          break;
        case "🔃":
          log = `[Substituição] ${this.log_player} ${this.log_emoji} ${this.log_player_second} '${this.log_time}`;
          break;
      }

      if (this.log_team == 0) {
        this.logs_a.push(log);
      } else {
        this.logs_b.push(log);
      }
    },

    removeLog(i, team) {
      if (team == 0) {
        this.logs_a.splice(i, 1);
      } else {
        this.logs_b.splice(i, 1);
      }
    },
  },
};
</script>

<style></style>
