<template>
  <base-modal>
    <form @submit.prevent="submitForm" class="m-10">
      <h1 class="font-bold text-4xl text-center mb-10 select-none">
        {{ $store.state.formType === "ADD" ? "New Task" : "Update Task" }}
      </h1>
      <div
        :class="`my-[0.5rem] ${
          !description.isValid && 'border-1 border-[red]'
        }`"
      >
        <label for="description">Description</label>
        <input
          type="text"
          class="w-full p-2 mt-3 h-8 rounded"
          name="description"
          v-model.trim="description.val"
          @blur="clearValidity('description')"
        />
        <p v-if="!description.isValid" class="text-[red]">
          Task description must not be empty.
        </p>
      </div>
      <div class="mt-8 flex justify-center gap-10">
        <base-button type="submit" class="bg-black text-white">{{
          $store.state.formType === "ADD" ? "Create" : "Update"
        }}</base-button>
        <base-button type="button" class="bg-primary" @click="closeModal">
          Close
        </base-button>
      </div>
    </form>
  </base-modal>
</template>

<script lang="ts">
import type { Task } from "../../store/index";
export default {
  data() {
    return {
      description: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (this.description.val.length === 0) {
        this.description.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      // Validate input
      this.validateForm();
      if (!this.formIsValid) return;
      // submit input data
      const formData: Task = {
        id: this.$store.state.selectTask || new Date().toISOString(),
        description: this.description.val,
        done: false,
      };
      this.$store.commit("RESET_SELECT");

      if (this.$store.state.formType === "UPDATE") {
        this.$store.commit("UPDATE_TASK", formData);
      } else {
        this.$store.commit("ADD_TASK", formData);
      }
      this.closeModal();
    },
    clearValidity(input: string) {
      (this as any)[input].isValid = true;
    },
    closeModal() {
      this.description = { val: "", isValid: true };
      this.$store.commit("RESET_SELECT");
      this.$store.commit("CLOSE_MODAL");
    },
  },
  mounted() {
    if (this.$store.state.formType === "UPDATE") {
      this.description.val = this.$store.getters["GET_TASK"].description;
    }
  },
};
</script>
