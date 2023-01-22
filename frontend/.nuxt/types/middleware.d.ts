import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/streamsale_v2/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}