<template>
  <base-modal>
    <h2 class="text-center text-lg font-bold">Confirm</h2>
    <h2 class="my-10 text-center">
      Do you want to remove Task "{{ currentTask.description }}" ?
    </h2>
    <div class="flex justify-center gap-2 text-white">
      <base-button @click="removeTask" class="bg-primary text-white grow"
        ><font-awesome-icon icon="fa-solid fa-check"
      /></base-button>
      <base-button @click="closeModal" class="bg-[#ff0000a9] text-white grow">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </base-button>
    </div>
  </base-modal>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentTask: {
        id: "",
        description: "null",
        done: false,
      },
    };
  },
  methods: {
    removeTask() {
      this.$store.commit("DELETE_TASK", this.currentTask);
      this.$store.commit("RESET_SELECT");
      this.$store.commit("CLOSE_MODAL");
    },
    closeModal() {
      this.currentTask = {
        id: "",
        description: "null",
        done: false,
      };
      this.$store.commit("RESET_SELECT");
      this.$store.commit("CLOSE_MODAL");
    },
  },
  mounted() {
    this.currentTask = this.$store.getters["GET_TASK"];
  },
};
</script>
