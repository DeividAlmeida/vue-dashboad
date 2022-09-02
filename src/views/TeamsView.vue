<template>
  <component :is="view" @change-View="changeView" />
</template>

<script>
import TeamsTableComponent from "@/components/TeamsTableComponent.vue";
import TeamsFormComponent from "@/components/TeamsFormComponent.vue";
export default {
  components: {
    TeamsTableComponent,
    TeamsFormComponent,
  },
  data() {
    return {
      view: "TeamsTableComponent",
    };
  },
  methods: {
    changeView(view) {
      this.view = view;
    },
  },
};
</script>

<style></style>
