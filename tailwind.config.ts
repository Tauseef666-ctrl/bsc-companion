import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF7F0",
          100: "#F5F0E3",
          200: "#EAE0C8",
          300: "#D9C9A3",
        },
        sage: {
          50: "#F2F5F0",
          100: "#E4EADF",
          200: "#C9D5C1",
          300: "#A8BC9D",
          400: "#8AA77B",
          500: "#6E945E",
          600: "#567748",
          700: "#445C39",
          800: "#36492E",
          900: "#2A3A24",
        },
        dustblue: {
          50: "#F0F4F7",
          100: "#DFE9EF",
          200: "#BFD3DF",
          300: "#93B5C9",
          400: "#6294AF",
          500: "#477993",
          600: "#3A6179",
          700: "#31505F",
          800: "#2B4250",
          900: "#263943",
        },
        lavender: {
          50: "#F5F3F8",
          100: "#EBE7F0",
          200: "#D7CEE1",
          300: "#BCACCD",
          400: "#9D87B5",
          500: "#836A9E",
          600: "#6C5487",
          700: "#59466F",
          800: "#4B3B5E",
          900: "#3F3450",
        },
        charcoal: {
          50: "#F5F5F4",
          100: "#EAEAE8",
          200: "#D5D4D1",
          300: "#B5B3AE",
          400: "#8F8C86",
          500: "#736F69",
          600: "#5C5953",
          700: "#4A4743",
          800: "#3A3834",
          900: "#262522",
        },
        beige: {
          50: "#FBF9F4",
          100: "#F5F0E4",
          200: "#E8DEC9",
          300: "#D6C6A2",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(38, 37, 34, 0.08)",
        card: "0 1px 3px rgba(38, 37, 34, 0.08), 0 4px 12px rgba(38, 37, 34, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
