import { SKILLS } from "../data";

export function Skills() {
	// Check if SKILLS array is empty, return null to avoid rendering the section
	const isEmptySkills = SKILLS.length === 0;
	if (isEmptySkills) {
		return null;
	}

	// Render the Skills section with SKILLS content
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> Skills </h2>
			<hr className="border-zinc-800 mt-1 mb-4" />

			<article className="flex flex-col gap-1">
				{SKILLS.map(
					(skill) =>
						skill.name.trim().length !== 0 && (
							<div key={skill.name} className="bg-zinc-900 pl-3 rounded-2xl">
								<span className="text-xl italic text-zinc-100">
									{skill.name}
								</span>{" "}
								{skill.description && "•"}{" "}
								<span className="text-zinc-400">{skill.description}</span>
							</div>
						),
				)}
			</article>
		</section>
	);
}
