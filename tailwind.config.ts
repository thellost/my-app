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
        background: "var(--background)",
        foreground: "var(--foreground)",
        baseColor: '#101010',
        baseFontColor: '#FFFFFF',
        orangeAttention: '#ED7127',
        baseBackIcon: '#242424',
        baseWashedColor: '#1B1B1B',
        baseOutline: '#5B5B5B',
        baseGrayText: '#A1A1AA',
        baseGraySubheading :'#C4C4C4'
      },
    },
  },
  plugins: [],
};
export default config;
