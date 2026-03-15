/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0b0b0b',
          panel1: '#111111',
          panel2: '#161616',
          panel3: '#1b1b1b',
        },
        accent: {
          primary: '#ff6a3d',
          secondary: '#9ca3af',
        },
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.5rem',
      },
    },
  },
  plugins: [],
}

