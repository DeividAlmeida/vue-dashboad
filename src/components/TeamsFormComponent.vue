<template>
  <form @submit.prevent="Save()" @reset="Cancel()">
    <div class="row">
      <div class="mb-3 col-md-6">
        <label for="exampleFormControlInput1" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Nome da Seleção"
          required
          v-model="name"
        />
      </div>
      <div class="mb-3 col-md-6">
        <label for="formFile" class="form-label">Escudo</label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          @change="imgToBase64($event.target)"
          accept="image/png, image/gif, image/jpeg"
        />
        <small>Dimensões máximas recomendadas 400x400</small>
      </div>
    </div>
    <button class="btn btn-primary m-1" type="submit">Salvar</button>
    <button class="btn btn-danger m-1 fw-bold" type="reset">Cancelar</button>
  </form>
</template>

<script>
import { mainStore } from "@/stores/mainStore";
const store = mainStore();

export default {
  emits: ["changeView"],

  data() {
    return {
      name: "",
      image: "",
      validation: false,
    };
  },

  methods: {
    async Save() {
      this.formValidation();
      if (this.validation === true)
        return this.$toast.error(`Imagem com dimensões além do recomendado !`);

      const formItens = this.mountForm();
      const response = await store.postTeams(formItens);
      console.log(response);
      if (response) {
        this.emitChangeView();
        this.$toast.success(`Dados salvos com sucesso !`);
      } else {
        this.$toast.error(`Houve algum erro ao salvar os dados !`);
      }
    },

    Cancel() {
      this.$toast.info(`Dados não foram salvos !`);
      this.emitChangeView();
    },

    imgToBase64(input) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    },

    emitChangeView() {
      this.$emit("changeView", "TeamsTableComponent");
    },

    formValidation() {
      this.validation = this.image.length > 65535;
    },

    mountForm() {
      const setData = JSON.stringify({
        name: this.name,
        image: this.image,
      });
      return setData;
    },
  },
};
</script>

<style></style>
