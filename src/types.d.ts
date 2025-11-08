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
	email?: string;
	phone?: string;
	linkedin?: string;
	github?: string;
	twitter?: string;
}