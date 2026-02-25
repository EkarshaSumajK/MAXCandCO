/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2997ff',
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: '#1c1c1e',
					foreground: '#f5f5f7',
				},
				accent: {
					DEFAULT: '#bf5af2',
					foreground: '#ffffff',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				apple: {
					black: 'rgb(var(--apple-black) / <alpha-value>)',
					dark: 'rgb(var(--apple-dark) / <alpha-value>)',
					gray: 'rgb(var(--apple-gray) / <alpha-value>)',
					gray2: 'rgb(var(--apple-gray2) / <alpha-value>)',
					gray3: 'rgb(var(--apple-gray3) / <alpha-value>)',
					white: 'rgb(var(--apple-white) / <alpha-value>)',
					grayText: 'rgb(var(--apple-grayText) / <alpha-value>)',
					blue: 'rgb(var(--apple-blue) / <alpha-value>)',
					purple: 'rgb(var(--apple-purple) / <alpha-value>)',
					pink: 'rgb(var(--apple-pink) / <alpha-value>)',
					green: 'rgb(var(--apple-green) / <alpha-value>)',
					yellow: 'rgb(var(--apple-yellow) / <alpha-value>)',
					orange: 'rgb(var(--apple-orange) / <alpha-value>)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'glow': {
					'0%, 100%': { opacity: 0.5 },
					'50%': { opacity: 0.8 },
				},
				'gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'slide-up': {
					'0%': { opacity: 0, transform: 'translateY(30px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				'scale-in': {
					'0%': { opacity: 0, transform: 'scale(0.9)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'gradient': 'gradient 8s ease infinite',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.4s ease-out forwards',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
