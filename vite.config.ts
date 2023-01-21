import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  if (isDev) {
    process.env.BROWSER = "Google Chrome";
  }

  return {
    plugins: [react()],
    server: {
      open: isDev,
    },
  };
});
