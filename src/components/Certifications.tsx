import { CERTIFICATIONS } from "../data";

export function Certifications() {
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> Certifications </h2>
			<hr className="border-zinc-800 mt-1 mb-7" />

			<article className="flex flex-col gap-6">
				{CERTIFICATIONS.map((cert) => (
					<div
						key={cert.title}
						className="bg-zinc-900 rounded-2xl flex items-start gap-5 pl-3"
					>
						<img
							src={cert.issuerLogo}
							alt={cert.issuer}
							className="w-12 h-12 object-cover rounded-sm mb-2"
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
