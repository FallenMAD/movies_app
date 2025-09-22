import type { App } from 'vue'
import ViewTitle from '@/components/UI/ViewTitle.vue'
import Error from '@/components/Error.vue'

export default function registerGlobalComponents(app: App): void {
  app.component('ViewTitle', ViewTitle)
  app.component('Error', Error)
}
