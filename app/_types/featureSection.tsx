import type { CourseProps } from "./coursesSection";

export interface FeatureSectionProps {
	id?: number;
	documentId?: string;
	__component?: string;
	heading?: string;
	description?: string;
	feature?: CourseProps[];
}
