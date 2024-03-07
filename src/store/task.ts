import { defineStore, storeToRefs } from "pinia";
import type { Task } from "./interface";
import { useState } from "./getters";

export const useTaskStore = defineStore("task", () => {
    // state
    const state = useState();
    const {
        todoList,
        errorMsg,
        confirmModal,
        formModal,
        formType,
        selectTask,
        hasTask,
        isModalOpen,
    } = storeToRefs(state);
    // Event
    //  Todo: Connect to back-end services
    const getTask = (selectTask: string) =>
        // Event to return details of selected task
        todoList.value.find((item: Task) => item.id === selectTask);
    const addTask = (payload: Task) => {
        // Add new task into state
        todoList.value = [
            {
                id: payload.id,
                description: payload.description,
                done: payload.done,
            },
            ...todoList.value,
        ];
    };
    const updateTask = (payload: Task) => {
        // Update selected state
        let selectedIndex = todoList.value.findIndex(
            (item) => item.id === payload.id
        );
        todoList.value[selectedIndex] = payload;
    };
    const deleteTask = (payload: Task) => {
        // delete selected state
        todoList.value = todoList.value.filter(
            (item) => item.id !== payload.id
        );
    };
    const toggleTask = (payload: Task) => {
        // set selected task is/is not complete
        let selectedItem = todoList.value.find(
            (item) => item.id === payload.id
        );
        if (selectedItem) {
            selectedItem.done = !selectedItem.done;
        }
    };
    const showConfirmModal = () => {
        // Event to trigger confirm modal
        confirmModal.value = true;
    };
    const showFormModal = () => {
        // Event to trigger form modal
        formModal.value = true;
    };
    const closeModal = () => {
        // Event to close all modal
        confirmModal.value = false;
        formModal.value = false;
    };
    const setFormType = (payload: { type: "ADD" | "UPDATE"; id?: string }) => {
        // Event to set the form type and select a task
        formType.value = payload.type;
        if (payload.id) selectTask.value = payload.id;
    };
    const setSelectTask = (payload: string) => {
        // Event to select a task
        selectTask.value = payload;
    };
    const resetSelect = () => {
        // Event to reset current selection
        selectTask.value = null;
    };
    // Output values
    return {
        todoList,
        errorMsg,
        confirmModal,
        formModal,
        formType,
        selectTask,
        hasTask,
        isModalOpen,
        getTask,
        addTask,
        updateTask,
        deleteTask,
        toggleTask,
        showConfirmModal,
        showFormModal,
        closeModal,
        setFormType,
        setSelectTask,
        resetSelect,
    };
});
