<template>
  <div
    class="bg-secondary m-1 rounded p-3 min-w-[200px] hover:scale-110 transition"
  >
    <div class="font-bold text-lg p-5">{{ task.description }}</div>
    <div class="flex justify-center gap-2 text-white">
      <base-button
        @click="toggleDone"
        :class="`${task.done ? 'bg-primary' : 'bg-[#ff0000a9]'} grow`"
        ><font-awesome-icon :icon="`fa-solid ${taskDone}`"
      /></base-button>
      <base-button
        @click="UpdateTaskForm"
        class="bg-white border-2 border-black text-black"
        ><font-awesome-icon icon="fa-solid fa-pen"
      /></base-button>
      <base-button
        @click="removeTask"
        class="bg-white border-2 border-[#ff0000a9] text-[#ff0000a9]"
        ><font-awesome-icon icon="fa-solid fa-trash"
      /></base-button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["task"],
  computed: {
    taskDone() {
      return this.task.done ? "fa-check" : "fa-xmark";
    },
  },
  methods: {
    toggleDone() {
      this.$store.commit("TOGGLE_TASK", this.task);
    },
    removeTask() {
      this.$store.commit("SELECT_TASK", this.task.id);
      this.$store.commit("SHOW_CONFIRM_MODAL");
    },
    UpdateTaskForm() {
      this.$store.commit("FORM_TYPE", {
        type: "UPDATE",
        id: this.task.id,
      });
      this.$store.commit("SHOW_FORM_MODAL");
    },
  },
};
</script>
