<template>
  <div class="inline-flex items-center gap-2.5 flex-shrink-0">
    <i :class="`mdi ${icon} text-base text-accent-500`"></i>
    <span class="text-sm font-medium" style="color: var(--text-muted);">{{ label }}</span>
    <span class="mx-3" style="color: var(--border);">|</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{ icon: string; label: string }>()
</script>
