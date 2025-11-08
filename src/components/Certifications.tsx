import { CERTIFICATIONS } from "../data";

export function Certifications() {
	// Check if CERTIFICATIONS array is empty, return null to avoid rendering the section
	const isEmptyCertifications = CERTIFICATIONS.length === 0;
	if (isEmptyCertifications) {
		return null;
	}

	// Render the Certifications section with CERTIFICATIONS content
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> Certifications </h2>
			<hr className="border-zinc-800 mt-1 mb-7" />

			<article className="flex flex-col gap-10">
				{CERTIFICATIONS.map((cert) => (
					<div
						key={cert.title}
						className="bg-zinc-900 rounded-2xl flex items-start gap-5 pl-3"
					>
						<img
							src={cert.issuerLogo}
							alt={cert.issuer}
							className="w-12 h-12 object-cover rounded-sm mb-2"
							onError={(e) => {
								e.currentTarget.src = "/images/default-certification.png";
							}}
						/>
						<div>
							<h3 className="text-xl italic text-zinc-100">{cert.title}</h3>
							<h4 className="text-zinc-400">
								Issued by {cert.issuer}{" "}
								<span className="text-zinc-500">• {cert.issueDate}</span>
							</h4>
							<a
								href={cert.certificationLink}
								className="text-blue-500 underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Certification
							</a>
						</div>
					</div>
				))}
			</article>
		</section>
	);
}
