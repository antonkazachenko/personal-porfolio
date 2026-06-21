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
        // Semantic color tokens — see app/globals.css color system.
        // Same names resolve to Dark or Light values via the active theme.
        background: "var(--color-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
          soft: "var(--color-surface-soft)",
          raised: "var(--color-surface-raised)",
          "raised-alt": "var(--color-surface-raised-alt)",
          sunken: "var(--color-surface-sunken)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          elevated: "var(--color-card-elevated)",
        },
        scrim: {
          DEFAULT: "var(--color-scrim)",
          strong: "var(--color-scrim-strong)",
        },
        bar: "var(--color-bar)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
          "on-accent": "var(--color-text-on-accent)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          soft: "var(--color-border-soft)",
          strong: "var(--color-border-strong)",
          raised: "var(--color-border-raised)",
        },
        divider: {
          DEFAULT: "var(--color-divider)",
          strong: "var(--color-divider-strong)",
        },
        overlay: "var(--color-overlay)",
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          "soft-bg": "var(--color-accent-soft-bg)",
          "soft-border": "var(--color-accent-soft-border)",
          text: "var(--color-accent-text)",
        },
        btn: {
          "primary-bg": "var(--color-btn-primary-bg)",
          "primary-hover": "var(--color-btn-primary-hover)",
          "primary-text": "var(--color-btn-primary-text)",
          "secondary-bg": "var(--color-btn-secondary-bg)",
          "secondary-border": "var(--color-btn-secondary-border)",
          "secondary-text": "var(--color-btn-secondary-text)",
          "secondary-hover-bg": "var(--color-btn-secondary-hover-bg)",
        },
        // Backwards-compatible alias.
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
