module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#8257e5',
        'brand-hover': '996dff',
        'text-on-brand-color': '#ffffff',
        'surface-primary': '#ffffff',
        'surface-secondary': '#f4f4f5',
        'surface-secondary-hover': '#e4e4e7',
        stroke: '#d4d4d8',
        tooltip: '#27272a',
        'text-primary': '#27272a',
        'text-secondary': '#71717a',
        'text-on-tooltip': '#f4f4f5',
        background: '#ffffff',
        dark: {
          'surface-primary': '#18181b',
          'surface-secondary': '#27272a',
          'surface-secondary-hover': '#3f3f46',
          stroke: '#52525b',
          tooltip: '#f4f4f5',
          'text-primary': '#f4f4f5',
          'text-secondary': '#a1a1aa',
          'text-on-tooltip': '#27272a',
          background: '#09090a',
        },
      },
      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
