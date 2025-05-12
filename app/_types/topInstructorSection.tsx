import type { FooterProps } from "./categoriesSection";
import type { IInstructor } from "./coursesSection";
import type { Image } from "./heroSection";

export interface TopInstructorSectionProps {
	id?: number;
	documentId?: string;
	__component?: string;
	heading?: string;
	image?: Image;
	instructors?: IInstructor[];
	footer?: FooterProps;
}
