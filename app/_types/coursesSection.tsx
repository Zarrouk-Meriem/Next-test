import type { Image } from "./heroSection";

export interface IInstructor {
	id: number;
	name: string;
	avatar: Image;
	job?: string;
	studentNum?: number;
	rating?: number;
}
export interface IDetail {
	id: number;
	favourite: boolean;
	youWillLearn: string;
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
	discount: number;
	detail: IDetail;
}

export interface CoursesSectionProps {
	id?: number;
	documentId?: string;
	__component?: string;
	heading?: string;
	course?: CourseProps[];
}
