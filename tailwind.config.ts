import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        btn_bg_color: "#281353",
        btn_border_color: "#6c4cc5",
        text_white: "#f4f5f4",
        border_color: "#a3a3a3",
      },
    },
  },
  plugins: [],
} satisfies Config;
