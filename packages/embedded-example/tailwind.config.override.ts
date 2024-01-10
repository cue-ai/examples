import type { Config } from 'tailwindcss'
import theme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

export const cueDefaultBorder = {
    none: '0px',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
};

export const cueBorderRadius = {
    dashboardCard: "var(--cue-dashboard-card-radius)",
    ...cueDefaultBorder,
};

export const cueBorderWidth = {
    DEFAULT: '1px',
    0: '0px',
    2: '2px',
    4: '4px',
    8: '8px',
};

export const cueBoxShadow = {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
};

// @ts-ignore
export const cueBoxShadowColor = ({ theme }) => theme('colors');

export const cueDropShadow =  {
    sm: '0 1px 1px rgb(0 0 0 / 0.05)',
    DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
    md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
    lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
    xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
    '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
    none: '0 0 #0000',
};

// @ts-ignore
export const cueBorderColor = ({ theme }) => ({
    ...theme('colors'),
    DEFAULT: theme('colors.gray.200', 'currentColor'),
});

export const cueCursor= {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    help: 'help',
    'not-allowed': 'not-allowed',
    none: 'none',
    'context-menu': 'context-menu',
    progress: 'progress',
    cell: 'cell',
    crosshair: 'crosshair',
    'vertical-text': 'vertical-text',
    alias: 'alias',
    copy: 'copy',
    'no-drop': 'no-drop',
    grab: 'grab',
    grabbing: 'grabbing',
    'all-scroll': 'all-scroll',
    'col-resize': 'col-resize',
    'row-resize': 'row-resize',
    'n-resize': 'n-resize',
    'e-resize': 'e-resize',
    's-resize': 's-resize',
    'w-resize': 'w-resize',
    'ne-resize': 'ne-resize',
    'nw-resize': 'nw-resize',
    'se-resize': 'se-resize',
    'sw-resize': 'sw-resize',
    'ew-resize': 'ew-resize',
    'ns-resize': 'ns-resize',
    'nesw-resize': 'nesw-resize',
    'nwse-resize': 'nwse-resize',
    'zoom-in': 'zoom-in',
    'zoom-out': 'zoom-out',
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

export const cueDefaultSpacing ={
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
};

export const cuePadding = {
    dashboardCard: "var(--cue-dashboard-card-padding)",
    ...cueDefaultSpacing,
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
        safelist: cueSafelist,
        plugins: [],
        borderRadius: cueBorderRadius,
        padding: cuePadding,
        boxShadowColor: cueBoxShadowColor,
        boxShadow: cueBoxShadow,
        dropShadow: cueDropShadow,
        borderColor: cueBorderColor,
        cursor: cueCursor,
        borderWidth: cueBorderWidth,
        fontFamily: cueFontFamily,
        fontSize: cueFontSize,
    },
    safelist: cueSafelist,
};
export default config;
