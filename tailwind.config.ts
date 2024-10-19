import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: "#6d31ed",
        footerbackground: "#1E2128",
        categoriesColor: "#473BF0",
        secondary: "#FF432A",
        buttonBg: "#6D31ED",
        linkColor: "#68D585",
        "muted-foreground": "#808080"
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xl1': '1480px',
      'xl2': '1680px',
    },
    fontFamily:{
      poppins: "var(--font-poppins)",
      poppins_semibold: "var(--font-poppinssemibold)"
    },
  },
  plugins: [],
};
export default config;
