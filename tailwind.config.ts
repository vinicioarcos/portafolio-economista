import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Paleta profesional académica
        ink: "#0f172a", // Gris carbón oscuro
        charcoal: "#1a1f3a", // Gris carbón más oscuro
        petrol: "#0d5a5a", // Azul petróleo
        petroldark: "#083838", // Azul petróleo oscuro
        petrolight: "#1a8b8b", // Azul petróleo claro
        copper: "#b87333", // Cobre/dorado
        copperlight: "#d4a574", // Cobre claro
        copperdark: "#8f5a26", // Cobre oscuro, uso en texto sobre fondos claros (WCAG AA)
        mist: "#e2e8f0", // Gris claro
        sand: "#f8fafc", // Blanco/arena clara
        cream: "#faf9f7", // Crema
        accent: "#0d5a5a", // Azul petróleo principal
        accentSoft: "#c5e4e4" // Azul petróleo muy claro
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        panel: "0 18px 50px rgba(15, 23, 42, 0.08)",
        subtle: "0 4px 12px rgba(13, 90, 90, 0.06)",
        accent: "0 8px 24px rgba(184, 115, 51, 0.12)"
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-lg": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.005em" }],
        "heading-sm": ["1.5rem", { lineHeight: "1.4" }]
      }
    }
  },
  plugins: []
};

export default config;
