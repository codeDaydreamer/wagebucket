<template>
  <div class="group rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    :class="feature.accent ? 'border-accent-600/30 bg-accent-600/5' : ''"
    :style="!feature.accent ? 'border-color: var(--card-border); background-color: var(--card);' : ''">
    <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
      :class="feature.accent ? 'bg-accent-600 text-white' : 'bg-accent-600/10 text-accent-600'">
      <i :class="`mdi ${feature.icon} text-xl`"></i>
    </div>
    <h3 class="text-base font-bold mb-2" style="color: var(--text);">{{ feature.title }}</h3>
    <p class="text-sm leading-relaxed" style="color: var(--text-muted);">{{ feature.description }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ feature: { icon: string; title: string; description: string; accent?: boolean } }>()
</script>
