import qs from "qs";
import HeroSection from "./_components/HeroSection";
import CategoriesSection from "./_components/CategoriesSection";
import Spinner from "./_components/Spinner";

import type { HeroSectionProps } from "./_types/heroSection";
import type { CategoriesSectionProps } from "./_types/categoriesSection";
const homePageQuery = qs.stringify({
	populate: {
		blocks: {
			on: {
				"layout.hero-section": {
					populate: {
						image: {
							fields: ["url", "alternativeText"],
						},
						link: {
							populate: true,
						},
					},
				},
				"layout.category-section": {
					populate: {
						category: {
							populate: true,
						},
						footer: {
							populate: {
								link: {
									populate: true,
								},
							},
						},
					},
				},
			},
		},
	},
});

async function getStrapiData(path: string) {
	const baseURL = "http://localhost:1337";
	const url = new URL(path, baseURL);
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
};

function blockRenderer(block: HeroSectionProps | CategoriesSectionProps) {
	const Component =
		blockComponents[block.__component as keyof typeof blockComponents];
	return Component ? <Component key={block.id} data={block} /> : null;
}
async function page() {
	const { data } = await getStrapiData("/api/home-page");
	const { blocks } = data || [];
	if (!blocks) return <Spinner />;
	// console.dir(blocks, { depth: null });
	return <main>{blocks.map(blockRenderer)}</main>;
}

export default page;
