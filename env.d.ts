interface ImportMetaEnv {
  readonly VITE_OPENROUTE_API_KEY: string;
  // Ajoutez d'autres variables si nécessaire
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
