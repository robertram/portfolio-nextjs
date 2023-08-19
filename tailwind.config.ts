import type { Config } from 'tailwindcss'

const config: Config = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: {
          light: "#000000",
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        background: {
          light: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          dark: "#0C1418",
        },
        background2: {
          light: "#F7F7F7",
          DEFAULT: "#F7F7F7",
          dark: "#111F25",
        },
        link: {
          light: "#000000",
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        lightBlue: "#233554",
        linkHover: "#FE5F55",
        lightOrange: "#ff827a",
        orange: "#FE5F55",
      },
      fontFamily: {
        body: ["Slabo 13px"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {},
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("@tailwindcss/typography")],
}
export default config
