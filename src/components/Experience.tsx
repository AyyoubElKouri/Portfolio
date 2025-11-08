import { EXPERIENCE } from "../data";

export function Experience() {
	// Check if EXPERIENCE array is empty, return null to avoid rendering the section
	const isExperienceEmpty = EXPERIENCE.length === 0;
	if (isExperienceEmpty) {
		return null;
	}

	// Render the Experience section with EXPERIENCE content
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic mb-1">Experience</h2>
			<hr className="border-zinc-800 mb-8" />

			<article className="flex flex-col gap-10 pl-3">
				{EXPERIENCE.map((exp) => (
					<div
						key={exp.title}
						className="flex flex-col sm:flex-row sm:items-start gap-5 bg-zinc-900 rounded-2xl"
					>
						<img
							className="w-12 h-12 object-cover rounded-sm mb-2"
							src={exp.companyLogo}
							alt={exp.companyName}
							onError={(e) => {
								e.currentTarget.src = "/images/default-company.jpeg";
							}}
						/>

						<div className="flex flex-col gap-1">
							<h3 className="text-xl italic text-zinc-100">{exp.title}</h3>
							<h4 className="text-zinc-400">
								{exp.companyName}{" "}
								<span className="text-zinc-500">• {exp.type}</span>
							</h4>
							<p className="text-sm text-zinc-500 mb-2">
								({exp.startDate} - {exp.endDate ?? "Current"})
							</p>

							<p className="text-zinc-300 leading-relaxed">{exp.mission}</p>
						</div>
					</div>
				))}
			</article>
		</section>
	);
}
