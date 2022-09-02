import { defineStore } from "pinia";

export const mainStore = defineStore("mainStore", {
  state: () => ({
    title: "Seja bem vindo !!" as string,
    teams: [],
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
  },
});
