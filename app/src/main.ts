import { createApp } from "vue";
import App from "./App.vue";
import Socketio from "@/plugins/socket";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import VueRellax from "vue-rellax";
import "@/assets/css/tailwind.css";
import "@/assets/css/styles.css";
const app = createApp(App);

app.use(Socketio, {
  connection:
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
  options: {
    transports: ["websocket"],
    // path: "/api/socket.io",
  },
});

app.use(VueApexCharts);
app.use(VueRellax);
app.use(router);
app.mount("#app");
