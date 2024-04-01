import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    boxShadow: {
      "blue-lg": "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
    },
    colors: {
      "primary-background": "#EDF1F5B3",
      "dark-background": "#0B1622",
      darkPurple: "#2B2D42",
      gray: {
        50: "#EDF1F5B3",
        100: "#EDF1F5",
        125: "#ecf6fe",
        150: "#ADC0D2",
        200: "#C9D7E3",
        300: "#BCBEDC",
        400: "#A0B1C5",
        425: "#7C899A",
        450: "#647380",
        500: "#516170",
        600: "#748899",
      },
      blue: {
        100: "#ACD5F2",
        150: "#3DB4F2",
        175: "#02A9FF",
        200: "#3577FF",
        300: "#152232",
        400: "#151F2E",
        500: "#0a1625",
        600: "#11161D",
        700: "#0B1622B3",
      },
      red: {
        100: "#FEF0F0",
        200: "#F56C6C",
        300: "#EC294B",
      },
      lightGreen: {
        100: "#68D639",
      },
      purple: {
        100: "#9256F3",
      },
      pink: {
        100: "#F779A4",
        200: "#E85D75",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
