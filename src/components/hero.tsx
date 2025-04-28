import { Button } from "./ui/button";
import GithubLogo from "../assets/github.svg?react";
import LinkedInLogo from "../assets/linkedin.svg?react";

export default function Hero() {
	return (
		<div className="md:grid md:grid-cols-[1.5fr_1fr] pl-8 pr-8 md:pl-12 md:pr-12 h-screen items-center pt-14 lg:pt-0">
			{/*Content*/}
			<div className="md:text-left">
				<h1 className="font-bold md:text-6xl mb-6">
					Hi, I'm <br></br> Miguel Gonzalo
				</h1>
				<h2 className="md:text-3xl mb-7">
					I bring ideas to life by writing clean, maintainable code and building interfaces that are both engaging and
					easy to use.
				</h2>
				<a href="#info">
					<Button className="mb-12 md:pr-16 md:pl-12 md:pt-6 md:pb-6 md:text-lg text-white text-center">
						Learn More About Me
					</Button>
				</a>
				<div className="flex gap-8 justify-center md:justify-start mb-12 md:mb-0">
					<a href="https://github.com/mgz11">
						<GithubLogo className="w-14 h-14 text-darkPurple dark:text-lightPurple" />
					</a>
					<a href="https://www.linkedin.com/in/miguel-gonzalo-934b3b210/">
						<LinkedInLogo className="w-14 h-14 text-darkPurple dark:text-lightPurple" />
					</a>
				</div>
			</div>
			{/* PLACEHOLDER FOR R3F ANIMATION */}
			<div>R3F ANIMATION HERE</div>
		</div>
	);
}
