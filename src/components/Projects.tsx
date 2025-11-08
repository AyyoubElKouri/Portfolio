import type { ProjectType } from "../data";
import { PROJECTS } from "../data";

function Project({ project }: { project: ProjectType }) {
	return (
		<article className="flex justify-start items-start gap-5">
			<img
				src={project.image}
				alt={project.title}
				className="w-12 h-12 object-cover rounded-sm mb-2"
			/>

			<div>
				<h3 className="text-2xl italic mb-3">{project.title}</h3>
				<p className="mb-3">{project.description}</p>
				{project.actionLabel && project.actionLink && (
					<a
						href={project.actionLink}
						className="text-blue-500 underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{project.actionLabel}
					</a>
				)}
			</div>
		</article>
	);
}
export function Projects() {
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> Projects </h2>
			<hr className="border-zinc-800 mt-1 mb-8" />

			<article className="flex flex-col gap-16 pl-3">
				{PROJECTS.map((project) => (
					<div key={project.title}>
						<Project project={project} />
					</div>
				))}
			</article>
		</section>
	);
}
