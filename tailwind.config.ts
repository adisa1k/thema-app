import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            thema: {
                t: '#5B8150',
                h: '#96BD89',
                e: '#AED2AD',
                m: '#BBD3BB',
                a: '#CFE3D6',
            }

        },
      fontFamily: {
        logo: ['"Montserrat-Alt1 ExtraBold"', 'sans-serif'], 
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config