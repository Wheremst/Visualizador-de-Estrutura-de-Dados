import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração do Vite: aqui só dizemos que o projeto usa React.
export default defineConfig({
  plugins: [react()],
});
