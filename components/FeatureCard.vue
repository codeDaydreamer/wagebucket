<template>
  <div class="group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    :class="feature.accent ? 'border-accent-600/30 bg-accent-600/5' : ''"
    :style="!feature.accent ? 'border-color: var(--card-border); background-color: var(--card);' : ''">
    <div class="text-3xl mb-4">{{ feature.icon }}</div>
    <h3 class="text-base font-bold mb-2" style="color: var(--text);">{{ feature.title }}</h3>
    <p class="text-sm leading-relaxed" style="color: var(--text-muted);">{{ feature.description }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ feature: { icon: string; title: string; description: string; accent?: boolean } }>()
</script>
