<template>
  <!--Backdrop-->
  <div
    v-if="show"
    @click="closeModal"
    class="fixed top-0 left-0 h-screen w-full bg-black opacity-75 z-10"
  ></div>
  <!--Modal-->
  <base-container
    v-if="show"
    class="fixed top-50 left-50 z-20 bg-secondary w-[90%] md:w-[600px]"
  >
    <task-form v-if="$store.state.formModal" />
    <task-confirm v-if="$store.state.confirmModal" />
  </base-container>
</template>

<script lang="ts">
import TaskForm from "../Todo/TaskForm.vue";
import TaskConfirm from "../Todo/TaskConfirm.vue";

export default {
  components: {
    TaskForm,
    TaskConfirm,
  },
  computed: {
    show() {
      return this.$store.state.formModal || this.$store.state.confirmModal;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("CLOSE_MODAL");
    },
  },
};
</script>
