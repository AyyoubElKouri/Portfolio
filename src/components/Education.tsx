import { EDUCATION } from "../data";

export function Education() {
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> Education </h2>
			<hr className="border-zinc-800 mt-1 mb-7" />

			<article className="flex flex-col gap-6">
				{EDUCATION.map((edu) => (
					<div
						key={edu.schoolName}
						className="bg-zinc-900 rounded-2xl flex justify-start items-start gap-5 pl-3"
					>
						<img
							src={edu.schoolLogo}
							alt={edu.schoolName}
							className="w-12 h-12 object-cover rounded-full mb-2"
						/>
						<div>
							<h3 className="text-xl italic text-zinc-100">
								{edu.degree} in {edu.fieldOfStudy}
							</h3>
							<h4 className="text-zinc-400">
								{edu.schoolName}{" "}
								<span className="text-zinc-500">
									• ({edu.startDate} - {edu.endDate ?? "Current"})
								</span>
							</h4>
						</div>
					</div>
				))}
			</article>
		</section>
	);
}
