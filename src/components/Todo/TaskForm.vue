<template>
  <base-modal>
    <form @submit.prevent="submitForm" class="m-10">
      <h1 class="font-bold text-4xl text-center mb-10 select-none">
        {{ taskStore.formType === "ADD" ? "New Task" : "Update Task" }}
      </h1>
      <div :class="`my-[0.5rem] ${!description.isValid && 'border-1 border-[red]'
      }`">
        <label for="description">Description</label>
        <input type="text" class="w-full p-2 mt-3 h-8 rounded"
          name="description" id="description" v-model.trim="description.val"
          @blur="clearValidity()" />
        <p v-if="!description.isValid" class="text-[red]">
          Task description must not be empty.
        </p>
      </div>
      <div class="mt-8 flex justify-center gap-10">
        <base-button type="submit" class="bg-black text-white">{{
      taskStore.formType === "ADD" ? "Create" : "Update"
    }}</base-button>
        <base-button type="button" class="bg-primary" @click="closeModal">
          Close
        </base-button>
      </div>
    </form>
  </base-modal>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTaskStore } from '../../store/task';
import type { Task } from "../../store/interface";

const taskStore = useTaskStore();

onMounted(() => {
  if (taskStore.formType === "UPDATE") {
    const selectedIndex = taskStore.selectTask;
    if (!selectedIndex) {
      taskStore.closeModal();
      return;
    }
    const selectedITem = taskStore.getTask(selectedIndex);
    description.value.val = selectedITem?.description || "";
  }
});

const description = ref({
  val: "",
  isValid: true,
});
const formIsValid = ref(true);

const validateForm = () => {
  formIsValid.value = true;
  if (description.value.val.length === 0) {
    description.value.isValid = false;
    formIsValid.value = false;
  }
};

const closeModal = () => {
  description.value = { val: "", isValid: true };
  taskStore.resetSelect();
  taskStore.closeModal();
};

const submitForm = () => {
  // Validate input
  validateForm();
  if (!formIsValid.value) return;
  // submit input data
  const formData: Task = {
    id: taskStore.selectTask || new Date().toISOString(),
    description: description.value.val,
    done: false,
  };
  taskStore.resetSelect();

  if (taskStore.formType === "UPDATE") {
    taskStore.updateTask(formData);
  } else {
    taskStore.addTask(formData);
  }
  closeModal();
};

const clearValidity = () => {
  description.value.isValid = true;
};
</script>