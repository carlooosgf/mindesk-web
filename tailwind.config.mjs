/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Inter para textos largos y máxima legibilidad
        sans: ['Inter', 'sans-serif'],
        // Geist para titulares con personalidad y autoridad
        headings: ['"Geist Sans"', 'sans-serif'], 
      },
      colors: {
        brand: {
          bg: '#f8fafc',      // Fondo super limpio
          text: '#0f172a',    // Texto oscuro, casi pizarra (Accesible)
          primary: '#10b981', // Verde esmeralda (Tu color de acción)
          accent: '#b788f4',  // Lavanda/Púrpura del nuevo logo
        }
      }
    },
  },
  plugins: [],
}