import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { u as useColorMode } from "./composables-DGJynRPd.js";
import { _ as _export_sfc } from "../server.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/kkaranja/kevin/payroll-landing/node_modules/hookable/dist/index.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/unctx/dist/index.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/kkaranja/kevin/payroll-landing/node_modules/defu/dist/defu.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/ufo/dist/index.mjs";
import "/home/kkaranja/kevin/payroll-landing/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppNav",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const scrolled = ref(false);
    const mobileOpen = ref(false);
    const isDark = computed(() => colorMode.value === "dark");
    const links = [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Compliance", href: "#compliance" },
      { label: "Pricing", href: "#pricing" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 right-0 z-50 transition-all duration-300", unref(scrolled) ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 shadow-sm" : "bg-transparent"]
      }, _attrs))} data-v-a920aa63><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-a920aa63><div class="flex items-center justify-between h-16" data-v-a920aa63><a href="/" class="flex items-center gap-2.5" data-v-a920aa63><div class="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center" data-v-a920aa63><span class="text-white font-black text-sm font-mono" data-v-a920aa63>W</span></div><span class="font-bold text-lg tracking-tight" style="${ssrRenderStyle({ "color": "var(--text)" })}" data-v-a920aa63>WageBucket</span></a><div class="hidden md:flex items-center gap-7" data-v-a920aa63><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-sm font-medium transition-colors duration-200" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-a920aa63>${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-3" data-v-a920aa63><button class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors" style="${ssrRenderStyle({ "color": "var(--text-muted)", "background-color": "var(--bg2)" })}" aria-label="Toggle theme" data-v-a920aa63>`);
      if (unref(isDark)) {
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a920aa63><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707M12 5a7 7 0 100 14A7 7 0 0012 5z" data-v-a920aa63></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a920aa63><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" data-v-a920aa63></path></svg>`);
      }
      _push(`</button><a href="https://wagebucket.vercel.app/login" class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white transition-all duration-200 shadow-sm hover:shadow-accent-600/25 hover:shadow-lg" data-v-a920aa63> Get Started <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" data-v-a920aa63><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-v-a920aa63></path></svg></a><button class="md:hidden w-9 h-9 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ "color": "var(--text)", "background-color": "var(--bg2)" })}" data-v-a920aa63><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-a920aa63>`);
      if (!unref(mobileOpen)) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-v-a920aa63></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-v-a920aa63></path>`);
      }
      _push(`</svg></button></div></div></div>`);
      if (unref(mobileOpen)) {
        _push(`<div class="md:hidden border-t" style="${ssrRenderStyle({ "background-color": "var(--bg)", "border-color": "var(--border)" })}" data-v-a920aa63><div class="px-4 py-4 flex flex-col gap-4" data-v-a920aa63><!--[-->`);
        ssrRenderList(links, (link) => {
          _push(`<a${ssrRenderAttr("href", link.href)} class="text-sm font-medium" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}" data-v-a920aa63>${ssrInterpolate(link.label)}</a>`);
        });
        _push(`<!--]--><a href="https://wagebucket.vercel.app/login" class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold bg-accent-600 hover:bg-accent-700 text-white transition-colors" data-v-a920aa63> Get Started Free </a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a920aa63"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const productLinks = [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Compliance", href: "#compliance" },
      { label: "Pricing", href: "#pricing" },
      { label: "Sign Up", href: "https://wagebucket.vercel.app/login" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        style: { "background-color": "var(--bg2)", "border-top": "1px solid var(--border)" },
        class: "mt-0"
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="grid grid-cols-1 md:grid-cols-4 gap-10"><div class="md:col-span-2"><div class="flex items-center gap-2.5 mb-4"><div class="w-8 h-8 rounded-lg bg-accent-600 flex items-center justify-center"><span class="text-white font-black text-sm font-mono">W</span></div><span class="font-bold text-lg" style="${ssrRenderStyle({ "color": "var(--text)" })}">WageBucket</span></div><p class="text-sm leading-relaxed mb-5 max-w-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Kenya&#39;s smart payroll platform. Automate PAYE, NSSF, NHIF, and Housing Levy — built for Kenyan businesses. </p><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border" style="${ssrRenderStyle({ "border-color": "var(--border)", "color": "var(--text-muted)" })}"><span>A product of</span><a href="https://www.816-dynamics.com/" target="_blank" rel="noopener" class="font-semibold text-accent-500 hover:text-accent-400 transition-colors"> 816 Dynamics </a></div></div><div><h4 class="text-sm font-semibold mb-4" style="${ssrRenderStyle({ "color": "var(--text)" })}">Product</h4><ul class="space-y-2.5"><!--[-->`);
      ssrRenderList(productLinks, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-sm transition-colors hover:text-accent-500" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}">${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="text-sm font-semibold mb-4" style="${ssrRenderStyle({ "color": "var(--text)" })}">Company</h4><ul class="space-y-2.5"><li><a href="https://www.816-dynamics.com/" target="_blank" rel="noopener" class="text-sm transition-colors hover:text-accent-500" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> About 816 Dynamics </a></li><li><a href="https://www.816-dynamics.com/" target="_blank" rel="noopener" class="text-sm transition-colors hover:text-accent-500" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Contact Us </a></li><li><a href="https://wagebucket.vercel.app/login" target="_blank" rel="noopener" class="text-sm transition-colors hover:text-accent-500" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Sign Up </a></li></ul></div></div><div class="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style="${ssrRenderStyle({ "border-top": "1px solid var(--border)" })}"><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} WageBucket. A product of <a href="https://www.816-dynamics.com/" target="_blank" rel="noopener" class="text-accent-500 hover:text-accent-400 transition-colors">816 Dynamics</a>. All rights reserved. </p><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--text-muted)" })}"> Built for Kenyan businesses. Compliant with KRA regulations. </p></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNav = __nuxt_component_0;
  const _component_AppFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "min-h-screen flex flex-col",
    style: { "background-color": "var(--bg)", "color": "var(--text)" }
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppNav, null, null, _parent));
  _push(`<main class="flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-BAIsvMVJ.js.map
