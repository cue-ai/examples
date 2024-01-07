import type { Config } from 'tailwindcss'

export const cueBorderRadius = {
  dashboardCard: "var(--cue-dashboard-card-radius)",
};

export const cueFontSize = {
  "dashboard-body": "var(--cue-dashboard-body-size)",
  "dashboard-h1": "var(--cue-dashboard-h1-size)",
  "dashboard-h2": "var(--cue-dashboard-h2-size)",
  "dashboard-card-body": "var(--cue-dashboard-card-body-size)",
  "dashboard-card-title": "var(--cue-dashboard-card-title-size)",
};

export const cueColors = {
  dashboard: {
    background: "var(--cue-dashboard-background)",
    foreground: "var(--cue-dashboard-foreground)  ",
    border: "var(--cue-dashboard-border)",
    muted: {
      DEFAULT: "var(--cue-dashboard-muted)",
      foreground: "var(--cue-dashboard-muted-foreground)",
    },
    accent: {
      DEFAULT: "var(--cue-dashboard-accent-foreground)",
      foreground: "var(--cue-dashboard-accent-foreground)",
    },
    card: {
      DEFAULT: "var(--cue-dashboard-card)",
      foreground: "var(--cue-dashboard-card-foreground)",
    },
  },
};

export const cueFontFamily = {
  dashboard: [
    "var(--cue-dashboard-font)",
    "var(--font-sans)",
  ],
};

export const cuePadding = {
  dashboardCard: "var(--cue-dashboard-card-padding)",
};

export const cueSafelist = [
  {
    pattern:
      /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    variants: ["hover", "ui-selected"],
  },
  {
    pattern:
      /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    variants: ["hover", "ui-selected"],
  },
  {
    pattern:
      /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    variants: ["hover", "ui-selected"],
  },
  {
    pattern:
      /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
  },
  {
    pattern:
      /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
  },
  {
    pattern:
      /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
  },
]

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@cue-ai/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: cueBorderRadius,
      fontFamily: cueFontFamily,
      fontSize: cueFontSize,
      colors: cueColors,
      padding: cuePadding
    },
  },
  safelist: cueSafelist,
  plugins: [],
}
export default config
