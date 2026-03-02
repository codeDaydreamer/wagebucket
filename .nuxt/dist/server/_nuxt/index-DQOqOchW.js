import { defineComponent, mergeProps, useSSRContext, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center gap-2.5 flex-shrink-0" }, _attrs))}><i class="${ssrRenderClass(`mdi ${__props.icon} text-base text-accent-500`)}"></i><span class="text-sm font-medium" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.label)}</span><span class="mx-3" style="${ssrRenderStyle({ "color": "var(--border)" })}">|</span></div>`);
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
        class: ["group rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg", __props.feature.accent ? "border-accent-600/30 bg-accent-600/5" : ""],
        style: !__props.feature.accent ? "border-color: var(--card-border); background-color: var(--card);" : ""
      }, _attrs))}><div class="${ssrRenderClass([__props.feature.accent ? "bg-accent-600 text-white" : "bg-accent-600/10 text-accent-600", "w-11 h-11 rounded-xl flex items-center justify-center mb-5"])}"><i class="${ssrRenderClass(`mdi ${__props.feature.icon} text-xl`)}"></i></div><h3 class="text-base font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--text)" })}">${ssrInterpolate(__props.feature.title)}</h3><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.feature.description)}</p></div>`);
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
      }, _attrs))}><div class="w-10 h-10 rounded-xl bg-accent-600/10 flex items-center justify-center mb-4"><i class="${ssrRenderClass(`mdi ${__props.step.icon} text-accent-600 text-lg`)}"></i></div><div class="text-xs font-mono font-bold mb-2 text-accent-600/50 tracking-wider">${ssrInterpolate(__props.step.number)}</div><h3 class="text-sm font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--text)" })}">${ssrInterpolate(__props.step.title)}</h3><p class="text-xs leading-relaxed" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.step.desc)}</p>`);
      if (__props.index < 4) {
        _push(`<div class="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-accent-600/20 z-10"></div>`);
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
        class: "rounded-2xl p-6 border",
        style: { "border-color": "var(--card-border)", "background-color": "var(--card)" }
      }, _attrs))}><div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="${ssrRenderStyle({ background: unref(isDark) ? __props.deduction.darkBg : __props.deduction.bg })}"><i class="${ssrRenderClass(`mdi ${__props.deduction.icon} text-xl`)}" style="${ssrRenderStyle({ color: __props.deduction.color })}"></i></div><p class="text-sm font-bold mb-0.5" style="${ssrRenderStyle({ "color": "var(--text)" })}">${ssrInterpolate(__props.deduction.subtitle)}</p><p class="text-xs font-semibold mb-1" style="${ssrRenderStyle({ color: __props.deduction.color })}">${ssrInterpolate(__props.deduction.label)}</p><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(__props.deduction.example)}</p></div>`);
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
        _push(`<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-600 text-white text-xs font-semibold mb-4 self-start"><i class="mdi mdi-check-decagram text-sm"></i> Most Popular </div>`);
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
      title: "WageBucket - Smart Payroll Software for Kenyan Businesses",
      description: "Automate PAYE, NSSF, NHIF and Housing Levy payroll in Kenya. KRA-compliant payslips in seconds. Built by 816 Dynamics for Kenyan SMEs.",
      ogTitle: "WageBucket - Kenya Payroll Software",
      ogDescription: "Run compliant Kenyan payroll in minutes. PAYE, NSSF, NHIF, Housing Levy automation built for Kenyan businesses.",
      twitterCard: "summary_large_image"
    });
    const complianceItems = [
      { icon: "mdi-calculator-variant-outline", label: "KRA PAYE Compliant" },
      { icon: "mdi-shield-account-outline", label: "NSSF Tier I and II" },
      { icon: "mdi-hospital-box-outline", label: "SHIF / NHIF" },
      { icon: "mdi-home-city-outline", label: "Housing Levy (AHL)" },
      { icon: "mdi-file-document-outline", label: "P9 Forms" },
      { icon: "mdi-office-building-outline", label: "Multi-Company" },
      { icon: "mdi-lock-outline", label: "Data Secure" },
      { icon: "mdi-lightning-bolt-outline", label: "Instant Payslips" }
    ];
    const features = [
      {
        icon: "mdi-calculator-variant-outline",
        title: "PAYE Auto-Calculation",
        description: "Progressive tax bands applied automatically using the latest KRA PAYE rates. Personal relief deducted correctly every month.",
        accent: true
      },
      {
        icon: "mdi-shield-account-outline",
        title: "NSSF Tier Compliance",
        description: "New NSSF Act 2013 tiers handled automatically. Tier I and Tier II split calculated correctly for every employee."
      },
      {
        icon: "mdi-hospital-box-outline",
        title: "SHIF / NHIF Deductions",
        description: "Social Health Insurance Fund deductions calculated per the current income-based rates, always up to date."
      },
      {
        icon: "mdi-home-city-outline",
        title: "Affordable Housing Levy",
        description: "1.5% Housing Levy deducted and matched by employer. Automatically included in every payslip as required by law."
      },
      {
        icon: "mdi-file-document-outline",
        title: "Instant Payslips",
        description: "Generate professional, branded payslips in PDF format. Email directly to employees with one click."
      },
      {
        icon: "mdi-account-group-outline",
        title: "Employee Management",
        description: "Manage your full workforce including departments, positions, contract types and statutory IDs all in one place."
      },
      {
        icon: "mdi-chart-bar",
        title: "Payroll Reports",
        description: "P9 annual returns, monthly statutory summaries and custom reports ready for your accountant or the KRA."
      },
      {
        icon: "mdi-tune-variant",
        title: "Custom Allowances",
        description: "Add housing, transport, medical and other allowances. Configure which are taxable and which are exempt."
      },
      {
        icon: "mdi-lock-outline",
        title: "Role-Based Access",
        description: "HR managers, accountants and admins each see only what they need. Audit logs track every change."
      }
    ];
    const steps = [
      { number: "01", title: "Add Employees", desc: "Create employee profiles with salary and statutory details.", icon: "mdi-account-plus-outline" },
      { number: "02", title: "Set Up Schemes", desc: "Configure PAYE, NSSF, NHIF and custom deduction rules once.", icon: "mdi-cog-outline" },
      { number: "03", title: "Enter Pay Inputs", desc: "Add allowances, overtime or leave adjustments for the period.", icon: "mdi-pencil-outline" },
      { number: "04", title: "Run Calculation", desc: "One click runs the full payroll engine for all employees.", icon: "mdi-play-circle-outline" },
      { number: "05", title: "Approve and Pay", desc: "Review payslips, approve and mark as paid.", icon: "mdi-check-circle-outline" }
    ];
    const complianceDetails = [
      "PAYE calculated using current KRA tax bands and personal relief of KES 2,400 per month",
      "NSSF contributions split into Tier I at 6% of lower earnings limit and Tier II at 6% of the balance",
      "SHIF / NHIF deducted based on the income-based sliding scale effective October 2024",
      "Affordable Housing Levy at 1.5% employee deduction plus 1.5% employer contribution",
      "Tax-exempt allowances such as meals up to KES 4,000 and mileage at KRA rates handled correctly",
      "P9 annual tax deduction cards generated automatically for every employee"
    ];
    const deductions = [
      { label: "PAYE", subtitle: "Income Tax", icon: "mdi-calculator-variant-outline", color: "#2563eb", bg: "#eff6ff", darkBg: "#1e3a8a20", example: "30% top rate" },
      { label: "NSSF", subtitle: "Pension Fund", icon: "mdi-shield-account-outline", color: "#7c3aed", bg: "#f5f3ff", darkBg: "#4c1d9520", example: "Tier I and II" },
      { label: "SHIF", subtitle: "Health Insurance", icon: "mdi-hospital-box-outline", color: "#d97706", bg: "#fffbeb", darkBg: "#78350f20", example: "2.75% gross" },
      { label: "AHL", subtitle: "Housing Levy", icon: "mdi-home-city-outline", color: "#16a34a", bg: "#f0fdf4", darkBg: "#14532d20", example: "1.5% gross" }
    ];
    const stats = [
      { value: "100%", label: "KRA Compliant" },
      { value: "10s", label: "Avg Payroll Run" },
      { value: "4+", label: "Statutory Schemes" },
      { value: "KE", label: "Built for Kenya" }
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
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"><div class="absolute inset-0 pointer-events-none"><div class="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]" style="${ssrRenderStyle({ "background-image": "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", "background-size": "56px 56px" })}"></div><div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.08] dark:opacity-[0.15]" style="${ssrRenderStyle({ "background": "radial-gradient(ellipse, #2563eb 0%, transparent 70%)", "filter": "blur(90px)" })}"></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><div data-aos="fade-right" data-aos-duration="600" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-8 border" style="${ssrRenderStyle({ "border-color": "#2563eb33", "background": "#2563eb0d", "color": "#2563eb" })}"><span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span> Built for Kenya. KRA Compliant. </div><h1 data-aos="fade-right" data-aos-delay="80" class="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6"><span style="${ssrRenderStyle({ "color": "var(--text)" })}">Payroll that</span><br><span class="gradient-text">actually works</span><br><span style="${ssrRenderStyle({ "color": "var(--text)" })}">in Kenya.</span></h1><p data-aos="fade-right" data-aos-delay="160" class="text-lg leading-relaxed mb-10 max-w-lg" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Automate PAYE, NSSF, NHIF and Housing Levy calculations. Generate compliant payslips in seconds. Built by <a href="https://www.816-dynamics.com/" target="_blank" class="text-accent-500 hover:underline font-semibold">816 Dynamics</a> for the Kenyan market. </p><div data-aos="fade-right" data-aos-delay="240" class="flex flex-col sm:flex-row items-start gap-4"><a href="https://wagebucket.vercel.app/login" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-accent-600/25 hover:-translate-y-0.5"> Get Started Free <i class="mdi mdi-arrow-right text-base"></i></a><a href="#features" class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5" style="${ssrRenderStyle({ "border-color": "var(--border)", "color": "var(--text)" })}"> See Features <i class="mdi mdi-chevron-down text-base"></i></a></div><div data-aos="fade-right" data-aos-delay="320" class="flex items-center gap-5 mt-10 pt-10 border-t" style="${ssrRenderStyle({ "border-color": "var(--border)" })}"><div class="flex items-center gap-2 text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"><i class="mdi mdi-shield-check-outline text-accent-500 text-base"></i> KRA Compliant </div><div class="flex items-center gap-2 text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"><i class="mdi mdi-lock-outline text-accent-500 text-base"></i> Data Secure </div><div class="flex items-center gap-2 text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"><i class="mdi mdi-flash text-accent-500 text-base"></i> Run in Seconds </div></div></div><div data-aos="fade-left" data-aos-delay="200"><div class="rounded-2xl overflow-hidden border shadow-2xl" style="${ssrRenderStyle({ "border-color": "var(--card-border)", "background-color": "var(--card)" })}"><div class="px-6 py-5 border-b flex items-center justify-between" style="${ssrRenderStyle({ "background-color": "var(--bg2)", "border-color": "var(--border)" })}"><div><p class="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-0.5">WageBucket</p><p class="text-sm font-bold" style="${ssrRenderStyle({ "color": "var(--text)" })}">January 2026 Payslip</p></div><div class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500"><i class="mdi mdi-check-circle-outline text-sm"></i> Approved </div></div><div class="px-6 py-4 border-b flex items-center gap-3" style="${ssrRenderStyle({ "border-color": "var(--border)" })}"><div class="w-9 h-9 rounded-full bg-accent-600/10 flex items-center justify-center flex-shrink-0"><i class="mdi mdi-account text-accent-600 text-lg"></i></div><div><p class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--text)" })}">Jane Mwangi</p><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">Senior Developer · EMP-004</p></div></div><div class="px-6 py-5 space-y-3"><div class="flex justify-between items-center"><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">Gross Pay</span><span class="text-sm font-semibold text-green-500">KES 85,000</span></div><div class="flex justify-between items-center"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-accent-500"></div><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">PAYE (KRA)</span></div><span class="text-sm font-medium" style="${ssrRenderStyle({ "color": "var(--text)" })}">- KES 18,450</span></div><div class="flex justify-between items-center"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-violet-500"></div><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">NSSF</span></div><span class="text-sm font-medium" style="${ssrRenderStyle({ "color": "var(--text)" })}">- KES 2,160</span></div><div class="flex justify-between items-center"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-amber-500"></div><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">SHIF</span></div><span class="text-sm font-medium" style="${ssrRenderStyle({ "color": "var(--text)" })}">- KES 2,550</span></div><div class="flex justify-between items-center"><div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">Housing Levy</span></div><span class="text-sm font-medium" style="${ssrRenderStyle({ "color": "var(--text)" })}">- KES 1,275</span></div><div class="pt-4 mt-2 border-t flex justify-between items-center" style="${ssrRenderStyle({ "border-color": "var(--border)" })}"><span class="text-sm font-bold" style="${ssrRenderStyle({ "color": "var(--text)" })}">Net Pay</span><span class="text-xl font-extrabold text-accent-600">KES 60,565</span></div></div><div class="px-6 py-4 border-t flex items-center justify-between" style="${ssrRenderStyle({ "border-color": "var(--border)", "background-color": "var(--bg2)" })}"><span class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">Generated by WageBucket</span><div class="flex items-center gap-1.5 text-xs text-accent-500 font-medium"><i class="mdi mdi-download-outline text-sm"></i> Download PDF </div></div></div></div></div></div></section><section class="py-5 overflow-hidden border-y" style="${ssrRenderStyle({ "background-color": "var(--bg2)", "border-color": "var(--border)" })}" id="compliance"><div class="flex animate-scroll-x whitespace-nowrap"><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="flex items-center flex-shrink-0"><!--[-->`);
        ssrRenderList(complianceItems, (item) => {
          _push(ssrRenderComponent(_component_CompliancePill, {
            key: item.label + i,
            icon: item.icon,
            label: item.label
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section><section id="features" class="py-28 px-4 sm:px-6 lg:px-8"><div class="max-w-7xl mx-auto"><div class="text-center mb-20"><p data-aos="fade-up" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3">Features</p><h2 data-aos="fade-up" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Everything you need to<br><span class="gradient-text">run payroll in Kenya</span></h2><p data-aos="fade-up" data-aos-delay="160" class="text-base max-w-xl mx-auto leading-relaxed" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> From employee onboarding to compliant payslips, WageBucket handles every step of the Kenyan payroll process. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"><!--[-->`);
      ssrRenderList(features, (feature, i) => {
        _push(ssrRenderComponent(_component_FeatureCard, {
          key: feature.title,
          feature,
          "data-aos": "fade-up",
          "data-aos-delay": String(i % 3 * 80)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section id="how-it-works" class="py-28 px-4 sm:px-6 lg:px-8" style="${ssrRenderStyle({ "background-color": "var(--bg2)" })}"><div class="max-w-7xl mx-auto"><div class="text-center mb-20"><p data-aos="fade-up" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3">How It Works</p><h2 data-aos="fade-up" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Payroll in <span class="gradient-text">five simple steps</span></h2></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(ssrRenderComponent(_component_StepCard, {
          key: step.title,
          step,
          index: i,
          "data-aos": "fade-up",
          "data-aos-delay": String(i * 80)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-28 px-4 sm:px-6 lg:px-8"><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"><div><p data-aos="fade-right" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3">KRA Compliance</p><h2 data-aos="fade-right" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Every Kenyan deduction<br><span class="gradient-text">calculated correctly.</span></h2><p data-aos="fade-right" data-aos-delay="160" class="text-base leading-relaxed mb-10" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> WageBucket automatically applies the latest KRA tax bands, NSSF tiers, SHIF rates and the Affordable Housing Levy so you never have to worry about compliance again. </p><ul data-aos="fade-right" data-aos-delay="240" class="space-y-4"><!--[-->`);
      ssrRenderList(complianceDetails, (item) => {
        _push(`<li class="flex items-start gap-3"><div class="mt-0.5 w-5 h-5 rounded-full bg-accent-600/10 flex items-center justify-center flex-shrink-0"><i class="mdi mdi-check text-accent-600 text-xs"></i></div><span class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div data-aos="fade-left" data-aos-delay="120" class="grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(deductions, (d) => {
        _push(ssrRenderComponent(_component_DeductionCard, {
          key: d.label,
          deduction: d
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section><section class="py-20 px-4 sm:px-6 lg:px-8" style="${ssrRenderStyle({ "background-color": "var(--bg2)" })}"><div class="max-w-7xl mx-auto"><div class="grid grid-cols-2 md:grid-cols-4 gap-5"><!--[-->`);
      ssrRenderList(stats, (stat, i) => {
        _push(ssrRenderComponent(_component_StatCard, {
          key: stat.label,
          stat,
          "data-aos": "zoom-in",
          "data-aos-delay": String(i * 80)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section id="pricing" class="py-28 px-4 sm:px-6 lg:px-8"><div class="max-w-7xl mx-auto"><div class="text-center mb-20"><p data-aos="fade-up" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-3">Pricing</p><h2 data-aos="fade-up" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Simple, transparent<br><span class="gradient-text">pricing</span></h2><p data-aos="fade-up" data-aos-delay="160" class="text-base" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">Start free. Scale as you grow.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"><!--[-->`);
      ssrRenderList(plans, (plan, i) => {
        _push(ssrRenderComponent(_component_PricingCard, {
          key: plan.name,
          plan,
          "data-aos": "fade-up",
          "data-aos-delay": String(i * 80)
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-28 px-4 sm:px-6 lg:px-8" style="${ssrRenderStyle({ "background-color": "var(--bg2)" })}"><div class="max-w-3xl mx-auto text-center"><div class="rounded-3xl border p-12 sm:p-16" style="${ssrRenderStyle({ "background-color": "var(--card)", "border-color": "var(--card-border)" })}"><div data-aos="fade-up" class="w-14 h-14 rounded-2xl bg-accent-600/10 flex items-center justify-center mx-auto mb-6"><i class="mdi mdi-rocket-launch-outline text-accent-600 text-2xl"></i></div><p data-aos="fade-up" class="text-xs font-bold text-accent-600 uppercase tracking-widest mb-4">Get Started Today</p><h2 data-aos="fade-up" data-aos-delay="80" class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6" style="${ssrRenderStyle({ "color": "var(--text)" })}"> Run your first payroll<br><span class="gradient-text">in under 10 minutes.</span></h2><p data-aos="fade-up" data-aos-delay="160" class="text-base mb-10 leading-relaxed" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Join Kenyan businesses already using WageBucket to automate payroll, stay compliant with KRA and pay their teams on time, every time. </p><div data-aos="fade-up" data-aos-delay="240" class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="https://wagebucket.vercel.app/login" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-accent-600/25 hover:-translate-y-0.5"> Create Free Account <i class="mdi mdi-arrow-right text-base"></i></a><a href="https://www.816-dynamics.com/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5" style="${ssrRenderStyle({ "border-color": "var(--border)", "color": "var(--text-muted)" })}"><i class="mdi mdi-open-in-new text-sm"></i> Learn about 816 Dynamics </a></div></div></div></section></div>`);
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
//# sourceMappingURL=index-DQOqOchW.js.map
