<template>
  <div class="rounded-2xl p-6 border relative" style="background-color: var(--card); border-color: var(--card-border);">
    <div class="w-10 h-10 rounded-xl bg-accent-600/10 flex items-center justify-center mb-4">
      <i :class="`mdi ${step.icon} text-accent-600 text-lg`"></i>
    </div>
    <div class="text-xs font-mono font-bold mb-2 text-accent-600/50 tracking-wider">{{ step.number }}</div>
    <h3 class="text-sm font-bold mb-2" style="color: var(--text);">{{ step.title }}</h3>
    <p class="text-xs leading-relaxed" style="color: var(--text-muted);">{{ step.desc }}</p>
    <div v-if="index < 4"
      class="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-accent-600/20 z-10"></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ step: { number: string; title: string; desc: string; icon: string }; index: number }>()
</script>
