import { defineComponent, mergeProps, useSSRContext, computed, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { f as useSeoMeta } from "../server.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/kkaranja/kevin/payroll-landing/node_modules/hookable/dist/index.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/unctx/dist/index.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/kkaranja/kevin/payroll-landing/node_modules/defu/dist/defu.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/ufo/dist/index.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CompliancePill",
  __ssrInlineRender: true,
  props: {
    icon: {},
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center gap-2 flex-shrink-0" }, _attrs))}><span class="text-lg">${ssrInterpolate(__props.icon)}</span><span class="text-sm font-medium" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.label)}</span><span class="text-slate-400 mx-2">·</span></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompliancePill.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FeatureCard",
  __ssrInlineRender: true,
  props: {
    feature: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg", __props.feature.accent ? "border-accent-600/30 bg-accent-600/5" : ""],
        style: !__props.feature.accent ? "border-color: var(--card-border); background-color: var(--card);" : ""
      }, _attrs))}><div class="text-3xl mb-4">${ssrInterpolate(__props.feature.icon)}</div><h3 class="text-base font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--text)" })}">${ssrInterpolate(__props.feature.title)}</h3><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.feature.description)}</p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StepCard",
  __ssrInlineRender: true,
  props: {
    step: {},
    index: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "rounded-2xl p-6 border relative",
        style: { "background-color": "var(--card)", "border-color": "var(--card-border)" }
      }, _attrs))}><div class="text-4xl font-black font-mono mb-3 text-accent-600/30">${ssrInterpolate(__props.step.number)}</div><h3 class="text-sm font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--text)" })}">${ssrInterpolate(__props.step.title)}</h3><p class="text-xs leading-relaxed" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.step.desc)}</p>`);
      if (__props.index < 4) {
        _push(`<div class="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent-600/30 z-10"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StepCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DeductionCard",
  __ssrInlineRender: true,
  props: {
    deduction: {}
  },
  setup(__props) {
    const colorMode = useColorMode();
    const isDark = computed(() => colorMode.value === "dark");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "rounded-2xl p-5 border",
        style: { "border-color": "var(--card-border)", "background-color": "var(--card)" }
      }, _attrs))}><div class="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style="${ssrRenderStyle({ background: unref(isDark) ? __props.deduction.darkBg : __props.deduction.bg })}"><span class="text-sm font-black font-mono" style="${ssrRenderStyle({ color: __props.deduction.color })}">${ssrInterpolate(__props.deduction.label)}</span></div><p class="text-sm font-bold mb-0.5" style="${ssrRenderStyle({ "color": "var(--text)" })}">${ssrInterpolate(__props.deduction.subtitle)}</p><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.deduction.example)}</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DeductionCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StatCard",
  __ssrInlineRender: true,
  props: {
    stat: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "rounded-2xl p-6 border text-center",
        style: { "background-color": "var(--card)", "border-color": "var(--card-border)" }
      }, _attrs))}><div class="text-3xl font-black mb-1 gradient-text">${ssrInterpolate(__props.stat.value)}</div><div class="text-xs font-medium" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.stat.label)}</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PricingCard",
  __ssrInlineRender: true,
  props: {
    plan: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rounded-2xl p-7 border flex flex-col transition-all duration-200 hover:-translate-y-1", __props.plan.highlighted ? "border-accent-600 shadow-lg shadow-accent-600/10" : ""],
        style: __props.plan.highlighted ? "background-color: var(--card);" : "background-color: var(--card); border-color: var(--card-border);"
      }, _attrs))}>`);
      if (__props.plan.highlighted) {
        _push(`<div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-600 text-white text-xs font-semibold mb-4 self-start"> ⭐ Most Popular </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="text-lg font-bold mb-1" style="${ssrRenderStyle({ "color": "var(--text)" })}">${ssrInterpolate(__props.plan.name)}</h3><p class="text-xs mb-5" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.plan.description)}</p><div class="mb-6"><span class="text-4xl font-black" style="${ssrRenderStyle({ "color": "var(--text)" })}">${ssrInterpolate(__props.plan.price)}</span><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.plan.period)}</span></div><ul class="space-y-2.5 mb-8 flex-1"><!--[-->`);
      ssrRenderList(__props.plan.features, (feat) => {
        _push(`<li class="flex items-start gap-2.5"><svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(feat)}</span></li>`);
      });
      _push(`<!--]--></ul><a${ssrRenderAttr("href", __props.plan.href)}${ssrRenderAttr("target", __props.plan.href.startsWith("http") ? "_blank" : void 0)} rel="noopener" class="${ssrRenderClass([__props.plan.highlighted ? "bg-accent-600 hover:bg-accent-700 text-white shadow-md hover:shadow-lg hover:shadow-accent-600/25" : "border hover:border-accent-600 hover:text-accent-600", "block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"])}" style="${ssrRenderStyle(!__props.plan.highlighted ? "border-color: var(--border); color: var(--text-muted);" : "")}">${ssrInterpolate(__props.plan.cta)}</a></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "WageBucket – Smart Payroll Software for Kenyan Businesses",
      description: "Automate PAYE, NSSF, NHIF, and Housing Levy payroll in Kenya. KRA-compliant payslips in seconds. Built by 816 Dynamics for Kenyan SMEs.",
      ogTitle: "WageBucket – Kenya Payroll Software",
      ogDescription: "Run compliant Kenyan payroll in minutes. PAYE, NSSF, NHIF, Housing Levy automation built for Kenyan businesses.",
      twitterCard: "summary_large_image"
    });
    const complianceItems = [
      { icon: "🇰🇪", label: "KRA PAYE Compliant" },
      { icon: "✅", label: "NSSF Tier I & II" },
      { icon: "🏥", label: "SHIF / NHIF" },
      { icon: "🏠", label: "Housing Levy (AHL)" },
      { icon: "📋", label: "P9 Forms" },
      { icon: "💼", label: "Multi-Company" },
      { icon: "🔒", label: "Data Secure" },
      { icon: "⚡", label: "Instant Payslips" }
    ];
    const features = [
      {
        icon: "🧮",
        title: "PAYE Auto-Calculation",
        description: "Progressive tax bands applied automatically using the latest KRA PAYE rates. Personal relief deducted correctly every month.",
        accent: true
      },
      {
        icon: "🏛️",
        title: "NSSF Tier Compliance",
        description: "New NSSF Act 2013 tiers handled automatically — Tier I (lower earnings limit) and Tier II (upper earnings limit) split correctly."
      },
      {
        icon: "🏥",
        title: "SHIF / NHIF Deductions",
        description: "Social Health Insurance Fund deductions calculated per the current income-based rates. Always up to date."
      },
      {
        icon: "🏠",
        title: "Affordable Housing Levy",
        description: "1.5% Housing Levy deducted and matched by employer. Automatically included in every payslip as required by law."
      },
      {
        icon: "📄",
        title: "Instant Payslips",
        description: "Generate professional, branded payslips in PDF format. Email directly to employees with one click."
      },
      {
        icon: "👥",
        title: "Employee Management",
        description: "Manage your full workforce — departments, positions, contract types, and statutory IDs — all in one place."
      },
      {
        icon: "📊",
        title: "Payroll Reports",
        description: "P9 annual returns, monthly statutory summaries, and custom reports ready for your accountant or the KRA."
      },
      {
        icon: "⚙️",
        title: "Custom Allowances",
        description: "Add housing, transport, medical, and other allowances. Configure which are taxable and which are exempt."
      },
      {
        icon: "🔐",
        title: "Role-Based Access",
        description: "HR managers, accountants, and admins each see only what they need. Audit logs track every change."
      }
    ];
    const steps = [
      { number: "01", title: "Add Employees", desc: "Import or create employee profiles with salary and statutory details." },
      { number: "02", title: "Set Up Schemes", desc: "Configure PAYE, NSSF, NHIF, and custom deduction rules once." },
      { number: "03", title: "Enter Pay Inputs", desc: "Add allowances, overtime, or leave adjustments for the period." },
      { number: "04", title: "Run Calculation", desc: "One click runs the full payroll engine for all employees." },
      { number: "05", title: "Approve & Pay", desc: "Review payslips, approve, and mark as paid. Done." }
    ];
    const complianceDetails = [
      "PAYE calculated using current 2024/2025 KRA tax bands and personal relief (KES 2,400/month)",
      "NSSF contributions split into Tier I (6% of lower earnings limit) and Tier II (6% of balance)",
      "SHIF/NHIF deducted based on the income-based sliding scale (effective October 2024)",
      "Affordable Housing Levy — 1.5% employee deduction + 1.5% employer contribution",
      "Tax-exempt allowances (e.g. meals up to KES 4,000, mileage at KRA rates) handled correctly",
      "P9 annual tax deduction cards generated automatically for every employee"
    ];
    const deductions = [
      { label: "PAYE", subtitle: "Income Tax", color: "#2563eb", bg: "#eff6ff", darkBg: "#1e3a8a20", example: "30% top rate" },
      { label: "NSSF", subtitle: "Pension Fund", color: "#16a34a", bg: "#f0fdf4", darkBg: "#14532d20", example: "Tier I & II" },
      { label: "SHIF", subtitle: "Health Insurance", color: "#d97706", bg: "#fffbeb", darkBg: "#78350f20", example: "2.75% gross" },
      { label: "AHL", subtitle: "Housing Levy", color: "#7c3aed", bg: "#f5f3ff", darkBg: "#4c1d9520", example: "1.5% gross" }
    ];
    const stats = [
      { value: "100%", label: "KRA Compliant" },
      { value: "< 10s", label: "Payroll Run Time" },
      { value: "4+", label: "Statutory Schemes" },
      { value: "816", label: "Dynamics Built" }
    ];
    const plans = [
      {
        name: "Starter",
        price: "Free",
        period: "",
        description: "Perfect for trying out WageBucket with a small team.",
        features: ["Up to 5 employees", "PAYE, NSSF, NHIF, AHL", "Payslip generation", "Email support"],
        cta: "Get Started Free",
        href: "https://wagebucket.vercel.app/login",
        highlighted: false
      },
      {
        name: "Business",
        price: "KES 2,500",
        period: "/month",
        description: "For growing businesses with larger payroll needs.",
        features: ["Unlimited employees", "All statutory deductions", "Custom allowances", "P9 annual returns", "Priority support", "Multi-department"],
        cta: "Start Business Plan",
        href: "https://wagebucket.vercel.app/login",
        highlighted: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organisations with complex payroll requirements.",
        features: ["Everything in Business", "Custom integrations", "Dedicated account manager", "SLA guarantee", "On-premise option", "API access"],
        cta: "Contact 816 Dynamics",
        href: "https://www.816-dynamics.com/",
        highlighted: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CompliancePill = _sfc_main$6;
      const _component_FeatureCard = _sfc_main$5;
      const _component_StepCard = _sfc_main$4;
      const _component_DeductionCard = _sfc_main$3;
      const _component_StatCard = _sfc_main$2;
      const _component_PricingCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"><div class="absolute inset-0 pointer-events-none"><div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" style="${ssrRenderStyle({ "background-image": "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", "background-size": "60px 60px" })}"></div><div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-20" style="${ssrRenderStyle({ "background": "radial-gradient(circle, #2563eb 0%, transparent 70%)", "filter": "blur(80px)" })}"></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"><div data-aos="fade-down" data-aos-duration="600" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-8 border" style="${ssrRenderStyle({ "border-color": "#2563eb33", "background": "#2563eb11", "color": "#2563eb" })}"><span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span> Built for Kenyan Businesses · KRA Compliant </div><h1 data-aos="fade-up" data-aos-delay="100" class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"><span style="${ssrRenderStyle({ "color": "var(--text)" })}">Payroll That</span><br><span class="gradient-text">Actually Works</span><br><span style="${ssrRenderStyle({ "color": "var(--text)" })}">In Kenya.</span></h1><p data-aos="fade-up" data-aos-delay="200" class="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Automate PAYE, NSSF, NHIF, and Housing Levy calculations. Generate compliant payslips in seconds. Built by <a href="https://www.816-dynamics.com/" target="_blank" class="text-accent-500 hover:underline font-medium">816 Dynamics</a> specifically for the Kenyan market. </p><div data-aos="fade-up" data-aos-delay="300" class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="https://wagebucket.vercel.app/login" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-lg hover:shadow-accent-600/30 hover:shadow-xl hover:-translate-y-0.5"> Start Free Today <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg></a><a href="#features" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold border transition-all duration-200 hover:-translate-y-0.5" style="${ssrRenderStyle({ "border-color": "var(--border)", "color": "var(--text)" })}"> See Features <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></a></div><div data-aos="zoom-in" data-aos-delay="400" class="mt-16 max-w-2xl mx-auto"><div class="rounded-2xl overflow-hidden border shadow-2xl" style="${ssrRenderStyle({ "border-color": "var(--border)", "background-color": "var(--card)" })}"><div class="flex items-center gap-2 px-4 py-3 border-b" style="${ssrRenderStyle({ "background-color": "var(--bg2)", "border-color": "var(--border)" })}"><div class="flex gap-1.5"><div class="w-3 h-3 rounded-full bg-red-500 opacity-80"></div><div class="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div><div class="w-3 h-3 rounded-full bg-green-500 opacity-80"></div></div><span class="flex-1 text-center text-xs font-mono" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">wagebucket — payslip generator</span></div><div class="p-6 font-mono text-sm text-left"><div class="mb-4"><span class="text-accent-500">→</span><span class="ml-2" style="${ssrRenderStyle({ "color": "var(--text)" })}">Processing payroll for <span class="text-accent-400 font-semibold">January 2026</span></span></div><div class="space-y-1.5" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"><div class="flex justify-between"><span>Gross Pay</span><span class="text-green-400 font-semibold">KES 85,000</span></div><div class="flex justify-between"><span>PAYE (KRA)</span><span class="text-red-400">- KES 18,450</span></div><div class="flex justify-between"><span>NSSF (Tier I + II)</span><span class="text-red-400">- KES 2,160</span></div><div class="flex justify-between"><span>SHIF (NHIF)</span><span class="text-red-400">- KES 2,550</span></div><div class="flex justify-between"><span>Housing Levy</span><span class="text-red-400">- KES 1,275</span></div><div class="mt-3 pt-3 border-t flex justify-between font-bold text-base" style="${ssrRenderStyle({ "border-color": "var(--border)" })}"><span style="${ssrRenderStyle({ "color": "var(--text)" })}">Net Pay</span><span class="text-accent-400">KES 60,565</span></div></div><div class="mt-4 flex items-center gap-2 text-xs text-green-400"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> Payslip generated · KRA compliant · Ready to send </div></div></div></div></div></section><section class="py-6 overflow-hidden border-y" style="${ssrRenderStyle({ "background-color": "var(--bg2)", "border-color": "var(--border)" })}" id="compliance"><div class="flex gap-12 animate-scroll-x whitespace-nowrap"><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<div class="flex items-center gap-12 flex-shrink-0"><!--[-->`);
        ssrRenderList(complianceItems, (item) => {
          _push(ssrRenderComponent(_component_CompliancePill, {
            key: item.label + i,
            icon: item.icon,
            label: item.label
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section><section id="features" class="py-24 px-4 sm:px-6 lg:px-8"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><p data-aos="fade-up" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3">Features</p><h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight mb-4" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Everything you need to<br><span class="gradient-text">run payroll in Kenya</span></h2><p data-aos="fade-up" data-aos-delay="200" class="text-lg max-w-xl mx-auto" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> From employee onboarding to compliant payslips — WageBucket handles every step of the Kenyan payroll process. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(features, (feature, i) => {
        _push(ssrRenderComponent(_component_FeatureCard, {
          key: feature.title,
          feature,
          "data-aos": i % 2 === 0 ? "fade-right" : "fade-left",
          "data-aos-delay": String(i % 3 * 100)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section id="how-it-works" class="py-24 px-4 sm:px-6 lg:px-8" style="${ssrRenderStyle({ "background-color": "var(--bg2)" })}"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><p data-aos="fade-up" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3">How It Works</p><h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Payroll in <span class="gradient-text">5 simple steps</span></h2></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(ssrRenderComponent(_component_StepCard, {
          key: step.title,
          step,
          index: i,
          "data-aos": "fade-up",
          "data-aos-delay": String(i * 80)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-24 px-4 sm:px-6 lg:px-8"><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><p data-aos="fade-right" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3">KRA Compliance</p><h2 data-aos="fade-right" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight mb-6" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Every Kenyan deduction,<br><span class="gradient-text">calculated correctly.</span></h2><p data-aos="fade-right" data-aos-delay="200" class="text-base leading-relaxed mb-8" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> WageBucket automatically applies the latest KRA tax bands, NSSF tiers, SHIF/NHIF rates, and the Affordable Housing Levy — so you never have to worry about compliance again. </p><ul data-aos="fade-right" data-aos-delay="300" class="space-y-4"><!--[-->`);
      ssrRenderList(complianceDetails, (item) => {
        _push(`<li class="flex items-start gap-3"><div class="mt-0.5 w-5 h-5 rounded-full bg-accent-600/10 flex items-center justify-center flex-shrink-0"><svg class="w-3 h-3 text-accent-500" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></div><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div data-aos="fade-left" data-aos-delay="100" class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(deductions, (d) => {
        _push(ssrRenderComponent(_component_DeductionCard, {
          key: d.label,
          deduction: d
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section><section class="py-16 px-4 sm:px-6 lg:px-8" style="${ssrRenderStyle({ "background-color": "var(--bg2)" })}"><div class="max-w-7xl mx-auto"><div class="grid grid-cols-2 md:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(stats, (stat, i) => {
        _push(ssrRenderComponent(_component_StatCard, {
          key: stat.label,
          stat,
          "data-aos": "zoom-in",
          "data-aos-delay": String(i * 100)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section id="pricing" class="py-24 px-4 sm:px-6 lg:px-8"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><p data-aos="fade-up" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-3">Pricing</p><h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight mb-4" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Simple, transparent<br><span class="gradient-text">pricing</span></h2><p data-aos="fade-up" data-aos-delay="200" class="text-lg" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">Start free. Scale as you grow.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"><!--[-->`);
      ssrRenderList(plans, (plan, i) => {
        _push(ssrRenderComponent(_component_PricingCard, {
          key: plan.name,
          plan,
          "data-aos": "fade-up",
          "data-aos-delay": String(i * 100)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"><div class="max-w-4xl mx-auto text-center relative"><div class="absolute inset-0 -z-10 pointer-events-none"><div class="absolute inset-0 rounded-3xl opacity-10 dark:opacity-20" style="${ssrRenderStyle({ "background": "radial-gradient(ellipse at center, #2563eb 0%, transparent 70%)" })}"></div></div><div class="rounded-3xl border p-12 sm:p-16" style="${ssrRenderStyle({ "background-color": "var(--card)", "border-color": "var(--card-border)" })}"><p data-aos="fade-up" class="text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">Get Started Today</p><h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl font-black tracking-tight mb-6" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Run your first payroll<br><span class="gradient-text">in under 10 minutes.</span></h2><p data-aos="fade-up" data-aos-delay="200" class="text-lg mb-10" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Join Kenyan businesses already using WageBucket to automate their payroll, stay compliant with KRA, and pay their teams on time — every time. </p><div data-aos="fade-up" data-aos-delay="300" class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="https://wagebucket.vercel.app/login" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-lg hover:shadow-accent-600/30 hover:shadow-xl hover:-translate-y-0.5"> Create Free Account <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg></a><a href="https://www.816-dynamics.com/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border transition-all duration-200 hover:-translate-y-0.5" style="${ssrRenderStyle({ "border-color": "var(--border)", "color": "var(--text-muted)" })}"> Learn about 816 Dynamics </a></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D24KozAp.js.map
