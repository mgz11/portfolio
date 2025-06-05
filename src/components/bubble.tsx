import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

const thoughts = [
	"☕️ Enlightened by espresso ",
	"📍 Probably designing somewhere right now",
	"🧩 Focused on frontend, always on backend",
	"⛭ Organized chaos ... by intention",
	"💡 Always looking to improve and learn",
];

type BubbleState = {
	x: number;
	y: number;
	vx: number;
	vy: number;
};

const Bubble = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [bubbles, setBubbles] = useState<BubbleState[]>(
		thoughts.map(() => ({
			x: Math.random() * 200,
			y: Math.random() * 200,
			vx: (Math.random() - 0.5) * 1.5,
			vy: (Math.random() - 0.5) * 1.5,
		}))
	);
	const [selected, setSelected] = useState<number | null>(null);

	useEffect(() => {
		let animationFrameId: number;

		const update = () => {
			setBubbles((prev) => {
				if (!containerRef.current) return prev;
				const width = containerRef.current.clientWidth;
				const height = containerRef.current.clientHeight;
				const viewportWidth = window.innerWidth;
				const isMobile = viewportWidth < 640;

				return prev.map((b, i) => {
					let { x, y, vx, vy } = b;
					const el = bubbleRefs.current[i];
					if (!el) return b;

					const bubbleWidth = el.offsetWidth;
					const bubbleHeight = el.offsetHeight;

					const xMin = 10;
					const xMax = width - bubbleWidth - 30;
					const yMin = isMobile ? 10 : 80;
					const yMax = height - bubbleHeight - 30;

					x += vx;
					y += vy;

					if (x <= xMin || x >= xMax) vx *= -1;
					if (y <= yMin || y >= yMax) vy *= -1;

					// Clamp within safe bounds
					x = Math.max(xMin, Math.min(x, xMax));
					y = Math.max(yMin, Math.min(y, yMax));

					return { x, y, vx, vy };
				});
			});

			animationFrameId = requestAnimationFrame(update);
		};

		animationFrameId = requestAnimationFrame(update);
		return () => cancelAnimationFrame(animationFrameId);
	}, []);

	return (
		<div ref={containerRef} className="relative w-full h-full overflow-hidden pointer-events-none">
			{thoughts.map((text, index) => {
				const bubble = bubbles[index];
				if (!bubble) return null;

				return (
					<motion.div
						key={index}
						ref={(el: HTMLDivElement | null) => {
							bubbleRefs.current[index] = el;
						}}
						drag
						onDragStart={() => {
							setBubbles((prev) => prev.map((b, i) => (i === index ? { ...b, vx: 0, vy: 0 } : b)));
						}}
						onDragEnd={(_event, info) => {
							setBubbles((prev) =>
								prev.map((b, i) =>
									i === index
										? {
												x: b.x + info.offset.x,
												y: b.y + info.offset.y,
												vx: (Math.random() - 0.5) * 2,
												vy: (Math.random() - 0.5) * 2,
										  }
										: b
								)
							);
						}}
						onTap={() => setSelected(index)}
						animate={{ x: bubble.x, y: bubble.y }}
						transition={{ type: "linear", duration: 0.01 }}
						className={`text-xs lg:text-base pointer-events-auto absolute px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-white bg-darkPurple dark:bg-lightPurple rounded-full shadow-md cursor-pointer border-2 ${
							selected === index
								? "border-white shadow-glow hover:bg-darkPurple dark:hover:bg-lightPurple"
								: "border-transparent hover:bg-hoverDarkPurple dark:hover:bg-hoverLightPurple"
						}`}
					>
						{text}
					</motion.div>
				);
			})}
		</div>
	);
};

export default Bubble;
