import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const _name_vue_vue_type_style_index_0_scoped_45b6d719_lang = "";
const _sfc_main = {
  data() {
    return {
      vidName: ""
    };
  },
  mounted() {
    this.vidName = this.$route.params.name;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "player" }, _attrs))} data-v-45b6d719><video controls muted autoPlay data-v-45b6d719><source${ssrRenderAttr("src", `https://localhost:5000/videos/video/${$data.vidName}`)} type="video/mp4" data-v-45b6d719></video></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/player/_name.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _name = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-45b6d719"]]);
export {
  _name as default
};
//# sourceMappingURL=_name.e3b8d36e.js.map
