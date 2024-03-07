<template>
  <base-modal>
    <h2 class="text-center text-lg font-bold">Confirm</h2>
    <h2 class="my-10 text-center" v-if="currentTask">
      Do you want to remove Task "{{ currentTask.description }}" ?
    </h2>
    <h2 v-else="currentTask">No class Selected</h2>
    <div class="flex justify-center gap-2 text-white" v-if="currentTask">
      <base-button @click="removeTask"
        class="bg-primary text-white grow"><font-awesome-icon
          icon="fa-solid fa-check" /></base-button>
      <base-button @click="closeModal" class="bg-[#ff0000a9] text-white grow">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </base-button>
    </div>
  </base-modal>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { useTaskStore } from '../../store/task';
import { Task } from "../../store/interface";

const taskStore = useTaskStore();

const currentTask: Ref<Task | undefined> = ref({
  id: "",
  description: "null",
  done: false,
});

onMounted(() => {
  if (!taskStore.selectTask) {
    taskStore.closeModal();
    return;
  }
  return currentTask.value = taskStore.getTask(taskStore.selectTask);
});

const removeTask = () => {
  if (currentTask.value) {
    taskStore.deleteTask(currentTask.value);
    taskStore.resetSelect();
    taskStore.closeModal();
  }
};

const closeModal = () => {
  currentTask.value = {
    id: "",
    description: "null",
    done: false,
  };
  taskStore.resetSelect();
  taskStore.closeModal();
};
</script>
