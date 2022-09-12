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
      <template v-slot:child_row="props">
        <div class="container">
          <div class="w-100 d-flex justify-content-center">
            <h5>{{ props.row.team_a }} {{ props.row.goals_a }}</h5>
            <span> &nbsp; vs &nbsp; </span>
            <h5>{{ props.row.goals_b }} {{ props.row.team_b }}</h5>
          </div>
          <div class="row">
            <div class="col-6 d-block">
              <h5 class="d-flex justify-content-center mb-5">Logs Mandantes</h5>
              <div v-for="(log, index) of props.row.logs_a" :key="index">
                <span class="w-100">
                  {{ log }}
                </span>
                <hr />
              </div>
            </div>
            <div class="col-6 d-block">
              <h5 class="d-flex justify-content-center mb-5">
                Logs Visitantes
              </h5>
              <div v-for="(log, index) of props.row.logs_b" :key="index">
                <span class="w-100">
                  {{ log }}
                </span>
                <hr />
              </div>
            </div>
          </div>
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

<style>
.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
  font-weight: bolder;
}

.VueTables__child-row-toggler--open::before {
  content: "-";
  font-weight: bolder;
}
</style>
