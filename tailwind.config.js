/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			scrollBehavior: ["responsive"],
			boxShadow: {
				glass: "2px 2px 10px rgba(0, 0, 0, 0.3)",
				frosted: "4px 10px 20px rgba(0, 0, 0, 0.1)",
			},
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
			backgroundImage: {
				"dark-gradient":
					"radial-gradient(circle, hsla(193, 21%, 40%, 1) 0%, hsla(202, 24%, 27%, 1) 70%, hsla(235, 17%, 25%, 1) 96%)",
				"light-gradient": "radial-gradient(circle, hsla(215, 15%, 85%, 1) 25%, hsla(137, 20%, 64%, 1) 100%)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				lightPurple: "#A29BFE",
				darkPurple: "#6C4DFF",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
	darkMode: "class",
};
