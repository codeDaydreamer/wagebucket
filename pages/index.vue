<template>
  <div>
    <!-- ── HERO ── -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <!-- Grid background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style="background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 60px 60px;"></div>
        <!-- Blue glow -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-20"
          style="background: radial-gradient(circle, #2563eb 0%, transparent 70%); filter: blur(80px);"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <!-- Badge -->
        <div data-aos="fade-down" data-aos-duration="600"
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-8 border"
          style="border-color: #2563eb33; background: #2563eb11; color: #2563eb;">
          <span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
          Built for Kenyan Businesses · KRA Compliant
        </div>

        <h1 data-aos="fade-up" data-aos-delay="100"
          class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          <span style="color: var(--text);">Payroll That</span><br/>
          <span class="gradient-text">Actually Works</span><br/>
          <span style="color: var(--text);">In Kenya.</span>
        </h1>

        <p data-aos="fade-up" data-aos-delay="200"
          class="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style="color: var(--text-muted);">
          Automate PAYE, NSSF, NHIF, and Housing Levy calculations. Generate compliant payslips in seconds.
          Built by <a href="https://www.816-dynamics.com/" target="_blank" class="text-accent-500 hover:underline font-medium">816 Dynamics</a>
          specifically for the Kenyan market.
        </p>

        <div data-aos="fade-up" data-aos-delay="300" class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wagebucket.vercel.app/login"
            class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-lg hover:shadow-accent-600/30 hover:shadow-xl hover:-translate-y-0.5">
            Start Free Today
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
          <a href="#features"
            class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold border transition-all duration-200 hover:-translate-y-0.5"
            style="border-color: var(--border); color: var(--text);">
            See Features
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
        </div>

        <!-- Hero visual: mock payslip terminal -->
        <div data-aos="zoom-in" data-aos-delay="400" class="mt-16 max-w-2xl mx-auto">
          <div class="rounded-2xl overflow-hidden border shadow-2xl" style="border-color: var(--border); background-color: var(--card);">
            <!-- Window bar -->
            <div class="flex items-center gap-2 px-4 py-3 border-b" style="background-color: var(--bg2); border-color: var(--border);">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
                <div class="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
              </div>
              <span class="flex-1 text-center text-xs font-mono" style="color: var(--text-muted);">wagebucket — payslip generator</span>
            </div>
            <!-- Content -->
            <div class="p-6 font-mono text-sm text-left">
              <div class="mb-4">
                <span class="text-accent-500">→</span>
                <span class="ml-2" style="color: var(--text);">Processing payroll for <span class="text-accent-400 font-semibold">January 2026</span></span>
              </div>
              <div class="space-y-1.5" style="color: var(--text-muted);">
                <div class="flex justify-between"><span>Gross Pay</span><span class="text-green-400 font-semibold">KES 85,000</span></div>
                <div class="flex justify-between"><span>PAYE (KRA)</span><span class="text-red-400">- KES 18,450</span></div>
                <div class="flex justify-between"><span>NSSF (Tier I + II)</span><span class="text-red-400">- KES 2,160</span></div>
                <div class="flex justify-between"><span>SHIF (NHIF)</span><span class="text-red-400">- KES 2,550</span></div>
                <div class="flex justify-between"><span>Housing Levy</span><span class="text-red-400">- KES 1,275</span></div>
                <div class="mt-3 pt-3 border-t flex justify-between font-bold text-base" style="border-color: var(--border);">
                  <span style="color: var(--text);">Net Pay</span>
                  <span class="text-accent-400">KES 60,565</span>
                </div>
              </div>
              <div class="mt-4 flex items-center gap-2 text-xs text-green-400">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Payslip generated · KRA compliant · Ready to send
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── COMPLIANCE BANNER ── -->
    <section class="py-6 overflow-hidden border-y" style="background-color: var(--bg2); border-color: var(--border);" id="compliance">
      <div class="flex gap-12 animate-scroll-x whitespace-nowrap">
        <div v-for="i in 3" :key="i" class="flex items-center gap-12 flex-shrink-0">
          <CompliancePill v-for="item in complianceItems" :key="item.label + i" :icon="item.icon" :label="item.label" />
        </div>
      </div>
    </section>

    <!-- ── FEATURES ── -->
    <section id="features" class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p data-aos="fade-up" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3">Features</p>
          <h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight mb-4" style="color: var(--text);">
            Everything you need to<br/><span class="gradient-text">run payroll in Kenya</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" class="text-lg max-w-xl mx-auto" style="color: var(--text-muted);">
            From employee onboarding to compliant payslips — WageBucket handles every step of the Kenyan payroll process.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            v-for="(feature, i) in features"
            :key="feature.title"
            :feature="feature"
            :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="String((i % 3) * 100)"
          />
        </div>
      </div>
    </section>

    <!-- ── HOW IT WORKS ── -->
    <section id="how-it-works" class="py-24 px-4 sm:px-6 lg:px-8" style="background-color: var(--bg2);">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p data-aos="fade-up" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3">How It Works</p>
          <h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight" style="color: var(--text);">
            Payroll in <span class="gradient-text">5 simple steps</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <StepCard v-for="(step, i) in steps" :key="step.title" :step="step" :index="i" data-aos="fade-up" :data-aos-delay="String(i * 80)" />
        </div>
      </div>
    </section>

    <!-- ── STATUTORY DEDUCTIONS ── -->
    <section class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p data-aos="fade-right" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3">KRA Compliance</p>
            <h2 data-aos="fade-right" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight mb-6" style="color: var(--text);">
              Every Kenyan deduction,<br/><span class="gradient-text">calculated correctly.</span>
            </h2>
            <p data-aos="fade-right" data-aos-delay="200" class="text-base leading-relaxed mb-8" style="color: var(--text-muted);">
              WageBucket automatically applies the latest KRA tax bands, NSSF tiers, SHIF/NHIF rates, and the Affordable Housing Levy — so you never have to worry about compliance again.
            </p>
            <ul data-aos="fade-right" data-aos-delay="300" class="space-y-4">
              <li v-for="item in complianceDetails" :key="item" class="flex items-start gap-3">
                <div class="mt-0.5 w-5 h-5 rounded-full bg-accent-600/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-accent-500" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="text-sm" style="color: var(--text-muted);">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Deductions card grid -->
          <div data-aos="fade-left" data-aos-delay="100" class="grid grid-cols-2 gap-4">
            <DeductionCard v-for="d in deductions" :key="d.label" :deduction="d" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── STATS ── -->
    <section class="py-16 px-4 sm:px-6 lg:px-8" style="background-color: var(--bg2);">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard v-for="(stat, i) in stats" :key="stat.label" :stat="stat" data-aos="zoom-in" :data-aos-delay="String(i * 100)" />
        </div>
      </div>
    </section>

    <!-- ── PRICING ── -->
    <section id="pricing" class="py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p data-aos="fade-up" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3">Pricing</p>
          <h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight mb-4" style="color: var(--text);">
            Simple, transparent<br/><span class="gradient-text">pricing</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" class="text-lg" style="color: var(--text-muted);">Start free. Scale as you grow.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingCard v-for="(plan, i) in plans" :key="plan.name" :plan="plan" data-aos="fade-up" :data-aos-delay="String(i * 100)" />
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="max-w-4xl mx-auto text-center relative">
        <div class="absolute inset-0 -z-10 pointer-events-none">
          <div class="absolute inset-0 rounded-3xl opacity-10 dark:opacity-20" style="background: radial-gradient(ellipse at center, #2563eb 0%, transparent 70%);"></div>
        </div>
        <div class="rounded-3xl border p-12 sm:p-16" style="background-color: var(--card); border-color: var(--card-border);">
          <p data-aos="fade-up" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">Get Started Today</p>
          <h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight mb-6" style="color: var(--text);">
            Run your first payroll<br/><span class="gradient-text">in under 10 minutes.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" class="text-lg mb-10" style="color: var(--text-muted);">
            Join Kenyan businesses already using WageBucket to automate their payroll, stay compliant with KRA, and pay their teams on time — every time.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wagebucket.vercel.app/login"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-lg hover:shadow-accent-600/30 hover:shadow-xl hover:-translate-y-0.5">
              Create Free Account
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>
            <a href="https://www.816-dynamics.com/" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border transition-all duration-200 hover:-translate-y-0.5"
              style="border-color: var(--border); color: var(--text-muted);">
              Learn about 816 Dynamics
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'WageBucket – Smart Payroll Software for Kenyan Businesses',
  description: 'Automate PAYE, NSSF, NHIF, and Housing Levy payroll in Kenya. KRA-compliant payslips in seconds. Built by 816 Dynamics for Kenyan SMEs.',
  ogTitle: 'WageBucket – Kenya Payroll Software',
  ogDescription: 'Run compliant Kenyan payroll in minutes. PAYE, NSSF, NHIF, Housing Levy automation built for Kenyan businesses.',
  twitterCard: 'summary_large_image',
})

const complianceItems = [
  { icon: '🇰🇪', label: 'KRA PAYE Compliant' },
  { icon: '✅', label: 'NSSF Tier I & II' },
  { icon: '🏥', label: 'SHIF / NHIF' },
  { icon: '🏠', label: 'Housing Levy (AHL)' },
  { icon: '📋', label: 'P9 Forms' },
  { icon: '💼', label: 'Multi-Company' },
  { icon: '🔒', label: 'Data Secure' },
  { icon: '⚡', label: 'Instant Payslips' },
]

const features = [
  {
    icon: '🧮',
    title: 'PAYE Auto-Calculation',
    description: 'Progressive tax bands applied automatically using the latest KRA PAYE rates. Personal relief deducted correctly every month.',
    accent: true,
  },
  {
    icon: '🏛️',
    title: 'NSSF Tier Compliance',
    description: 'New NSSF Act 2013 tiers handled automatically — Tier I (lower earnings limit) and Tier II (upper earnings limit) split correctly.',
  },
  {
    icon: '🏥',
    title: 'SHIF / NHIF Deductions',
    description: 'Social Health Insurance Fund deductions calculated per the current income-based rates. Always up to date.',
  },
  {
    icon: '🏠',
    title: 'Affordable Housing Levy',
    description: '1.5% Housing Levy deducted and matched by employer. Automatically included in every payslip as required by law.',
  },
  {
    icon: '📄',
    title: 'Instant Payslips',
    description: 'Generate professional, branded payslips in PDF format. Email directly to employees with one click.',
  },
  {
    icon: '👥',
    title: 'Employee Management',
    description: 'Manage your full workforce — departments, positions, contract types, and statutory IDs — all in one place.',
  },
  {
    icon: '📊',
    title: 'Payroll Reports',
    description: 'P9 annual returns, monthly statutory summaries, and custom reports ready for your accountant or the KRA.',
  },
  {
    icon: '⚙️',
    title: 'Custom Allowances',
    description: 'Add housing, transport, medical, and other allowances. Configure which are taxable and which are exempt.',
  },
  {
    icon: '🔐',
    title: 'Role-Based Access',
    description: 'HR managers, accountants, and admins each see only what they need. Audit logs track every change.',
  },
]

const steps = [
  { number: '01', title: 'Add Employees', desc: 'Import or create employee profiles with salary and statutory details.' },
  { number: '02', title: 'Set Up Schemes', desc: 'Configure PAYE, NSSF, NHIF, and custom deduction rules once.' },
  { number: '03', title: 'Enter Pay Inputs', desc: 'Add allowances, overtime, or leave adjustments for the period.' },
  { number: '04', title: 'Run Calculation', desc: 'One click runs the full payroll engine for all employees.' },
  { number: '05', title: 'Approve & Pay', desc: 'Review payslips, approve, and mark as paid. Done.' },
]

const complianceDetails = [
  'PAYE calculated using current 2024/2025 KRA tax bands and personal relief (KES 2,400/month)',
  'NSSF contributions split into Tier I (6% of lower earnings limit) and Tier II (6% of balance)',
  'SHIF/NHIF deducted based on the income-based sliding scale (effective October 2024)',
  'Affordable Housing Levy — 1.5% employee deduction + 1.5% employer contribution',
  'Tax-exempt allowances (e.g. meals up to KES 4,000, mileage at KRA rates) handled correctly',
  'P9 annual tax deduction cards generated automatically for every employee',
]

const deductions = [
  { label: 'PAYE', subtitle: 'Income Tax', color: '#2563eb', bg: '#eff6ff', darkBg: '#1e3a8a20', example: '30% top rate' },
  { label: 'NSSF', subtitle: 'Pension Fund', color: '#16a34a', bg: '#f0fdf4', darkBg: '#14532d20', example: 'Tier I & II' },
  { label: 'SHIF', subtitle: 'Health Insurance', color: '#d97706', bg: '#fffbeb', darkBg: '#78350f20', example: '2.75% gross' },
  { label: 'AHL', subtitle: 'Housing Levy', color: '#7c3aed', bg: '#f5f3ff', darkBg: '#4c1d9520', example: '1.5% gross' },
]

const stats = [
  { value: '100%', label: 'KRA Compliant' },
  { value: '< 10s', label: 'Payroll Run Time' },
  { value: '4+', label: 'Statutory Schemes' },
  { value: '816', label: 'Dynamics Built' },
]

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Perfect for trying out WageBucket with a small team.',
    features: ['Up to 5 employees', 'PAYE, NSSF, NHIF, AHL', 'Payslip generation', 'Email support'],
    cta: 'Get Started Free',
    href: 'https://wagebucket.vercel.app/login',
    highlighted: false,
  },
  {
    name: 'Business',
    price: 'KES 2,500',
    period: '/month',
    description: 'For growing businesses with larger payroll needs.',
    features: ['Unlimited employees', 'All statutory deductions', 'Custom allowances', 'P9 annual returns', 'Priority support', 'Multi-department'],
    cta: 'Start Business Plan',
    href: 'https://wagebucket.vercel.app/login',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organisations with complex payroll requirements.',
    features: ['Everything in Business', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'On-premise option', 'API access'],
    cta: 'Contact 816 Dynamics',
    href: 'https://www.816-dynamics.com/',
    highlighted: false,
  },
]
</script>
