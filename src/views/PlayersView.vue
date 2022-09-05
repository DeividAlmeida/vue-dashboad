<template>
  <component :is="view" @change-View="changeView" />
</template>

<script>
import PlayersTableComponent from "@/components/PlayersTableComponent.vue";
import PlayersFormComponent from "@/components/PlayersFormComponent.vue";
import { mainStore } from "@/stores/mainStore";
const store = mainStore();
export default {
  components: {
    PlayersTableComponent,
    PlayersFormComponent,
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
      if (this.view == "PlayersTableComponent") {
        store.changeTitle("Lista de Jogadores");
      } else {
        store.changeTitle("Cadastrar Jogador");
      }
    },
  },
  async mounted() {
    if (store.players.length === 0) {
      await store.getPlayers();
    }
    this.changeView("PlayersTableComponent");
  },
};
</script>

<style></style>
