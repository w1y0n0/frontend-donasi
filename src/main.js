import { createApp } from 'vue'
import App from './App.vue'

/**
 * import Toastr
 */
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// create App Vue
const app = createApp(App)

// gunakan "Toast" di Vue Js dengan plugin "use"
app.use(Toast)

app.mount('#app')
