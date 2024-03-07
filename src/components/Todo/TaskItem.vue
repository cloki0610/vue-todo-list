<template>
  <div
    class="bg-secondary m-1 rounded-xl p-3 min-w-[200px] shadow-2xl hover:scale-105 overflow-visible transition">
    <div class="font-bold text-lg p-5">{{ task.description }}</div>
    <div class="flex justify-center gap-2 text-white">
      <base-button @click="taskStore.toggleTask(props.task)"
        :class="`${task.done ? 'bg-primary' : 'bg-[#ff0000a9]'} grow`"><font-awesome-icon
          :icon="`fa-solid ${taskDone}`" /></base-button>
      <base-button @click="updateTaskForm"
        class="bg-white border-2 border-black text-black"><font-awesome-icon
          icon="fa-solid fa-pen" /></base-button>
      <base-button @click="removeTask"
        class="bg-white border-2 border-[#ff0000a9] text-[#ff0000a9]"><font-awesome-icon
          icon="fa-solid fa-trash" /></base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTaskStore } from '../../store/task';

const props = defineProps(['task']);
const taskStore = useTaskStore();
const taskDone = computed(() => props.task.done ? "fa-check" : "fa-xmark");

const removeTask = () => {
  taskStore.setSelectTask(props.task.id);
  taskStore.showConfirmModal();
};

const updateTaskForm = () => {
  taskStore.setFormType({
    type: "UPDATE",
    id: props.task.id,
  });
  taskStore.showFormModal();
};
</script>
