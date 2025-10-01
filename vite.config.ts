import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const repoName = 'gorev8-OdemeBilgileri'; 
// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react(), tailwindcss()],
});
