import { BIO } from "../data";

export function AboutMe() {
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> About me </h2>
			<hr className="border-zinc-800 mt-1 mb-4" />
			<p style={{ whiteSpace: "pre-wrap" }}>{BIO}</p>
		</section>
	);
}
