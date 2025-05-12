import type { Image } from "./heroSection";

export interface CompaniesSectionProps {
	id?: number;
	documentId?: string;
	__component?: string;
	heading?: string;
	subheading?: string;
	logo?: Image[];
}
