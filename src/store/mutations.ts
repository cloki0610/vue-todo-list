import { StoreState, Task } from ".";

export default {
  ADD_TASK(state: StoreState, payload: Task) {
    state.todoList = [
      { id: payload.id, description: payload.description, done: payload.done },
      ...state.todoList,
    ];
  },
  UPDATE_TASK(state: StoreState, payload: Task) {
    let selectedIndex = state.todoList.findIndex(
      (item) => item.id === payload.id
    );
    state.todoList[selectedIndex] = payload;
  },
  DELETE_TASK(state: StoreState, payload: Task) {
    state.todoList = state.todoList.filter((item) => item.id !== payload.id);
  },
  TOGGLE_TASK(state: StoreState, payload: Task) {
    let selectedIndex = state.todoList.findIndex(
      (item) => item.id === payload.id
    );
    state.todoList[selectedIndex].done = !state.todoList[selectedIndex].done;
  },
  SHOW_CONFIRM_MODAL(state: StoreState) {
    state.confirmModal = true;
  },
  SHOW_FORM_MODAL(state: StoreState) {
    state.formModal = true;
  },
  CLOSE_MODAL(state: StoreState) {
    state.confirmModal = false;
    state.formModal = false;
  },
  FORM_TYPE(
    state: StoreState,
    payload: { type: "ADD" | "UPDATE"; id?: string }
  ) {
    state.formType = payload.type;
    if (payload.id) state.selectTask = payload.id;
  },
  SELECT_TASK(state: StoreState, payload: string) {
    state.selectTask = payload;
  },
  RESET_SELECT(state: StoreState) {
    state.selectTask = null;
  },
};
