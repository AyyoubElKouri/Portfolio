/*--------------------------------------------------------------------------------------------------
 *                       Copyright (c) Ayyoub EL Kouri. All rights reserved
 *     Becoming an expert won’t happen overnight, but with a bit of patience, you’ll get there
 *------------------------------------------------------------------------------------------------*/

import { AboutMe } from "./components/AboutMe";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { NameAndPhoto } from "./components/NameAndPhoto";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
 
export default function Home() {
	return (
		<div className="min-w-svh min-h-svh pt-15 flex flex-col bg-zinc-900">
			<NameAndPhoto />
			<main className="w-full p-20 flex flex-col gap-20">
				<AboutMe />
				<Experience />
				<Projects />
				<Education />
				<Certifications />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
