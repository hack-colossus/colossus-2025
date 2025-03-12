/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hackathon-dark-blue": "#1F1F47",
        "hackathon-darker-blue": "#1A1A23",
        "hackathon-light-pink": "#E9C7E9",
        "hackathon-beige": "#F8E4CB",
        "hackathon-lavender": "#B79BCD",
        "hackathon-purple": "#846EB1",
        "hackathon-black": "#000000",
        "retro-black": "#000000",
        "retro-purple": "#3F0071",
        "retro-pink": "#FB2576",
        "retro-blue": "#0000FF",
        "retro-green": "#39FF14",
        "retro-yellow": "#FFFF00",
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
      fontFamily: {
        // Use the same names as defined in @font-face
        "press-start": ['"Press Start 2P"', "cursive"],
        "jetbrains": ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
