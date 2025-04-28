import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function Mode() {
	const [darkMode, setDarkMode] = useState(() => {
		// Optional: check localStorage or system preference
		return localStorage.getItem("theme") === "dark";
	});

	useEffect(() => {
		const root = document.body;
		if (darkMode) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	const toggleDarkMode = () => setDarkMode((prev) => !prev);

	const iconClass =
		"md:w-8 md:h-8 cursor-pointer transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-110";

	return darkMode ? (
		<Moon className={iconClass} onClick={toggleDarkMode} />
	) : (
		<Sun className={iconClass} onClick={toggleDarkMode} />
	);
}
