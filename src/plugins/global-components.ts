import type { App } from 'vue'
import ViewTitle from '@/components/UI/ViewTitle.vue'

export default function registerGlobalComponents(app: App): void {
  app.component('ViewTitle', ViewTitle)
}
