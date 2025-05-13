import qs from "qs";

import Spinner from "./_components/_Shared/Spinner";

import type { HeroSectionProps } from "./_types/heroSection";
import type { CategoriesSectionProps } from "./_types/categoriesSection";

import type { CoursesSectionProps } from "./_types/coursesSection";
import FeatureSection from "./_components/_Sections/FeatureSection";
import HeroSection from "./_components/_Sections/HeroSection";
import CategoriesSection from "./_components/_Sections/CategoriesSection";
import CoursesSection from "./_components/_Sections/CoursesSection";
import TopInstructorSection from "./_components/_Sections/TopInstructorSection";
import type { TopInstructorSectionProps } from "./_types/topInstructorSection";
import Companies from "./_components/_Sections/CompaniesSection";
import BecomeInstructor from "./_components/_Sections/BecomeInstructor";
import type { CompaniesSectionProps } from "./_types/companiesSection";
import type { BecomeInstructorSectionProps } from "./_types/becomeAnInstructor";
import type { FeatureSectionProps } from "./_types/featureSection";
import RecentAddedCourses from "./_components/_Sections/RecentAddedCoursesSection";
import type { RecentCoursesSectionProps } from "./_types/recentAddedCoursesSection";
import { getStrapiURL } from "./_lib/utils";
const homePageQuery = qs.stringify({
	populate: {
		blocks: {
			on: {
				"layout.hero-section": {
					populate: {
						image: { fields: ["url", "alternativeText"] },
						link: { populate: true },
					},
				},
				"layout.category-section": {
					populate: {
						category: { populate: true },
						footer: {
							populate: {
								link: { populate: true },
							},
						},
					},
				},
				"layout.best-courses-section": {
					populate: {
						course: {
							populate: {
								image: { fields: ["url", "alternativeText"] },
							},
						},
					},
				},
				"layout.feature-courses-section": {
					populate: {
						feature: {
							populate: {
								image: { fields: ["url", "alternativeText"] },
								instructor: {
									populate: {
										avatar: {
											fields: ["url", "alternativeText"],
										},
									},
								},
							},
						},
					},
				},
				"layout.companies": {
					populate: { logo: { fields: ["url", "alternativeText"] } },
				},
				"layout.become-instructor-section": {
					populate: {
						steps: {
							populate: {
								icon: { fields: ["url", "alternativeText"] },
							},
						},
						link: { populate: true },
						image: { fields: ["url", "alternativeText"] },
					},
				},
				"layout.top-instructor-section": {
					populate: {
						instructors: {
							populate: {
								avatar: { fields: ["url", "alternativeText"] },
							},
						},
						footer: { populate: { link: { populate: true } } },
					},
				},
				"layout.recent-courses-section": {
					populate: {
						course: {
							populate: {
								instructor: {
									populate: {
										avatar: { fields: ["url", "alternativeText"] },
									},
								},
								image: { populate: true },
								detail: { populate: true },
							},
						},
						footer: { populate: { link: { populate: true } } },
					},
				},
			},
		},
	},
});

async function getStrapiData(path: string) {
	const url = new URL(path, getStrapiURL());
	url.search = homePageQuery;
	try {
		const res = await fetch(url.href);
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

const blockComponents = {
	"layout.hero-section": HeroSection,
	"layout.category-section": CategoriesSection,
	"layout.best-courses-section": CoursesSection,
	"layout.feature-courses-section": FeatureSection,
	"layout.top-instructor-section": TopInstructorSection,
	"layout.companies": Companies,
	"layout.become-instructor-section": BecomeInstructor,
	"layout.recent-courses-section": RecentAddedCourses,
};

function blockRenderer(
	block:
		| HeroSectionProps
		| CategoriesSectionProps
		| CoursesSectionProps
		| FeatureSectionProps
		| TopInstructorSectionProps
		| CompaniesSectionProps
		| BecomeInstructorSectionProps
		| RecentCoursesSectionProps
) {
	const Component =
		blockComponents[block.__component as keyof typeof blockComponents];
	return Component ? (
		<Component key={JSON.stringify(block)} data={block} />
	) : null;
}
async function page() {
	const { data } = await getStrapiData("/api/home-page");
	const { blocks } = data || [];
	if (!blocks) return <Spinner />;

	return <main>{blocks.map(blockRenderer)}</main>;
}

export default page;
