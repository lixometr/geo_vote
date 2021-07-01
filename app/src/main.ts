import { createApp } from "vue";
import App from "./App.vue";
import Socketio from "@/plugins/socket";
import router from "./router";
import './assets/tailwind.css'
const app = createApp(App);

app.use(Socketio, {
  connection: "http://localhost:3000",
  options: {
    transports: ["websocket"],
  },
});

app.use(router);
app.mount("#app");
