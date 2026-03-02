<template>
  <div class="rounded-2xl p-7 border flex flex-col transition-all duration-200 hover:-translate-y-1"
    :class="plan.highlighted ? 'border-accent-600 shadow-lg shadow-accent-600/10' : ''"
    :style="plan.highlighted ? 'background-color: var(--card);' : 'background-color: var(--card); border-color: var(--card-border);'">
    <!-- Popular badge -->
    <div v-if="plan.highlighted" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-600 text-white text-xs font-semibold mb-4 self-start">
      <i class="mdi mdi-check-decagram text-sm"></i> Most Popular
    </div>
    <h3 class="text-lg font-bold mb-1" style="color: var(--text);">{{ plan.name }}</h3>
    <p class="text-xs mb-5" style="color: var(--text-muted);">{{ plan.description }}</p>
    <div class="mb-6">
      <span class="text-4xl font-black" style="color: var(--text);">{{ plan.price }}</span>
      <span class="text-sm" style="color: var(--text-muted);">{{ plan.period }}</span>
    </div>
    <ul class="space-y-2.5 mb-8 flex-1">
      <li v-for="feat in plan.features" :key="feat" class="flex items-start gap-2.5">
        <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
        <span class="text-sm" style="color: var(--text-muted);">{{ feat }}</span>
      </li>
    </ul>
    <a :href="plan.href" :target="plan.href.startsWith('http') ? '_blank' : undefined" rel="noopener"
      class="block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
      :class="plan.highlighted ? 'bg-accent-600 hover:bg-accent-700 text-white shadow-md hover:shadow-lg hover:shadow-accent-600/25' : 'border hover:border-accent-600 hover:text-accent-600'"
      :style="!plan.highlighted ? 'border-color: var(--border); color: var(--text-muted);' : ''">
      {{ plan.cta }}
    </a>
  </div>
</template>
<script setup lang="ts">
defineProps<{ plan: { name: string; price: string; period: string; description: string; features: string[]; cta: string; href: string; highlighted: boolean } }>()
</script>
