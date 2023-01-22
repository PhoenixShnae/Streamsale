import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {
  props: ["videoList"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7e8169bc><div class="container" data-v-7e8169bc><!--[-->`);
  ssrRenderList($props.videoList, (video, id) => {
    _push(`<div class="vid-con" data-v-7e8169bc>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/player/${video.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div style="${ssrRenderStyle({
            backgroundImage: `url(${video.poster})`
          })}" class="vid" data-v-7e8169bc${_scopeId}></div><div class="movie-info" data-v-7e8169bc${_scopeId}><div class="details" data-v-7e8169bc${_scopeId}><h2 data-v-7e8169bc${_scopeId}>${ssrInterpolate(video.name)}</h2><p data-v-7e8169bc${_scopeId}>${ssrInterpolate(video.duration)}</p></div></div>`);
        } else {
          return [
            createVNode("div", {
              style: {
                backgroundImage: `url(${video.poster})`
              },
              class: "vid"
            }, null, 4),
            createVNode("div", { class: "movie-info" }, [
              createVNode("div", { class: "details" }, [
                createVNode("h2", null, toDisplayString(video.name), 1),
                createVNode("p", null, toDisplayString(video.duration), 1)
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Video.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7e8169bc"]]);
const _sfc_main = {
  components: {
    Video: __nuxt_component_0
  },
  head: {
    title: "Home"
  },
  data() {
    return {
      videos: []
    };
  },
  async fetch() {
    this.videos = await fetch(
      "https://localhost:5000/videos"
    ).then((res) => res.json());
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Video = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Video, { videoList: $data.videos }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.5ef79bf8.mjs.map
