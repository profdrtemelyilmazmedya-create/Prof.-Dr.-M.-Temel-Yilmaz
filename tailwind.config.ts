import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          500: '#334e68',
          700: '#243b53',
          900: '#102a43', // Koyu kurumsal lacivert
        },
        accent: {
          500: '#2b6cb0', // Medikal mavi
          600: '#2c5282',
        }
      },
    },
  },
  plugins: [],
};
export default config;