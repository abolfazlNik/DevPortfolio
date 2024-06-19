import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'custom-white': '#FCFDFD',
                'custom-gray-light': '#9EA2A4',
                'custom-gray-dark': '#606161',
                'custom-black': '#060606',
            },
            typography: {
                blur: {
                    css: {
                        '@apply bg-blur': {},
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
export default config
