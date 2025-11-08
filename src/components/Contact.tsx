import { CONTACT } from "../data";

export function Contact() {
	return (
		<section className="text-zinc-200">
			<h2 className="text-3xl italic"> Contact </h2>
			<hr className="border-zinc-800 mt-1 mb-4" />

			<p className="italic pb-2">You can find me on: </p>
			<ul className="list-disc list-inside">
				{CONTACT.email && <li>Email: {CONTACT.email}</li>}
				{CONTACT.phone && <li>Phone: {CONTACT.phone}</li>}
				{CONTACT.linkedin && <li>LinkedIn: {CONTACT.linkedin}</li>}
				{CONTACT.github && <li>GitHub: {CONTACT.github}</li>}
				{CONTACT.twitter && <li>Twitter: {CONTACT.twitter}</li>}
			</ul>
		</section>
	);
}
