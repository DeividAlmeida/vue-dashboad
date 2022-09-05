<template>
  <component :is="view" @change-View="changeView" />
</template>

<script>
import MatchsTableComponent from "@/components/MatchsTableComponent.vue";
import MatchsFormComponent from "@/components/MatchsFormComponent.vue";
import { mainStore } from "@/stores/mainStore";
const store = mainStore();
export default {
  components: {
    MatchsTableComponent,
    MatchsFormComponent,
  },
  data() {
    return {
      view: "",
    };
  },
  methods: {
    changeView(view) {
      this.view = view;
      this.checkTitle();
    },

    checkTitle() {
      if (this.view == "MatchsTableComponent") {
        store.changeTitle("Lista de Jogos");
      } else {
        store.changeTitle("Cadastrar Jogo");
      }
    },
  },
  async mounted() {
    if (store.matchs.length === 0) {
      await store.getMatchs();
    }
    this.changeView("MatchsTableComponent");
  },
};
</script>

<style></style>
