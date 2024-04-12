import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},

		extend: {
			colors: {
				jc: {
					bg: "#F5F8FC",
					text1: "#030303",
					text2: "#4F4F4F",
					text3: "#9A9A9A",
					text4: "#747678",
					gray0: "#F0F3F7",
					gray7: "#8C8C8C",
					gray8: "#808080",
					blue: "#048AED",
					red: "#D97C7C",
				},
				gray: {
					DEFAULT: colors.gray[500]
				},
				blue: {
					DEFAULT: colors.blue[500],
				},
				orange: {
					DEFAULT: colors.orange[500],
				},
				red: {
					DEFAULT: colors.red[500],
				},
			},
			fontFamily: {
				sans: ['Verdana', 'sans-serif'],
				serif: ['Times New Roman', 'serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			width: {
				jc_topbar: "230px",
			},
			height: {
				jc_topbar: "56px",
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-start': {
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				},
				'.flex-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				},
				'.flex-between': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				},
				'.flex-end': {
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
				},
				'.grid-auto-300': {
					gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr));',
				},
			})
		}),
	]
} satisfies Config

export default config
