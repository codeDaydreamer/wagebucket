<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 shadow-sm' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center">
            <span class="text-white font-black text-sm font-mono">W</span>
          </div>
          <span class="font-bold text-lg tracking-tight" style="color: var(--text);">WageBucket</span>
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-7">
          <a v-for="link in links" :key="link.label" :href="link.href"
            class="text-sm font-medium transition-colors duration-200"
            style="color: var(--text-muted);"
            @mouseenter="e => (e.target as HTMLElement).style.color = '#2563eb'"
            @mouseleave="e => (e.target as HTMLElement).style.color = 'var(--text-muted)'">
            {{ link.label }}
          </a>
        </div>

        <!-- Right actions -->
        <div class="flex items-center gap-3">
          <!-- Theme toggle -->
          <button @click="toggleTheme"
            class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style="color: var(--text-muted); background-color: var(--bg2);"
            aria-label="Toggle theme">
            <svg v-if="isDark" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M12 5a7 7 0 100 14A7 7 0 0012 5z"/>
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          </button>

          <a href="https://wagebucket.vercel.app/login"
            class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-sm hover:shadow-accent-600/25 hover:shadow-lg">
            Get Started
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>

          <!-- Mobile menu button -->
          <button @click="mobileOpen = !mobileOpen"
            class="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style="color: var(--text); background-color: var(--bg2);">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden border-t" style="background-color: var(--bg); border-color: var(--border);">
        <div class="px-4 py-4 flex flex-col gap-4">
          <a v-for="link in links" :key="link.label" :href="link.href"
            class="text-sm font-medium" style="color: var(--text-muted);"
            @click="mobileOpen = false">
            {{ link.label }}
          </a>
          <a href="https://wagebucket.vercel.app/login"
            class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white transition-colors">
            Get Started Free
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const scrolled = ref(false)
const mobileOpen = ref(false)
const isDark = computed(() => colorMode.value === 'dark')

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Pricing', href: '#pricing' },
]

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.mobile-menu-enter-active, .mobile-menu-leave-active { transition: all 0.2s ease; }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
