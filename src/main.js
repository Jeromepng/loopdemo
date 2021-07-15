import { createApp } from "vue"
import App from "./App.vue"

const app = createApp(App)
import router from "./router"
app.use(router)
import AOS from "aos"
import "aos/dist/aos.css"
app.AOS = new AOS.init()
app.mount("#app")
