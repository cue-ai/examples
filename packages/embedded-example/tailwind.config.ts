import type { Config } from 'tailwindcss'
import theme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import {defaultTheme} from "./default-config";

export const cueBorderRadius = {
  dashboardCard: "var(--cue-dashboard-card-radius)",
  ...defaultTheme.borderRadius,
};

export const cueFontSize = {
  "dashboard-body": "var(--cue-dashboard-body-size)",
  "dashboard-h1": "var(--cue-dashboard-h1-size)",
  "dashboard-h2": "var(--cue-dashboard-h2-size)",
  "dashboard-card-body": "var(--cue-dashboard-card-body-size)",
  "dashboard-card-title": "var(--cue-dashboard-card-title-size)",
  ...theme.fontSize,
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
  ...colors,
};

export const cueFontFamily = {
  dashboard: [
    "var(--cue-dashboard-font)",
    "var(--font-sans)",
  ],
};

export const cuePadding = {
  dashboardCard: "var(--cue-dashboard-card-padding)",
  ...defaultTheme.spacing,
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
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@cue-ai/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // important: '#__next',
  theme: {
    safelist: cueSafelist,
    plugins: [],
    borderRadius: cueBorderRadius,
    padding: cuePadding,
    boxShadowColor: defaultTheme.boxShadowColor,
    boxShadow: defaultTheme.boxShadow,
    dropShadow: defaultTheme.dropShadow,
    borderColor: defaultTheme.borderColor,
    cursor: defaultTheme.cursor,
    borderWidth: defaultTheme.borderWidth,
    colors: {
      ...cueColors,
      transparent: 'var(--transparent)',
      white: 'var(--white)',
      black: {
        DEFAULT: 'var(--black)',
        highlight: 'var(--black-highlight)'
      },
      primary: {
        DEFAULT: 'var(--primary)',
        50: 'var(--primary-50)',
        75: 'var(--primary-75)',
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)'
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        50: 'var(--secondary-50)',
        75: 'var(--secondary-75)',
        100: 'var(--secondary-100)',
        200: 'var(--secondary-200)',
        300: 'var(--secondary-300)',
        400: 'var(--secondary-400)',
        500: 'var(--secondary-500)',
        600: 'var(--secondary-600)',
        700: 'var(--secondary-700)',
        800: 'var(--secondary-800)',
        900: 'var(--secondary-900)'
      },
      success: {
        DEFAULT: 'var(--success)',
        50: 'var(--success-50)',
        75: 'var(--success-75)',
        100: 'var(--success-100)',
        200: 'var(--success-200)',
        300: 'var(--success-300)',
        400: 'var(--success-400)',
        500: 'var(--success-500)',
        600: 'var(--success-600)',
        700: 'var(--success-700)',
        800: 'var(--success-800)',
        900: 'var(--success-900)'
      },
      warning: {
        DEFAULT: 'var(--warning)',
        50: 'var(--warning-50)',
        75: 'var(--warning-75)',
        100: 'var(--warning-100)',
        200: 'var(--warning-200)',
        300: 'var(--warning-300)',
        400: 'var(--warning-400)',
        500: 'var(--warning-500)',
        600: 'var(--warning-600)',
        700: 'var(--warning-700)',
        800: 'var(--warning-800)',
        900: 'var(--warning-900)'
      },
      error: {
        DEFAULT: 'var(--error)',
        50: 'var(--error-50)',
        75: 'var(--error-75)',
        100: 'var(--error-100)',
        200: 'var(--error-200)',
        300: 'var(--error-300)',
        400: 'var(--error-400)',
        500: 'var(--error-500)',
        600: 'var(--error-600)',
        700: 'var(--error-700)',
        800: 'var(--error-800)',
        900: 'var(--error-900)'
      },
      grey: {
        DEFAULT: 'var(--grey)',
        50: 'var(--grey-50)',
        75: 'var(--grey-75)',
        100: 'var(--grey-100)',
        200: 'var(--grey-200)',
        300: 'var(--grey-300)',
        400: 'var(--grey-400)',
        500: 'var(--grey-500)',
        600: 'var(--grey-600)',
        700: 'var(--grey-700)',
        800: 'var(--grey-800)',
        900: 'var(--grey-900)'
      },
      brown: {
        DEFAULT: 'var(--brown)',
        50: 'var(--brown-50)',
        75: 'var(--brown-75)',
        100: 'var(--brown-100)',
        200: 'var(--brown-200)',
        300: 'var(--brown-300)',
        400: 'var(--brown-400)',
        500: 'var(--brown-500)',
        600: 'var(--brown-600)',
        700: 'var(--brown-700)',
        800: 'var(--brown-800)',
        900: 'var(--brown-900)'
      }
    },
    fontFamily: {
      inter: ['Inter Variable'],
      ...cueFontFamily,
    },
    screens: {
      sm: '320px',
      md: '600px',
      lg: '1136px'
    },
    fontSize: {
      ...cueFontSize,
      inherit: 'inherit',
      large: [
        '3.5rem',
        {
          lineHeight: '100%',
          letterSpacing: '-4%'
        }
      ],
      small: [
        '3rem',
        {
          lineHeight: '100%',
          letterSpacing: '-4%'
        }
      ],
      'heading-1': [
        '2.5rem',
        {
          lineHeight: '100%',
          letterSpacing: '-4%'
        }
      ],
      'heading-2': [
        '2.25rem',
        {
          lineHeight: '100%',
          letterSpacing: '-4%'
        }
      ],
      'heading-3': [
        '2rem',
        {
          lineHeight: '120%',
          letterSpacing: '-2%'
        }
      ],
      'heading-4': [
        '1.75rem',
        {
          lineHeight: '120%',
          letterSpacing: '-2%'
        }
      ],
      'heading-5': [
        '1.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '-2%'
        }
      ],
      'heading-6': [
        '1.25rem',
        {
          lineHeight: '120%',
          letterSpacing: '-2%'
        }
      ],
      'paragraph-large': [
        '1.125rem',
        {
          lineHeight: '145%',
          letterSpacing: '0%'
        }
      ],
      'paragraph-medium': [
        '1rem',
        {
          lineHeight: '145%',
          letterSpacing: '0%'
        }
      ],
      'paragraph-small': [
        '0.875rem',
        {
          lineHeight: '145%',
          letterSpacing: '0%'
        }
      ],
      'paragraph-xsmall': [
        '0.75rem',
        {
          lineHeight: '145%',
          letterSpacing: '0%'
        }
      ],
      'caption-large': [
        '0.875rem',
        { lineHeight: '120%', letterSpacing: '12%' }
      ],
      'caption-small': [
        '0.75rem',
        { lineHeight: '120%', letterSpacing: '12%' }
      ],
      'caption-xsmall': [
        '0.625rem',
        { lineHeight: '120%', letterSpacing: '16%' }
      ]
    },
  },

  safelist: cueSafelist,
  corePlugins: {
    preflight: true,
  }
};
export default config;
