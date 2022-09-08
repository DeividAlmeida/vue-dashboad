<template>
  <div class="d-block">
    <div class="w-100 d-flex justify-content-center mb-3">
      <button
        class="btn btn-primary"
        @click="$emit('changeView', 'MatchsFormComponent')"
      >
        Adicionar Partida
      </button>
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
    </v-client-table>
  </div>
</template>

<script>
import { mainStore } from "@/stores/mainStore";
const store = mainStore();
export default {
  emits: ["changeView"],
  setup() {
    return {
      columns: ["id", "team_a", "team_b", "matchday"],
      tableData: store.matchs,
      options: {
        ...store.tableConfig,
        headings: {
          team_a: "Mandante",
          team_b: "Visitante",
          matchday: "Data",
        },
      },
    };
  },
};
</script>

<style></style>
