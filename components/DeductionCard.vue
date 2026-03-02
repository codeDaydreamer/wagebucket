<template>
  <div class="rounded-2xl p-5 border" style="border-color: var(--card-border); background-color: var(--card);">
    <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
      :style="{ background: isDark ? deduction.darkBg : deduction.bg }">
      <span class="text-sm font-black font-mono" :style="{ color: deduction.color }">{{ deduction.label }}</span>
    </div>
    <p class="text-sm font-bold mb-0.5" style="color: var(--text);">{{ deduction.subtitle }}</p>
    <p class="text-xs" style="color: var(--text-muted);">{{ deduction.example }}</p>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
defineProps<{ deduction: { label: string; subtitle: string; color: string; bg: string; darkBg: string; example: string } }>()
</script>
