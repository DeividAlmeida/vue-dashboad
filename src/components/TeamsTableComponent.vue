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
        <div class="w-100 d-flex justify-content-center">
          <img width="50" :src="row.image" />
        </div>
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
        ...store.tableConfig,
        headings: {
          image: "Imagem",
          name: "Nome",
        },
      },
    };
  },
};
</script>

<style>
.VueTables__table > thead > tr > th {
  width: 10px !important;
}
</style>
