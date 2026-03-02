<template>
  <div class="min-h-screen flex flex-col" style="background-color: var(--bg); color: var(--text);">
    <AppNav />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
