import { createApp } from "vue";
import App from "./App.vue";
import Socketio from "@/plugins/socket";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import './assets/tailwind.css'
const app = createApp(App);

app.use(Socketio, {
  connection: "http://localhost:3000",
  options: {
    transports: ["websocket"],
  },
});

app.use(VueApexCharts);
app.use(router);
app.mount("#app");
