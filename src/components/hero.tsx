import { Button } from "./ui/button";
import GithubLogo from "../assets/github.svg?react";
import LinkedInLogo from "../assets/linkedin.svg?react";
import Bubble from "./bubble";

export default function Hero() {
	return (
		<div className="md:grid md:grid-cols-[1.5fr_1fr] flex flex-col pl-4 pr-4 md:pl-10 md:pr-10 pt-14 lg:pt-0 relative md:h-screen">
			{/*Content*/}
			<div className="md:text-left flex flex-col justify-center z-10">
				<h1 className="font-bold md:text-6xl mb-6">
					Hi, I'm <br></br> Miguel Gonzalo
				</h1>
				<h2 className="md:text-3xl mb-7">
					I bring ideas to life by writing clean, maintainable code and building interfaces that are both engaging and
					easy to use.
				</h2>
				<div className="flex justify-start">
					<Button
						asChild
						className="w-auto inline-flex mb-12 md:px-12 md:py-6 md:text-lg text-white hover:text-white text-center"
					>
						<a href="#info">Learn More About Me</a>
					</Button>
				</div>
				<div className="flex gap-8 justify-center md:justify-start mb-12 md:mb-0">
					<a href="https://github.com/mgz11">
						<GithubLogo className="w-14 h-14 text-darkPurple dark:text-lightPurple cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hoverDarkPurple  dark:hover:text-hoverLightPurple hover:brightness-85" />
					</a>
					<a href="https://www.linkedin.com/in/miguel-gonzalo-934b3b210/">
						<LinkedInLogo className="w-14 h-14 text-darkPurple dark:text-lightPurple cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:text-hoverDarkPurple  dark:hover:text-hoverLightPurple hover:brightness-85" />
					</a>
				</div>
			</div>
			<div className="relative h-[300px] md:h-full overflow-hidden z-0">
				<Bubble />
			</div>
		</div>
	);
}
