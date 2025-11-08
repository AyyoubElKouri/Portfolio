import { YOUR_WORD } from "../data";

export function Footer() {
	return (
		<footer className="w-full h-15 bg-zinc-950 border-t border-zinc-800 bg-[url('/images/patterns.svg')] bg-repeat bg-fixed flex items-center justify-center">
			<p className="text-zinc-400 italic">{YOUR_WORD}</p>
		</footer>
	);
}
