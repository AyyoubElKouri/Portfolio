import { USER } from "../data";

export function NameAndPhoto() {
	return (
		<header className="w-full h-40 bg-zinc-950 border-y border-zinc-800 bg-[url('/images/patterns.svg')] bg-repeat bg-fixed flex justify-between items-center px-40">
			<h1 className="text-zinc-200 text-5xl italic"> {USER} </h1>
			<img src="/images/Ayyoub.jpg" alt="User" className="w-32 h-full object-cover" />
		</header>
	);
}
