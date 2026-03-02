<template>
  <div class="inline-flex items-center gap-2 flex-shrink-0">
    <span class="text-lg">{{ icon }}</span>
    <span class="text-sm font-medium" style="color: var(--text-muted);">{{ label }}</span>
    <span class="text-slate-400 mx-2">·</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{ icon: string; label: string }>()
</script>
