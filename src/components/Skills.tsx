import { SKILLS } from "../data";

export function Skills() {
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> Skills </h2>
			<hr className="border-zinc-800 mt-1 mb-4" />

			<article className="flex flex-col gap-1">
				{SKILLS.map((skill) => (
					<div key={skill.name} className="bg-zinc-900 pl-3 rounded-2xl">
						<span className="text-xl italic text-zinc-100">{skill.name}</span> •{" "}
						<span className="text-zinc-400">{skill.description}</span>
					</div>
				))}
			</article>
		</section>
	);
}
