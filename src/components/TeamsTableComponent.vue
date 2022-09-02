<template>
  <div class="d-block">
    <div class="w-100 d-flex justify-content-center mb-3">
      <button
        class="btn btn-primary"
        @click="$emit('changeView', 'TeamsFormComponent')"
      >
        Adicionar Seleção
      </button>
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <template v-slot:image="{ row }">
        <img width="50" :src="row.image" />
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
      columns: ["image", "id", "name"],
      tableData: store.teams,
      options: {
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
    };
  },
};
</script>

<style>
.VueTables__table > thead > tr:first-child {
  width: 50px !important;
}
</style>
