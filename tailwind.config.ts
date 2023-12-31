import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./*/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'], theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, colors: {
        // Light Theme
        light: {
          'primary': '#526600',
          'on-primary': '#ffffff',
          'primary-container': '#caf234',
          'secondary': '#5b6146',
          'on-secondary': '#ffffff',
          'secondary-container': '#e0e6c4',
          'tertiary': '#3a665e',
          'on-tertiary': '#ffffff',
          'tertiary-container': '#bdece1',
          'error': '#ba1a1a',
          'error-container': '#ffdad6',
          'on-error': '#ffffff',
          'on-error-container': '#410002',
          'background': '#fefcf4',
          'on-background': '#1b1c17',
          'surface': '#fefcf4',
          'surface-container': '#F0EEE6',
          'surface-container-low': '#F6F4EB',
          'on-surface': '#1b1c17',
          'surface-variant': '#e3e4d3',
          'on-surface-variant': '#46483c',
          'outline': '#77786b',
          'inverse-on-surface': '#f3f1e9',
          'inverse-surface': '#30312b',
          'inverse-primary': '#afd506',
          'shadow': '#000000',
          'surface-tint': '#526600',
          'outline-variant': '#c7c8b8',
          'scrim': '#000000',
        },
        // Dark Theme
        // dark: {
        //     'primary': '#000000', 'on-primary': '#ffffff', 'primary-container': '#333333', 'secondary': '#222222', 'on-secondary': '#ffffff', 'secondary-container': '#444444', 'tertiary': '#111111', 'on-tertiary': '#ffffff', 'tertiary-container': '#555555', 'error': '#ba1a1a', 'error-container': '#ffdad6', 'on-error': '#ffffff', 'on-error-container': '#410002', 'background': '#121212', 'on-background': '#ffffff', 'surface': '#1e1e1e', 'on-surface': '#ffffff', 'surface-variant': '#333333', 'on-surface-variant': '#cccccc', 'outline': '#444444', 'inverse-on-surface': '#222222', 'inverse-surface': '#111111', 'inverse-primary': '#afd506', 'shadow': '#000000', 'surface-tint': '#000000', 'outline-variant': '#555555', 'scrim': '#000000',
        // },
      },
    },
  }, plugins: [],
};

export default config;