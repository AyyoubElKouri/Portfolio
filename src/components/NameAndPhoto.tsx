import { USER } from "../data";

export function NameAndPhoto() {
	return (
		<header className="w-full h-40 bg-zinc-950 border-y border-zinc-800 bg-[url('/images/patterns.svg')] bg-repeat bg-fixed flex items-center pl-20">
			<h1 className="text-zinc-200 text-3xl italic"> {USER} </h1>
		</header>
	);
}
