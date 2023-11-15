/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kyc: {
          catYellow: "#fdf1db",
          catBlue: "#5cb6e3",
          primary: '#E74E43',
          secondary: '#E6E5E5',
          'primary-dark': '#0D0C0C',
          'secondary-dark': '#403F3F',
          'secondary-grey': '#9A9898',
          grey: '#AFAFAF',
          dark: '#1A1A1A',
          'border-dark': '#201E1E'
        },
        primary: {
          50: '#F5EEFF',
          100: '#E7DEFF',
          200: '#CCBDFF',
          300: '#B29DFF',
          400: '#987BFF',
          500: '#7F56FF',
          600: '#662EF3',
          700: '#4D00D2',
          800: '#00188D',
          900: '#1F0060',
          950: '#2C2165',
          DEFAULT: '#2C2165',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#3EA824',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
  plugins: [],
}
