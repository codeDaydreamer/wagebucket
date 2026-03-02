<template>
  <div class="rounded-2xl p-6 border relative" style="background-color: var(--card); border-color: var(--card-border);">
    <div class="text-4xl font-black font-mono mb-3 text-accent-600/30">{{ step.number }}</div>
    <h3 class="text-sm font-bold mb-2" style="color: var(--text);">{{ step.title }}</h3>
    <p class="text-xs leading-relaxed" style="color: var(--text-muted);">{{ step.desc }}</p>
    <div v-if="index < 4"
      class="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent-600/30 z-10"></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ step: { number: string; title: string; desc: string }; index: number }>()
</script>
