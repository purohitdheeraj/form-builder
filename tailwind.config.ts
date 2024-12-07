import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				gray: {
					'00': 'hsl(var(--gray-00))',
					'50': 'hsl(var(--gray-50))',
					'100': 'hsl(var(--gray-100))',
					'200': 'hsl(var(--gray-200))',
					'400': 'hsl(var(--gray-400))',
					'1k': 'hsl(var(--text-gray-1k))',
				},
				green: {
					'500': 'hsl(var(--green-500))',
					'300': 'hsl(var(--bg-green-300))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
			boxShadow: {
				'xl': '0px 24px 24px -12px hsla(0, 0%, 0%, 0.03)',
				'lg': '0px 12px 12px -6px hsla(0, 0%, 0%, 0.03)',
				'md': '0px 6px 6px -3px hsla(0, 0%, 0%, 0.03)',
				'sm': '0px 3px 3px -1.5px hsla(0, 0%, 0%, 0.03)',
				'xs': '0px 1px 1px -0.5px hsla(0, 0%, 0%, 0.03)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius))',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
