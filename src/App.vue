<script setup lang="ts">
import LeftNav from "./components/LeftNav.vue";
</script>

<template>
  <div class="flex h-full bg-kanban-bgLight font-sans text-kanban-black">
    <LeftNav />
    <main class="flex min-w-0 flex-1 flex-col">
      <header class="flex h-[97px] items-center justify-between border-b border-kanban-lineLight bg-white px-8">
        <h1 class="text-heading-xl text-kanban-black">Platform Launch</h1>
        <div class="flex items-center gap-6">
          <button
            type="button"
            class="h-12 rounded-ui-lg bg-kanban-purple px-6 text-heading-m text-white opacity-25 transition hover:bg-kanban-purpleHover"
          >
            + Add New Task
          </button>
          <button
            type="button"
            class="flex h-5 w-1.5 flex-col items-center justify-between"
            aria-label="Open board menu"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-kanban-greyMedium"></span>
            <span class="h-1.5 w-1.5 rounded-full bg-kanban-greyMedium"></span>
            <span class="h-1.5 w-1.5 rounded-full bg-kanban-greyMedium"></span>
          </button>
        </div>
      </header>

      <section class="flex flex-1 items-center justify-center px-6">
        <div class="flex max-w-[493px] flex-col items-center gap-8 text-center">
          <p class="text-heading-l text-kanban-greyMedium">
            This board is empty. Create a new column to get started.
          </p>
          <button
            type="button"
            class="h-12 rounded-ui-lg bg-kanban-purple px-8 text-heading-m text-white transition hover:bg-kanban-purpleHover"
          >
            + Add New Column
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
</style>
