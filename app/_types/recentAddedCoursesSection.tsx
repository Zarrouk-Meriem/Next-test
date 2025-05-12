import type { FooterProps } from "./categoriesSection";
import type { CourseProps } from "./coursesSection";

export interface RecentCoursesSectionProps {
	id?: number;
	documentId?: string;
	__component?: string;
	heading?: string;
	course?: CourseProps[];
	footer?: FooterProps;
}
