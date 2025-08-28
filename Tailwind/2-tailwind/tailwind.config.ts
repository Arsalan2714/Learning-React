import type { Config } from "tailwindcss";

export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
      },
    },
  },
  plugins: [],
} satisfies Config;
