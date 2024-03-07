import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrash,
    faPen,
    faCheck,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseModal from "./components/UI/BaseModal.vue";

const app = createApp(App);
const pinia = createPinia();

library.add(faTrash, faPen, faCheck, faXmark);

app.use(pinia);
app.component("base-button", BaseButton);
app.component("base-container", BaseContainer);
app.component("base-modal", BaseModal);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
