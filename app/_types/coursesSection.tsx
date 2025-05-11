import type { Image } from "./heroSection";

export interface IInstructor {
	id: number;
	name: string;
	avatar: Image;
	job?: string;
	studentNum?: number;
	rating?: number;
}
export interface CourseProps {
	id: number;
	courseName: string;
	rating: number;
	price: number;
	oldPrice: number;
	enrolledStudents: number;
	image: Image;
	tag: string;
	estimatedTime: string;
	instructor: IInstructor;
	difficulty: string;
}

export interface CoursesSectionProps {
	id?: number;
	documentId?: string;
	__component?: string;
	heading?: string;
	course?: CourseProps[];
}
