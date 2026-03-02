<template>
  <div>

    <!-- HERO -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <!-- Grid background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
          style="background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 56px 56px;"></div>
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.08] dark:opacity-[0.15]"
          style="background: radial-gradient(ellipse, #2563eb 0%, transparent 70%); filter: blur(90px);"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <!-- Left: copy -->
          <div>
            <div data-aos="fade-right" data-aos-duration="600"
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-8 border"
              style="border-color: #2563eb33; background: #2563eb0d; color: #2563eb;">
              <span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
              Built for Kenya. KRA Compliant.
            </div>

            <h1 data-aos="fade-right" data-aos-delay="80"
              class="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              <span style="color: var(--text);">Payroll that</span><br/>
              <span class="gradient-text">actually works</span><br/>
              <span style="color: var(--text);">in Kenya.</span>
            </h1>

            <p data-aos="fade-right" data-aos-delay="160"
              class="text-lg leading-relaxed mb-10 max-w-lg" style="color: var(--text-muted);">
              Automate PAYE, NSSF, NHIF and Housing Levy calculations. Generate compliant payslips in seconds.
              Built by <a href="https://www.816-dynamics.com/" target="_blank" class="text-accent-500 hover:underline font-semibold">816 Dynamics</a>
              for the Kenyan market.
            </p>

            <div data-aos="fade-right" data-aos-delay="240" class="flex flex-col sm:flex-row items-start gap-4">
              <a href="https://wagebucket.vercel.app/login"
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-accent-600/25 hover:-translate-y-0.5">
                Get Started Free
                <i class="mdi mdi-arrow-right text-base"></i>
              </a>
              <a href="#features"
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5"
                style="border-color: var(--border); color: var(--text);">
                See Features
                <i class="mdi mdi-chevron-down text-base"></i>
              </a>
            </div>

            <!-- Trust row -->
            <div data-aos="fade-right" data-aos-delay="320" class="flex items-center gap-5 mt-10 pt-10 border-t" style="border-color: var(--border);">
              <div class="flex items-center gap-2 text-xs" style="color: var(--text-muted);">
                <i class="mdi mdi-shield-check-outline text-accent-500 text-base"></i>
                KRA Compliant
              </div>
              <div class="flex items-center gap-2 text-xs" style="color: var(--text-muted);">
                <i class="mdi mdi-lock-outline text-accent-500 text-base"></i>
                Data Secure
              </div>
              <div class="flex items-center gap-2 text-xs" style="color: var(--text-muted);">
                <i class="mdi mdi-flash text-accent-500 text-base"></i>
                Run in Seconds
              </div>
            </div>
          </div>

          <!-- Right: payslip card visual -->
          <div data-aos="fade-left" data-aos-delay="200">
            <div class="rounded-2xl overflow-hidden border shadow-2xl" style="border-color: var(--card-border); background-color: var(--card);">
              <!-- Card header -->
              <div class="px-6 py-5 border-b flex items-center justify-between" style="background-color: var(--bg2); border-color: var(--border);">
                <div>
                  <p class="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-0.5">WageBucket</p>
                  <p class="text-sm font-bold" style="color: var(--text);">January 2026 Payslip</p>
                </div>
                <div class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500">
                  <i class="mdi mdi-check-circle-outline text-sm"></i>
                  Approved
                </div>
              </div>

              <!-- Employee row -->
              <div class="px-6 py-4 border-b flex items-center gap-3" style="border-color: var(--border);">
                <div class="w-9 h-9 rounded-full bg-accent-600/10 flex items-center justify-center flex-shrink-0">
                  <i class="mdi mdi-account text-accent-600 text-lg"></i>
                </div>
                <div>
                  <p class="text-sm font-semibold" style="color: var(--text);">Jane Mwangi</p>
                  <p class="text-xs" style="color: var(--text-muted);">Senior Developer · EMP-004</p>
                </div>
              </div>

              <!-- Breakdown -->
              <div class="px-6 py-5 space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm" style="color: var(--text-muted);">Gross Pay</span>
                  <span class="text-sm font-semibold text-green-500">KES 85,000</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-accent-500"></div>
                    <span class="text-sm" style="color: var(--text-muted);">PAYE (KRA)</span>
                  </div>
                  <span class="text-sm font-medium" style="color: var(--text);">- KES 18,450</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                    <span class="text-sm" style="color: var(--text-muted);">NSSF</span>
                  </div>
                  <span class="text-sm font-medium" style="color: var(--text);">- KES 2,160</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    <span class="text-sm" style="color: var(--text-muted);">SHIF</span>
                  </div>
                  <span class="text-sm font-medium" style="color: var(--text);">- KES 2,550</span>
                </div>
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span class="text-sm" style="color: var(--text-muted);">Housing Levy</span>
                  </div>
                  <span class="text-sm font-medium" style="color: var(--text);">- KES 1,275</span>
                </div>

                <div class="pt-4 mt-2 border-t flex justify-between items-center" style="border-color: var(--border);">
                  <span class="text-sm font-bold" style="color: var(--text);">Net Pay</span>
                  <span class="text-xl font-extrabold text-accent-600">KES 60,565</span>
                </div>
              </div>

              <!-- Footer -->
              <div class="px-6 py-4 border-t flex items-center justify-between" style="border-color: var(--border); background-color: var(--bg2);">
                <span class="text-xs" style="color: var(--text-muted);">Generated by WageBucket</span>
                <div class="flex items-center gap-1.5 text-xs text-accent-500 font-medium">
                  <i class="mdi mdi-download-outline text-sm"></i>
                  Download PDF
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- COMPLIANCE TICKER -->
    <section class="py-5 overflow-hidden border-y" style="background-color: var(--bg2); border-color: var(--border);" id="compliance">
      <div class="flex animate-scroll-x whitespace-nowrap">
        <div v-for="i in 4" :key="i" class="flex items-center flex-shrink-0">
          <CompliancePill v-for="item in complianceItems" :key="item.label + i" :icon="item.icon" :label="item.label" />
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="features" class="py-28 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <p data-aos="fade-up" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3">Features</p>
          <h2 data-aos="fade-up" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5" style="color: var(--text);">
            Everything you need to<br/><span class="gradient-text">run payroll in Kenya</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160" class="text-base max-w-xl mx-auto leading-relaxed" style="color: var(--text-muted);">
            From employee onboarding to compliant payslips, WageBucket handles every step of the Kenyan payroll process.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            v-for="(feature, i) in features"
            :key="feature.title"
            :feature="feature"
            data-aos="fade-up"
            :data-aos-delay="String((i % 3) * 80)"
          />
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how-it-works" class="py-28 px-4 sm:px-6 lg:px-8" style="background-color: var(--bg2);">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <p data-aos="fade-up" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3">How It Works</p>
          <h2 data-aos="fade-up" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight" style="color: var(--text);">
            Payroll in <span class="gradient-text">five simple steps</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <StepCard
            v-for="(step, i) in steps"
            :key="step.title"
            :step="step"
            :index="i"
            data-aos="fade-up"
            :data-aos-delay="String(i * 80)"
          />
        </div>
      </div>
    </section>

    <!-- STATUTORY DEDUCTIONS -->
    <section class="py-28 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p data-aos="fade-right" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3">KRA Compliance</p>
            <h2 data-aos="fade-right" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6" style="color: var(--text);">
              Every Kenyan deduction<br/><span class="gradient-text">calculated correctly.</span>
            </h2>
            <p data-aos="fade-right" data-aos-delay="160" class="text-base leading-relaxed mb-10" style="color: var(--text-muted);">
              WageBucket automatically applies the latest KRA tax bands, NSSF tiers, SHIF rates and the Affordable Housing Levy
              so you never have to worry about compliance again.
            </p>
            <ul data-aos="fade-right" data-aos-delay="240" class="space-y-4">
              <li v-for="item in complianceDetails" :key="item" class="flex items-start gap-3">
                <div class="mt-0.5 w-5 h-5 rounded-full bg-accent-600/10 flex items-center justify-center flex-shrink-0">
                  <i class="mdi mdi-check text-accent-600 text-xs"></i>
                </div>
                <span class="text-sm leading-relaxed" style="color: var(--text-muted);">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div data-aos="fade-left" data-aos-delay="120" class="grid grid-cols-2 gap-4">
            <DeductionCard v-for="d in deductions" :key="d.label" :deduction="d" />
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="py-20 px-4 sm:px-6 lg:px-8" style="background-color: var(--bg2);">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
          <StatCard
            v-for="(stat, i) in stats"
            :key="stat.label"
            :stat="stat"
            data-aos="zoom-in"
            :data-aos-delay="String(i * 80)"
          />
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="py-28 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <p data-aos="fade-up" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3">Pricing</p>
          <h2 data-aos="fade-up" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5" style="color: var(--text);">
            Simple, transparent<br/><span class="gradient-text">pricing</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160" class="text-base" style="color: var(--text-muted);">Start free. Scale as you grow.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <PricingCard
            v-for="(plan, i) in plans"
            :key="plan.name"
            :plan="plan"
            data-aos="fade-up"
            :data-aos-delay="String(i * 80)"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-28 px-4 sm:px-6 lg:px-8" style="background-color: var(--bg2);">
      <div class="max-w-3xl mx-auto text-center">
        <div class="rounded-3xl border p-12 sm:p-16" style="background-color: var(--card); border-color: var(--card-border);">
          <div data-aos="fade-up" class="w-14 h-14 rounded-2xl bg-accent-600/10 flex items-center justify-center mx-auto mb-6">
            <i class="mdi mdi-rocket-launch-outline text-accent-600 text-2xl"></i>
          </div>
          <p data-aos="fade-up" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-4">Get Started Today</p>
          <h2 data-aos="fade-up" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6" style="color: var(--text);">
            Run your first payroll<br/><span class="gradient-text">in under 10 minutes.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160" class="text-base mb-10 leading-relaxed" style="color: var(--text-muted);">
            Join Kenyan businesses already using WageBucket to automate payroll, stay compliant with KRA and pay their teams on time, every time.
          </p>
          <div data-aos="fade-up" data-aos-delay="240" class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wagebucket.vercel.app/login"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-accent-600/25 hover:-translate-y-0.5">
              Create Free Account
              <i class="mdi mdi-arrow-right text-base"></i>
            </a>
            <a href="https://www.816-dynamics.com/" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5"
              style="border-color: var(--border); color: var(--text-muted);">
              <i class="mdi mdi-open-in-new text-sm"></i>
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
  title: 'WageBucket - Smart Payroll Software for Kenyan Businesses',
  description: 'Automate PAYE, NSSF, NHIF and Housing Levy payroll in Kenya. KRA-compliant payslips in seconds. Built by 816 Dynamics for Kenyan SMEs.',
  ogTitle: 'WageBucket - Kenya Payroll Software',
  ogDescription: 'Run compliant Kenyan payroll in minutes. PAYE, NSSF, NHIF, Housing Levy automation built for Kenyan businesses.',
  twitterCard: 'summary_large_image',
})

const complianceItems = [
  { icon: 'mdi-calculator-variant-outline', label: 'KRA PAYE Compliant' },
  { icon: 'mdi-shield-account-outline', label: 'NSSF Tier I and II' },
  { icon: 'mdi-hospital-box-outline', label: 'SHIF / NHIF' },
  { icon: 'mdi-home-city-outline', label: 'Housing Levy (AHL)' },
  { icon: 'mdi-file-document-outline', label: 'P9 Forms' },
  { icon: 'mdi-office-building-outline', label: 'Multi-Company' },
  { icon: 'mdi-lock-outline', label: 'Data Secure' },
  { icon: 'mdi-lightning-bolt-outline', label: 'Instant Payslips' },
]

const features = [
  {
    icon: 'mdi-calculator-variant-outline',
    title: 'PAYE Auto-Calculation',
    description: 'Progressive tax bands applied automatically using the latest KRA PAYE rates. Personal relief deducted correctly every month.',
    accent: true,
  },
  {
    icon: 'mdi-shield-account-outline',
    title: 'NSSF Tier Compliance',
    description: 'New NSSF Act 2013 tiers handled automatically. Tier I and Tier II split calculated correctly for every employee.',
  },
  {
    icon: 'mdi-hospital-box-outline',
    title: 'SHIF / NHIF Deductions',
    description: 'Social Health Insurance Fund deductions calculated per the current income-based rates, always up to date.',
  },
  {
    icon: 'mdi-home-city-outline',
    title: 'Affordable Housing Levy',
    description: '1.5% Housing Levy deducted and matched by employer. Automatically included in every payslip as required by law.',
  },
  {
    icon: 'mdi-file-document-outline',
    title: 'Instant Payslips',
    description: 'Generate professional, branded payslips in PDF format. Email directly to employees with one click.',
  },
  {
    icon: 'mdi-account-group-outline',
    title: 'Employee Management',
    description: 'Manage your full workforce including departments, positions, contract types and statutory IDs all in one place.',
  },
  {
    icon: 'mdi-chart-bar',
    title: 'Payroll Reports',
    description: 'P9 annual returns, monthly statutory summaries and custom reports ready for your accountant or the KRA.',
  },
  {
    icon: 'mdi-tune-variant',
    title: 'Custom Allowances',
    description: 'Add housing, transport, medical and other allowances. Configure which are taxable and which are exempt.',
  },
  {
    icon: 'mdi-lock-outline',
    title: 'Role-Based Access',
    description: 'HR managers, accountants and admins each see only what they need. Audit logs track every change.',
  },
]

const steps = [
  { number: '01', title: 'Add Employees', desc: 'Create employee profiles with salary and statutory details.', icon: 'mdi-account-plus-outline' },
  { number: '02', title: 'Set Up Schemes', desc: 'Configure PAYE, NSSF, NHIF and custom deduction rules once.', icon: 'mdi-cog-outline' },
  { number: '03', title: 'Enter Pay Inputs', desc: 'Add allowances, overtime or leave adjustments for the period.', icon: 'mdi-pencil-outline' },
  { number: '04', title: 'Run Calculation', desc: 'One click runs the full payroll engine for all employees.', icon: 'mdi-play-circle-outline' },
  { number: '05', title: 'Approve and Pay', desc: 'Review payslips, approve and mark as paid.', icon: 'mdi-check-circle-outline' },
]

const complianceDetails = [
  'PAYE calculated using current KRA tax bands and personal relief of KES 2,400 per month',
  'NSSF contributions split into Tier I at 6% of lower earnings limit and Tier II at 6% of the balance',
  'SHIF / NHIF deducted based on the income-based sliding scale effective October 2024',
  'Affordable Housing Levy at 1.5% employee deduction plus 1.5% employer contribution',
  'Tax-exempt allowances such as meals up to KES 4,000 and mileage at KRA rates handled correctly',
  'P9 annual tax deduction cards generated automatically for every employee',
]

const deductions = [
  { label: 'PAYE', subtitle: 'Income Tax', icon: 'mdi-calculator-variant-outline', color: '#2563eb', bg: '#eff6ff', darkBg: '#1e3a8a20', example: '30% top rate' },
  { label: 'NSSF', subtitle: 'Pension Fund', icon: 'mdi-shield-account-outline', color: '#7c3aed', bg: '#f5f3ff', darkBg: '#4c1d9520', example: 'Tier I and II' },
  { label: 'SHIF', subtitle: 'Health Insurance', icon: 'mdi-hospital-box-outline', color: '#d97706', bg: '#fffbeb', darkBg: '#78350f20', example: '2.75% gross' },
  { label: 'AHL', subtitle: 'Housing Levy', icon: 'mdi-home-city-outline', color: '#16a34a', bg: '#f0fdf4', darkBg: '#14532d20', example: '1.5% gross' },
]

const stats = [
  { value: '100%', label: 'KRA Compliant' },
  { value: '10s', label: 'Avg Payroll Run' },
  { value: '4+', label: 'Statutory Schemes' },
  { value: 'KE', label: 'Built for Kenya' },
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
