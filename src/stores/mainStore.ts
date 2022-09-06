import { defineStore } from "pinia";

export const mainStore = defineStore("mainStore", {
  state: () => ({
    title: "Carregando..." as string,
    teams: [],
    players: [],
    matchs: [],
    tableConfig: {
      editableColumns: ["image"],
      filterByColumn: true,
      texts: {
        count:
          "Mostrando de {from} a {to} de um total de {count} itens |{count} Itens |Um Item ",
        first: "Primeiro",
        last: "Último",
        filter: "Filtrar:",
        filterPlaceholder: "Buscar",
        limit: "Itens:",
        page: "Page:",
        noResults: "Nenhum item encontrado",
        filterBy: "Filtrar por {column}",
        loading: "Carregando...",
        defaultOption: "Selecionar {column}",
        columns: "Coluna",
      },
    },
  }),

  actions: {
    changeTitle(title) {
      this.title = title;
    },

    async getTeams() {
      const response = await fetch("http://127.0.0.1:8000/api/teams");
      const data = await response.json();
      this.teams = data;
    },

    async getPlayers() {
      const response = await fetch("http://127.0.0.1:8000/api/players");
      const data = await response.json();
      this.players = data;
    },

    async getMatchs() {
      const response = await fetch("http://127.0.0.1:8000/api/matchs");
      const data = await response.json();
      this.matchs = data;
    },

    async postTeams(items) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/teams", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: items,
        });
        if (!response.ok) return false;
        this.teams = await response.json();
        return true;
      } catch (e) {
        return false;
      }
    },

    async postPlayers(items) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/players", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: items,
        });
        if (!response.ok) return false;
        this.players = await response.json();
        return true;
      } catch (e) {
        return false;
      }
    },

    async postMatchs(items) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/matchs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: items,
        });
        if (!response.ok) return false;
        this.matchs = await response.json();
        return true;
      } catch (e) {
        return false;
      }
    },
  },
});
