<template>
  <Teleport to="body">
    <!--Backdrop-->
    <div v-if="taskStore.isModalOpen" @click="taskStore.closeModal()"
      class="absolute top-0 left-0 h-screen w-full bg-black opacity-75 z-10">
    </div>
    <!--Modal-->
    <base-container v-if="taskStore.isModalOpen"
      class="fixed top-[15%] left-[5%] z-20 bg-secondary w-[90%] md:w-[800px] lg:left-[30%]">
      <slot></slot>
    </base-container>
  </Teleport>
</template>

<script setup lang="ts">
import { useTaskStore } from '../../store/task';

const taskStore = useTaskStore();
</script>
