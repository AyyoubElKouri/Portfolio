export interface ProjectType {
	image: string;
	title: string;
	description: string;
	actionLabel?: string;
	actionLink?: string;
}

export interface ExperienceType {
	title: string;
	companyName: string;
    companyLogo: string;
	type: string;
	startDate: string;
	endDate: string | null;
	mission?: string;
}

export interface EducationType {
	schoolName: string;
	schoolLogo: string;
	degree: string;
	fieldOfStudy: string;
	startDate: string;
	endDate: string | null;
}

export interface CertificationType {
	title: string;
	issuer: string;
	issuerLogo: string;
	issueDate: string;
	certificationLink: string;
	readMoreLink?: string;
}

export interface SkillType {
	name: string;
	description: string;
}

export interface ContactType {
	email: string;
	phone?: string;
	linkedin?: string;
	github?: string;
	twitter?: string;
}

export const USER: string = "Ayyoub El kouri";

export const BIO: string =
	`I am a software engineering student specialized in backend architecture, API design, and cloud-based systems, with a hand-on experience in building scalable applications using: \nReact/Angular for interactive user interfaces, TypeScript for type-safe coding, Java/Spring Boot for robust server-side applications, PostgreSQL/Oracle databases for efficient data management, docker/Kubernetes for containerization and orchestration, and AWS for deploying and managing cloud infrastructure.\n\nI believe that code is a reflection of how humans think and perceive the world. Writing code is more than just syntax — it’s an art and a philosophy that leverages the power of computers to help humans accelerate their processes and solve their problems`;

export const PROJECTS: ProjectType[] = [
	{
		image: "/images/ai.jpg",
		title: "StartQue - AI-Powered Task Management",
		description:
			"My, maintainability, and performance. I believe in continuous learning and scientific rigor in every project. I contribute to open-source projects to strengthen my collaborative skills. I’m also interested in cybersecurity and DevOps best practices. My goal is to become an engineer capable of building robust and intelligent software solutions.",
		actionLabel: "View Project",
		actionLink: "https://startque.com",
	},
	{
		image: "/images/code.jpg",
		title: "CodeMaster - AI-Powered Code Review",
		description:
			"Enhance your coding skills with CodeMaster, an AI-powered code review tool.",
		actionLabel: "View Project",
		actionLink: "https://codemaster.com",
	},
	{
		image: "/images/software.jpg",
		title: "SoftWare - AI-Powered Software Development",
		description:
			"Streamline your software development process with SoftWare, an AI-powered development tool.",
		actionLabel: "View Project",
		actionLink: "https://software.com",
	},
];

export const EXPERIENCE: ExperienceType[] = [
    {
		title: "Software Engineer",
		companyName: "Safarelec",
        companyLogo: "/images/safarelec.png",
		type: "intership",
		startDate: "January 2023",
		endDate: "December 2023",
        mission: "As a Software Engineer at Safarelec, I work on an internal intervention management system that tracks daily operations and employee performance. I built this system using React with TypeScript for the user interface, and Node.js with NestJS to develop scalable, maintainable, server-side applications based on a microservices architecture"
	},
    {
		title: "Graphic Designer",
		companyName: "LDX Club",
		companyLogo: "/images/ldx.jpeg",
		type: "remote",
		startDate: "January 2022",
		endDate: "December 2024",
		mission: "As a Graphic Designer at LDX Club, my mission was to design creative logos, social media posts, and visual assets that strengthened the brand’s identity and engagement"
	},
];

export const EDUCATION: EducationType[] = [
	{
		schoolName: "Faculty of Sciences and Techniques of Mohammedia",
		schoolLogo: "/images/fstm.png",
		degree: "Engineering Degree",
		fieldOfStudy: "Software Engineering and IT Systems Integration",
		startDate: "September 2024",
		endDate: null,
	},
	{
		schoolName: "Faculty of Sciences and Techniques of Mohammedia",
		schoolLogo: "/images/fstm.png",
		degree: "DEUST Degree",
		fieldOfStudy: "MIP: Mathematics, Physics and Computer Science",
		startDate: "September 2022",
		endDate: "June 2024",
	},
];

export const CERTIFICATIONS: CertificationType[] = [
	{
		title: "Oracle Certified Professional: Java SE 21 Developer",
		issuer: "Oracle",
		issuerLogo: "/images/oracle.png",
		issueDate: "March 2023",
		certificationLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6E8AC25A3625804722CA05CC2FD21A3838801E4318D2D41AACAD094A19F70C4C",
		readMoreLink: "",
	},
	{
		title: "Oracle Cloud Infrastructure: Generative AI Professional",
		issuer: "Oracle",
		issuerLogo: "/images/oracle.png",
		issueDate: "March 2023",
		certificationLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=941DF532B29C340A52AB6718480FFB67A57236CF322D546EA08AB4DFAE8AA601",
		readMoreLink: "",
	},
	{
		title: "C++ Advanced Programming Certification",
		issuer: "Cisco",
		issuerLogo: "/images/cisco.png",
		issueDate: "March 2023",
		certificationLink: "https://www.credly.com/badges/a06d8f36-0f0c-4b73-a323-f4399ff9dbda/linked_in_profile",
		readMoreLink: "",
	},
];

export const SKILLS: SkillType[] = [
	{
		name: "Listening",
		description: "Ability to actively understand and interpret spoken language."
	},
	{
		name: "Problem-Solving",
		description: "Capacity to analyze issues and develop effective solutions."
	},
	{
		name: "Time Management",
		description: "Skill in organizing and planning how to divide time between activities."
	},
	{
		name: "Teamwork",
		description: "Ability to work collaboratively with others to achieve common goals."
	},
	{
		name: "Adaptability",
		description: "Capacity to adjust to new conditions and environments effectively."
	},
];

export const CONTACT: ContactType = {
	email: "ayyoubelkouri.com",
	phone: "+212 656690355",
	linkedin: "https://www.linkedin.com/in/ayyoub",
	github: "https://github.com/ayyoub",
};
