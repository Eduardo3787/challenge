declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // Usamos Record<string, unknown> para props (em vez de {}), object para o objeto de bindings (em vez de {}) e unknown para o terceiro parâmetro (evitando any)
  const component: DefineComponent<Record<string, unknown>, object, unknown>
  export default component
}