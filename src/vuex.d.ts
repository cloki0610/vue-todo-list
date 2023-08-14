import { StoreState } from "./store";

declare module "vuex" {
  export * from "vuex/types/index.d.ts";
  export * from "vuex/types/helpers.d.ts";
  export * from "vuex/types/logger.d.ts";
  export * from "vuex/types/vue.d.ts";
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<StoreState>;
  }
}
