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
