import { StoreState, Task } from "./index";

export default {
  HAS_TASK(state: StoreState) {
    return state.todoList && state.todoList.length > 0;
  },
  GET_TASK(state: StoreState) {
    let itemIndex = state.todoList.findIndex(
      (item: Task) => item.id === state.selectTask
    );
    return state.todoList[itemIndex];
  },
};
