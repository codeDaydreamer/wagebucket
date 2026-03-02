export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  app: {
    head: {
      title: 'WageBucket – Payroll Software for Kenyan Businesses',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'WageBucket is Kenya\'s smart payroll software. Automate PAYE, NSSF, NHIF, and housing levy deductions. Compliant, fast, and built for Kenyan SMEs.' },
        { name: 'keywords', content: 'payroll software Kenya, PAYE calculator Kenya, NSSF NHIF payroll, Kenya payroll system, salary management Kenya, payroll automation Kenya, KRA PAYE Kenya, employee payroll Kenya, payroll SaaS Kenya' },
        { property: 'og:title', content: 'WageBucket – Smart Payroll Software for Kenya' },
        { property: 'og:description', content: 'Automate your entire payroll process. PAYE, NSSF, NHIF, Housing Levy — all calculated correctly and compliantly.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://wagebucket.vercel.app' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'WageBucket – Payroll Software for Kenyan Businesses' },
        { name: 'twitter:description', content: 'Smart, compliant payroll for Kenyan SMEs. Automate PAYE, NSSF, NHIF in minutes.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: '816 Dynamics' },
        { name: 'theme-color', content: '#2563eb' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
})
