<template>
  <footer style="background-color: var(--bg2); border-top: 1px solid var(--border);" class="mt-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center">
              <span class="text-white font-black text-sm font-mono">W</span>
            </div>
            <span class="font-bold text-lg" style="color: var(--text);">WageBucket</span>
          </div>
          <p class="text-sm leading-relaxed mb-5 max-w-xs" style="color: var(--text-muted);">
            Kenya's smart payroll platform. Automate PAYE, NSSF, NHIF and Housing Levy. Built for Kenyan businesses.
          </p>
          <!-- 816 Dynamics credit -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border" style="border-color: var(--border); color: var(--text-muted);">
            <span>A product of</span>
            <a href="https://www.816-dynamics.com/" target="_blank" rel="noopener"
              class="font-semibold text-accent-500 hover:text-accent-400 transition-colors">
              816 Dynamics
            </a>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h4 class="text-sm font-semibold mb-4" style="color: var(--text);">Product</h4>
          <ul class="space-y-2.5">
            <li v-for="item in productLinks" :key="item.label">
              <a :href="item.href" class="text-sm transition-colors hover:text-accent-500" style="color: var(--text-muted);">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-sm font-semibold mb-4" style="color: var(--text);">Company</h4>
          <ul class="space-y-2.5">
            <li>
              <a href="https://www.816-dynamics.com/" target="_blank" rel="noopener"
                class="text-sm transition-colors hover:text-accent-500" style="color: var(--text-muted);">
                About 816 Dynamics
              </a>
            </li>
            <li>
              <a href="https://www.816-dynamics.com/" target="_blank" rel="noopener"
                class="text-sm transition-colors hover:text-accent-500" style="color: var(--text-muted);">
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://wagebucket.vercel.app/login" target="_blank" rel="noopener"
                class="text-sm transition-colors hover:text-accent-500" style="color: var(--text-muted);">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        style="border-top: 1px solid var(--border);">
        <p class="text-xs" style="color: var(--text-muted);">
          © {{ new Date().getFullYear() }} WageBucket. A product of
          <a href="https://www.816-dynamics.com/" target="_blank" rel="noopener"
            class="text-accent-500 hover:text-accent-400 transition-colors">816 Dynamics</a>.
          All rights reserved.
        </p>
        <p class="text-xs" style="color: var(--text-muted);">
          Built for Kenyan businesses. Compliant with KRA regulations.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Sign Up', href: 'https://wagebucket.vercel.app/login' },
]
</script>
