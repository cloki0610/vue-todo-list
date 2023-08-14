import { createStore } from "vuex";

import mutations from "./mutations.ts";
import actions from "./actions.ts";
import getters from "./getters.ts";

export interface Task {
  id: string;
  description: string;
  done: boolean;
}

export interface StoreState {
  todoList: Task[];
  errorMsg: string;
  confirmModal: boolean;
  formModal: boolean;
  formType: "ADD" | "UPDATE";
  selectTask: string | null;
}

const store = createStore<StoreState>({
  state() {
    return {
      todoList: [],
      errorMsg: "",
      confirmModal: false,
      formModal: false,
      formType: "ADD",
      selectTask: null,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
