import { createRouter, createWebHashHistory } from "vue-router";
import kostil from "../src/components/SelectCategory/kostil-page.vue";
import benches from "../src/components/SelectCategory/benches-page.vue";
import sets from "../src/components/SelectCategory/garden-sets.vue";
import sofas from "../src/components/SelectCategory/hanging-sofas.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: sofas },
    { path: "/benches", component: benches },
    { path: "/sets", component: sets },
    { path: "/kostil", component: kostil },
  ],
});
