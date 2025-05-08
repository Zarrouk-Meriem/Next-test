import type { Link } from "./heroSection";

export interface CategoryProps {
	id: number;
	categoryName: string;
	categoryCourses: string;
	categoryIcon: string;
}
export interface FooterProps {
	id: number;
	text: string;
	link: Link;
	isExternal?: boolean;
}

export interface CategoriesSectionProps {
	id?: number;
	documentId?: string;
	__component?: string;
	heading?: string;
	footer?: FooterProps;
	category?: CategoryProps[];
}
