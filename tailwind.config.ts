import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        gibson: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Fallback for gibson references
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#50007F",
          50: "#F3EEF6",
          100: "#E7DBF2",
          200: "#D1B3E8",
          300: "#BB8BDE",
          400: "#A563D4",
          500: "#50007F",
          600: "#44006C",
          700: "#380059",
          800: "#2C0046",
          900: "#200033",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FE5000",
          50: "#FFEAE0",
          100: "#FFD7C4",
          200: "#FE9E73",
          300: "#FE7A47",
          400: "#FE5000",
          500: "#FE5000",
          600: "#CB4000",
          700: "#F78E1B",
          800: "#F47000",
          900: "#E9531D",
          foreground: "#FFFFFF",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#E8E8E8",
          400: "#D4D4D4",
          500: "#B2B2B2",
          600: "#8A8A8A",
          700: "#5B5B5B",
          800: "#333333",
          900: "#1A1A1A",
        },
        success: {
          DEFAULT: "#19722C",
          100: "#E8F5E8",
          200: "#D1EBD1",
          300: "#A3D7A3",
          400: "#75C375",
          500: "#47AF47",
          600: "#19722C",
        },
        blue: {
          DEFAULT: "#0D4CA6",
          200: "#E6EEFA",
          600: "#0D4CA6",
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
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
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
