<template>
  <div class="relative w-full h-screen text-white bg-black font-mono">
    <div class="flex flex-col justify-center items-center px-5">
      <home-title />
      <!--Task Form-->
      <button
        class="mt-5 px-5 py-2 rounded bg-primary text-2xl hover:opacity-70 transition"
        @click="AddTaskForm"
      >
        New Task
      </button>
      <base-modal />
      <!--Todo List-->
      <base-container
        class="bg-primary md:w-[80%] w-[95%] min-w-[300px] max-h-[60vh] xl:max-h-none grid grid-cols-1 xl:grid-cols-3 gap-6 overflow-auto"
        v-if="hasTask"
      >
        <task-item
          v-for="(task, i) in $store.state.todoList"
          :key="i"
          :task="task"
        />
      </base-container>
      <base-container class="bg-primary md:w-[80%] w-[95%]" v-else>
        <h3 class="text-center w-full">
          Press "New Task" to add new task to your list.
        </h3></base-container
      >
    </div>
  </div>
</template>

<script lang="ts">
import HomeTitle from "./components/HomeTitle.vue";
import TaskItem from "./components/Todo/TaskItem.vue";

export default {
  components: {
    HomeTitle,
    TaskItem,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    hasTask() {
      return !this.isLoading && this.$store.getters["HAS_TASK"];
    },
  },
  methods: {
    AddTaskForm() {
      this.$store.commit("FORM_TYPE", { type: "ADD" });
      this.$store.commit("SHOW_FORM_MODAL");
    },
  },
};
</script>
