import type { Image, Link } from "./heroSection";

export interface IStep {
	id: number;
	text?: string;
	order: number;
	icon: Image;
}

export interface BecomeInstructorSectionProps {
	id?: number;
	documentId?: string;
	__component?: string;
	heading?: string;
	subheading?: string;
	link?: Link;
	stepsHeading?: string;
	image?: Image;
	steps?: IStep[];
}
