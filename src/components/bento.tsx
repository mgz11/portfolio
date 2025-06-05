import { useState, useEffect } from "react";
import content from "../content.json";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const project1_images = import.meta.glob("../assets/spotify-stats-screenshots/*.webp", { eager: true });
const project2_images = import.meta.glob("../assets/coffee-site-screenshots/*.webp", { eager: true });

export default function BentoGrid() {
	const [api1, setApi1] = useState<CarouselApi>();
	const [api2, setApi2] = useState<CarouselApi>();
	const [current1, setCurrent1] = useState(0);
	const [current2, setCurrent2] = useState(0);

	useEffect(() => {
		if (!api1) {
			return;
		}

		setCurrent1(api1.selectedScrollSnap());

		api1.on("select", () => {
			setCurrent1(api1.selectedScrollSnap());
		});
	}, [api1]);

	useEffect(() => {
		if (!api2) {
			return;
		}

		setCurrent2(api2.selectedScrollSnap());

		api2.on("select", () => {
			setCurrent2(api2.selectedScrollSnap());
		});
	}, [api2]);

	return (
		<main className="xl:grid  xl:grid-cols-[1fr_3fr_1.5fr] gap-4 items-stretch p-8 text-sm">
			{/*First column*/}
			<div className="flex flex-grow flex-col gap-4 sm:gap-0 mb-4 sm:mb-0">
				<div className="sm:mb-4 border dark:border-white/[0.12] dark:bg-white/[0.08] dark:shadow-glass border-white/[0.3] bg-white/[0.6] shadow-frosted rounded-xl h-fit ">
					<h2 className="m-3 font-semibold text-base">Programming Languages</h2>
					<ul>
						{content.languages.map((language, index) => (
							<li key={index} className="mb-4">
								{language}
							</li>
						))}
					</ul>
				</div>
				<div className="sm:mb-4 border dark:border-white/[0.12] dark:bg-white/[0.08] dark:shadow-glass border-white/[0.3] bg-white/[0.6] shadow-frosted rounded-xl h-fit">
					<h2 className="m-4 font-semibold text-base">Frameworks</h2>
					<ul>
						{content.frameworks.map((framework, index) => (
							<li key={index} className="mb-4">
								{framework}
							</li>
						))}
					</ul>
				</div>
				<div className="sm:mb-4 border dark:border-white/[0.12] rounded-xl dark:bg-white/[0.08] dark:shadow-glass border-white/[0.3] bg-white/[0.6] shadow-frosted flex flex-grow flex-col">
					<h2 className="m-4 font-semibold text-base">Databases / Tools</h2>
					<ul>
						{content.tools.map((tool, index) => (
							<li key={index} className="mb-4">
								{tool}
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* Second Column */}
			<div className="flex flex-col h-full">
				<div className="sm:grid sm:grid-cols-[1.5fr_1fr] sm:gap-4 sm:items-stretch">
					<div className="mb-4 border dark:border-white/[0.12] rounded-xl p-4 w-full dark:bg-white/[0.08] dark:shadow-glass flex flex-col items-center text-left border-white/[0.3] bg-white/[0.6] shadow-frosted">
						<h2 className="mb-4 font-semibold text-base">Experience</h2>
						<ul>
							{content.experience.map((job, index) => (
								<li key={job.company} className={index !== content.experience.length - 1 ? "mb-4" : ""}>
									<div>
										<h3>
											{job.job_title}, {job.company}
										</h3>
										<p>{job.location}</p>
										<p>{job.timeline}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="mb-4 border dark:border-white/[0.12] rounded-xl p-4 w-full dark:bg-white/[0.08] dark:shadow-glass border-white/[0.3] bg-white/[0.6] shadow-frosted">
						<h2 className="mb-4 font-semibold text-base">About</h2>
						<div className="text-left">
							<p>{content.about}</p>
						</div>
					</div>
				</div>
				<div className="mb-4 border dark:border-white/[0.12] rounded-xl p-4 flex flex-grow flex-col dark:bg-white/[0.08] dark:shadow-glass border-white/[0.3] bg-white/[0.6] shadow-frosted">
					<h2 className="mb-4 font-semibold text-base">{content.projects[0].title}</h2>
					<div className="flex flex-col justify-center items-center xl:grid xl:grid-cols-2 sm:gap-6">
						{/* Image carousel */}
						<div className="flex justify-center max-w-sm">
							<Carousel className="w-full max-w-sm" setApi={setApi1}>
								<CarouselContent>
									{content.projects[0].images.map((imgName, index) => {
										const imageKey = Object.keys(project1_images).find((key) =>
											key.endsWith(`/spotify-stats-screenshots/${imgName}`)
										);

										const imgSrc = imageKey ? (project1_images[imageKey] as { default: string }).default : null;

										return (
											<CarouselItem key={imgName}>
												<div className="p-4">
													<div className="aspect-auto relative w-full overflow-hidden rounded-xl border bg-white shadow">
														{imgSrc ? (
															<img src={imgSrc} alt={`Screenshot ${index + 1}`} className="w-full h-fit object-fit" />
														) : (
															<span className="text-red-500">Image not found</span>
														)}
													</div>
												</div>
											</CarouselItem>
										);
									})}
								</CarouselContent>
								<div className="text-left text-sm text-muted-foreground flex gap-3 justify-center mb-3 items-center">
									<ArrowLeft
										onClick={() => api1?.scrollTo(current1 - 1)}
										className={`cursor-pointer transition active:scale-[0.85] duration-150 ease-in-out text-foreground ${
											current1 === 0 ? "opacity-30 pointer-events-none" : ""
										}`}
									/>
									{content.projects[0].images.map((_, i) => (
										<button
											key={i}
											onClick={() => api1?.scrollTo(i)}
											className={`focus:outline-none focus:ring-0 cursor-pointer block p-0 m-0 border-none w-2 h-2 rounded-full transition-transform ${
												current1 === i ? "bg-black dark:bg-white scale-110" : "bg-muted-foreground opacity-50"
											}`}
											style={{
												appearance: "none",
											}}
											aria-label={`Go to slide ${i + 1}`}
										/>
									))}
									<ArrowRight
										onClick={() => api1?.scrollTo(current1 + 1)}
										className={`cursor-pointer transition active:scale-[0.85] duration-150 ease-in-out text-foreground ${
											current1 === content.projects[0].images.length - 1 ? "opacity-30 pointer-events-none" : ""
										}`}
									/>
								</div>
								<div className="flex justify-center gap-4"></div>
							</Carousel>
						</div>
						{/* Description */}
						<div className="text-left flex flex-col items-center xl:items-start sm:justify-center gap-4">
							<p>{content.projects[0].description}</p>
							<Button asChild className="md:pr-16 md:pl-12 md:pt-6 md:pb-6 text-white hover:text-white text-center">
								<a href={content.projects[0].link} target="_blank" rel="noopener noreferrer">
									View on Github
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
			{/* Third Column */}
			<div className="mb-4 border rounded-xl dark:border-white/[0.12] p-4 dark:bg-white/[0.08] dark:shadow-glass border-white/[0.3] bg-white/[0.6] shadow-frosted">
				<div>
					<div className="flex flex-col justify-center items-center sm:gap-4">
						<h2 className="mb-4 font-semibold text-base">{content.projects[1].title}</h2>
						{/* Image carousel */}
						<div className="w-full max-w-sm">
							<Carousel className="w-full max-w-sm" setApi={setApi2}>
								<CarouselContent>
									{content.projects[1].images.map((imgName, index) => {
										const imageKey = Object.keys(project2_images).find((key) =>
											key.endsWith(`/coffee-site-screenshots/${imgName}`)
										);

										const imgSrc = imageKey ? (project2_images[imageKey] as { default: string }).default : null;

										return (
											<CarouselItem key={imgName}>
												<div className="p-4">
													<div className="aspect-auto relative w-full overflow-hidden rounded-xl border bg-white shadow">
														{imgSrc ? (
															<img src={imgSrc} alt={`Screenshot ${index + 1}`} className="w-full h-fit object-fit" />
														) : (
															<span className="text-red-500">Image not found</span>
														)}
													</div>
												</div>
											</CarouselItem>
										);
									})}
								</CarouselContent>
								<div className="text-left text-sm text-muted-foreground flex gap-3 justify-center mb-3 items-center">
									<ArrowLeft
										onClick={() => api2?.scrollTo(current2 - 1)}
										className={`cursor-pointer transition active:scale-[0.85] duration-150 ease-in-out text-foreground ${
											current2 === 0 ? "opacity-30 pointer-events-none" : ""
										}`}
									/>
									{content.projects[1].images.map((_, i) => (
										<button
											key={i}
											onClick={() => api2?.scrollTo(i)}
											className={`focus:outline-none focus:ring-0 cursor-pointer block p-0 m-0 border-none w-2 h-2 rounded-full transition-transform ${
												current2 === i ? "bg-black dark:bg-white scale-110" : "bg-muted-foreground opacity-50"
											}`}
											style={{
												appearance: "none",
											}}
											aria-label={`Go to slide ${i + 1}`}
										/>
									))}
									<ArrowRight
										onClick={() => api2?.scrollTo(current2 + 1)}
										className={`cursor-pointer transition active:scale-[0.85] duration-150 ease-in-out text-foreground ${
											current2 === content.projects[1].images.length - 1 ? "opacity-30 pointer-events-none" : ""
										}`}
									/>
								</div>
							</Carousel>
						</div>
						{/* Description */}
						<div className="text-left flex flex-col items-center xl:items-start sm:justify-center gap-4">
							<p>{content.projects[1].description}</p>
							<Button asChild className="md:pr-16 md:pl-12 md:pt-6 md:pb-6 text-white hover:text-white text-center">
								<a href={content.projects[1].link} target="_blank" rel="noopener noreferrer">
									View on Github
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
