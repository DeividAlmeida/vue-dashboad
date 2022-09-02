<template>
  <component :is="view" @change-View="changeView" />
</template>

<script>
import TeamsTableComponent from "@/components/TeamsTableComponent.vue";
import TeamsFormComponent from "@/components/TeamsFormComponent.vue";
import { mainStore } from "@/stores/mainStore";
const store = mainStore();
export default {
  components: {
    TeamsTableComponent,
    TeamsFormComponent,
  },
  data() {
    return {
      view: "",
    };
  },
  methods: {
    changeView(view) {
      this.view = view;
      if (view == "TeamsTableComponent") {
        store.changeTitle("Lista de Seleções");
      } else {
        store.changeTitle("Cadastrar Seleção");
      }
    },
  },
  async mounted() {
    if (store.teams.length === 0) {
      await store.getTeams();
    }
    this.view = "TeamsTableComponent";
  },
};
</script>

<style></style>
