<template>
  <div class="rounded-2xl p-6 border" style="border-color: var(--card-border); background-color: var(--card);">
    <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
      :style="{ background: isDark ? deduction.darkBg : deduction.bg }">
      <i :class="`mdi ${deduction.icon} text-xl`" :style="{ color: deduction.color }"></i>
    </div>
    <p class="text-sm font-bold mb-0.5" style="color: var(--text);">{{ deduction.subtitle }}</p>
    <p class="text-xs font-semibold mb-1" :style="{ color: deduction.color }">{{ deduction.label }}</p>
    <p class="text-xs" style="color: var(--text-muted);">{{ deduction.example }}</p>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
defineProps<{ deduction: { label: string; subtitle: string; icon: string; color: string; bg: string; darkBg: string; example: string } }>()
</script>
