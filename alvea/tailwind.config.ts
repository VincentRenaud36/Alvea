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
        'jelly-bean': "var(--jelly-bean)",
        'texas-rose': "var(--texas-rose)",
        'bittersweet': "var(--bittersweet)",
        'acquamarine': "var(--bittersweet)",
        'pelorus': "var(--bittersweet)",
      },
    },
  },
  plugins: [],
} satisfies Config;
