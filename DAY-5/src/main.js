

import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from "vue3-google-login"

const client_id = "250810186745-g7g7utmpjtr0s2vkgd55h3ul7g3ltvpd.apps.googleusercontent.com";

createApp(App).use(vue3GoogleLogin, {
    clientId: client_id,
}).mount('#app')