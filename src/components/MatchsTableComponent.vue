<template>
  <div class="d-block">
    <div class="w-100 d-flex justify-content-center">
      <button class="btn btn-primary" type="submit">Adicionar Seleção</button>
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: ["id", "name", "age"],
      tableData: [
        { id: 1, name: "John", age: "20" },
        { id: 2, name: "Jane", age: "24" },
        { id: 3, name: "Susan", age: "16" },
        { id: 4, name: "Chris", age: "55" },
        { id: 1, name: "John", age: "20" },
        { id: 2, name: "Jane", age: "24" },
        { id: 3, name: "Susan", age: "16" },
        { id: 4, name: "Chris", age: "55" },
        { id: 5, name: "Dan", age: "40" },
        { id: 1, name: "John", age: "20" },
        { id: 2, name: "Jane", age: "24" },
        { id: 3, name: "Susan", age: "16" },
        { id: 4, name: "Chris", age: "55" },
      ],
      options: {
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

<style></style>
