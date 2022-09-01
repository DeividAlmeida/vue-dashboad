import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { ClientTable } from "v-tables-3";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ClientTable, {}, "bootstrap4");

app.mount("#app");
