import { u as useNuxtApp } from './server.mjs';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}

export { useHead as u };
//# sourceMappingURL=composables.cf5eccb7.mjs.map
