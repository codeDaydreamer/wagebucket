<template>
  <div class="rounded-2xl p-6 border text-center" style="background-color: var(--card); border-color: var(--card-border);">
    <div class="text-3xl font-black mb-1 gradient-text">{{ stat.value }}</div>
    <div class="text-xs font-medium" style="color: var(--text-muted);">{{ stat.label }}</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ stat: { value: string; label: string } }>()
</script>
