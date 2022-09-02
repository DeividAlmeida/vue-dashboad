<template>
  <div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <label for="formFile" class="form-label"
        >Default file input example</label
      >
      <input
        class="form-control"
        type="file"
        id="formFile"
        @change="imgToBase64($event.target)"
        accept="image/png, image/gif, image/jpeg"
      />
    </div>
    <button class="btn btn-primary" @click="Save()">Salvar Seleção</button>
  </div>
</template>

<script>
export default {
  emits: ["changeView"],

  data() {
    return {
      image: "",
    };
  },

  methods: {
    Save() {
      this.$emit("changeView", "TeamsTableComponent");
    },

    async imgToBase64(input) {
      const reader = new FileReader();
      reader.onload = (e) => (this.image = e.target.result);
      reader.readAsDataURL(input.files[0]);
    },
  },
};
</script>

<style></style>
