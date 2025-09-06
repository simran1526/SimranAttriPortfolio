import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				orbitron: ['Orbitron', 'monospace'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Legacy cyber colors for compatibility
				'cyber-teal': 'hsl(var(--cyber-teal))',
				'cyber-purple': 'hsl(var(--cyber-purple))',
				'cyber-blue': 'hsl(var(--cyber-blue))',
				'cyber-dark': 'hsl(var(--cyber-dark))',
				// New hacker theme colors
				'matrix-green': 'hsl(var(--matrix-green))',
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'electric-blue': 'hsl(var(--electric-blue))',
				'danger-red': 'hsl(var(--danger-red))',
				'warning-orange': 'hsl(var(--warning-orange))',
				'hacker-white': 'hsl(var(--hacker-white))',
			},
			backgroundImage: {
				'gradient-cyber': 'var(--gradient-cyber)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-matrix': 'var(--gradient-matrix)',
			},
			boxShadow: {
				'cyber': 'var(--shadow-cyber)',
				'cyber-purple': 'var(--shadow-purple)',
				'cyber-card': 'var(--shadow-card)',
				'neon': 'var(--shadow-neon)',
				'red': 'var(--shadow-red)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(120 100% 50% / 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 50px hsl(120 100% 50% / 0.8), 0 0 80px hsl(180 100% 50% / 0.4)',
						transform: 'scale(1.05)'
					}
				},
				'matrix-rain': {
					'0%': { 
						transform: 'translateY(-100vh)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'hologram': {
					'0%, 100%': { 
						opacity: '0.8',
						transform: 'translateZ(0) rotateX(0deg)'
					},
					'50%': { 
						opacity: '0.9',
						transform: 'translateZ(10px) rotateX(2deg)'
					}
				},
				'data-stream': {
					'0%': { 
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'50%': { opacity: '1' },
					'100%': { 
						transform: 'translateX(100%)',
						opacity: '0'
					}
				},
				'circuit-pulse': {
					'0%, 100%': { 
						background: 'linear-gradient(90deg, transparent 0%, hsl(120 100% 50% / 0.1) 50%, transparent 100%)'
					},
					'50%': { 
						background: 'linear-gradient(90deg, transparent 0%, hsl(180 100% 50% / 0.3) 50%, transparent 100%)'
					}
				},
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'skill-bar': {
					'0%': { width: '0%' },
					'100%': { width: 'var(--skill-width)' }
				},
				'neon-flicker': {
					'0%, 100%': { 
						opacity: '1',
						textShadow: '0 0 10px currentColor, 0 0 20px currentColor'
					},
					'2%': { 
						opacity: '0.9',
						textShadow: '0 0 5px currentColor'
					},
					'8%': { 
						opacity: '1',
						textShadow: '0 0 15px currentColor, 0 0 25px currentColor'
					}
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 4s linear infinite',
				'hologram': 'hologram 3s ease-in-out infinite',
				'data-stream': 'data-stream 3s linear infinite',
				'circuit-pulse': 'circuit-pulse 2s ease-in-out infinite',
				'typewriter': 'typewriter 3s steps(40, end)',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'skill-bar': 'skill-bar 1.5s ease-out',
				'neon-flicker': 'neon-flicker 2s infinite',
				'glitch': 'glitch 0.3s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
