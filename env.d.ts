/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

interface ImportMetaEnv {
  readonly VITE_FIXER_API_KEY: string
  readonly VITE_FX_FEED_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
