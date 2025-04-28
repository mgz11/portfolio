import "./App.css";
import Hero from "./components/hero";
import BentoGrid from "./components/bento";
import Mode from "./components/mode";
function App() {
	return (
		<div className="relative bg-light-gradient dark:bg-dark-gradient text-black dark:text-white min-h-screen transition-colors duration-300 font-raleway">
			<div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
				<Mode />
			</div>
			<Hero />
			<div id="info">
				<BentoGrid />
			</div>
		</div>
	);
}

export default App;
