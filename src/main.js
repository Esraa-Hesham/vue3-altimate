import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueExcelXlsx from "vue-excel-xlsx";

createApp(App).use(store).use(router).use(VueExcelXlsx).mount("#app");
