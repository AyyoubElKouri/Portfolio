import { BIO } from "../data";

export function AboutMe() {
	// Check if BIO is empty or contains only whitespace, if so, return null to avoid rendering the section
	const isBioEmpty = BIO.trim().length === 0;
	if (isBioEmpty) {
		return null;
	}

	// Render the About Me section with BIO content
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> About me </h2>
			<hr className="border-zinc-800 mt-1 mb-4" />
			<p style={{ whiteSpace: "pre-wrap" }}>{BIO}</p>
		</section>
	);
}
