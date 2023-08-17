<template>
  <!--Backdrop-->
  <div
    v-if="show"
    @click="closeModal"
    class="absolute top-0 left-0 h-screen w-full bg-black opacity-75 z-10"
  ></div>
  <!--Modal-->
  <base-container
    v-if="show"
    class="absolute top-20 left-50 z-20 bg-secondary w-[90%] md:w-[600px]"
  >
    <slot></slot>
  </base-container>
</template>

<script lang="ts">
export default {
  computed: {
    show() {
      return this.$store.getters["IS_MODAL_OPEN"];
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("CLOSE_MODAL");
    },
  },
};
</script>
