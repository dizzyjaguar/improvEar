/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cornflower-lilac': {
          50: 'oklch(97.05% 0.01 17.38)',
          100: 'oklch(93.43% 0.03 17.76)',
          200: 'oklch(88.13% 0.06 18.42)',
          300: 'oklch(82.08% 0.10 19.45)',
          400: 'oklch(71.02% 0.18 22.71)',
          500: 'oklch(64.09% 0.22 25.96)',
          600: 'oklch(58.43% 0.22 27.83)',
          700: 'oklch(51.19% 0.20 27.99)',
          800: 'oklch(44.83% 0.17 27.43)',
          900: 'oklch(39.84% 0.14 26.27)',
          950: 'oklch(25.95% 0.09 26.67)',
        },
        calico: {
          50: 'oklch(97.95% 0.01 87.47)',
          100: 'oklch(95.05% 0.02 85.94)',
          200: 'oklch(89.40% 0.04 81.70)',
          300: 'oklch(80.47% 0.07 77.29)',
          400: 'oklch(73.54% 0.09 70.82)',
          500: 'oklch(67.06% 0.10 63.93)',
          600: 'oklch(61.47% 0.10 56.27)',
          700: 'oklch(53.01% 0.09 50.40)',
          800: 'oklch(45.80% 0.07 46.45)',
          900: 'oklch(40.35% 0.06 49.05)',
          950: 'oklch(26.51% 0.04 45.07)',
        },
        envy: {
          50: 'oklch(97.63% 0.00 157.18)',
          100: 'oklch(92.38% 0.01 158.23)',
          200: 'oklch(84.51% 0.03 155.27)',
          300: 'oklch(72.40% 0.05 156.85)',
          400: 'oklch(63.23% 0.06 157.47)',
          500: 'oklch(54.25% 0.06 157.44)',
          600: 'oklch(46.11% 0.05 158.47)',
          700: 'oklch(40.26% 0.04 159.52)',
          800: 'oklch(35.56% 0.03 161.44)',
          900: 'oklch(32.45% 0.02 161.38)',
          950: 'oklch(22.65% 0.02 160.47)',
        },
        blackcurrant: {
          50: 'oklch(97.13% 0.01 286.30)',
          100: 'oklch(93.19% 0.01 290.30)',
          200: 'oklch(88.11% 0.03 293.11)',
          300: 'oklch(79.78% 0.04 290.00)',
          400: 'oklch(69.62% 0.06 289.83)',
          500: 'oklch(61.98% 0.08 292.15)',
          600: 'oklch(56.53% 0.09 295.28)',
          700: 'oklch(52.37% 0.09 296.68)',
          800: 'oklch(46.67% 0.07 298.62)',
          900: 'oklch(41.02% 0.05 298.34)',
          950: 'oklch(34.52% 0.04 299.73)',
        },
        alabaster: {
          50: 'oklch(97.91% 0.00 NaN)',
          100: 'oklch(95.21% 0.00 NaN)',
          200: 'oklch(89.45% 0.00 NaN)',
          300: 'oklch(79.84% 0.00 NaN)',
          400: 'oklch(67.97% 0.00 NaN)',
          500: 'oklch(58.63% 0.00 NaN)',
          600: 'oklch(50.68% 0.00 NaN)',
          700: 'oklch(43.86% 0.00 NaN)',
          800: 'oklch(39.42% 0.00 NaN)',
          900: 'oklch(36.00% 0.00 NaN)',
          950: 'oklch(28.09% 0.00 NaN)',
        },
        'blaze-orange': {
          50: 'oklch(98.16% 0.02 79.35)',
          100: 'oklch(95.59% 0.04 78.59)',
          200: 'oklch(90.77% 0.08 74.92)',
          300: 'oklch(84.55% 0.12 69.97)',
          400: 'oklch(77.06% 0.16 58.51)',
          500: 'oklch(72.19% 0.19 49.32)',
          600: 'oklch(66.74% 0.20 42.24)',
          700: 'oklch(56.63% 0.18 39.63)',
          800: 'oklch(47.90% 0.15 38.48)',
          900: 'oklch(41.62% 0.12 39.83)',
          950: 'oklch(27.11% 0.08 38.43)',
        },
      },
    },
  },
  plugins: [],
}
