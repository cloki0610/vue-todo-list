import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Task } from "./interface.ts";

export const useState = defineStore("state", () => {
    // state
    const todoList = ref<Task[]>([]);
    const errorMsg = ref<string>("");
    const confirmModal = ref<boolean>(false);
    const formModal = ref<boolean>(false);
    const formType = ref<"ADD" | "UPDATE">("ADD");
    const selectTask = ref<string | null>(null);
    // computed
    const hasTask = computed(() => todoList.value && todoList.value.length > 0);
    const isModalOpen = computed(() => formModal || confirmModal);

    return {
        todoList,
        errorMsg,
        confirmModal,
        formModal,
        formType,
        selectTask,
        hasTask,
        isModalOpen,
    };
});
