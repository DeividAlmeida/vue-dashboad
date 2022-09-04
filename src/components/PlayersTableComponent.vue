<template>
  <div class="d-block">
    <div class="w-100 d-flex justify-content-center mb-3">
      <button
        class="btn btn-primary"
        @click="$emit('changeView', 'PlayersFormComponent')"
      >
        Adicionar Seleção
      </button>
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <template v-slot:image="{ row }">
        <img height="50" :src="row.image" />
      </template>
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
      columns: ["id", "name", "number", "team"],
      tableData: store.players,
      options: {
        ...store.tableConfig,
        headings: {
          name: "Nome",
          number: "Número",
          team: "Seleção",
        },
      },
    };
  },
};
</script>

<style></style>
