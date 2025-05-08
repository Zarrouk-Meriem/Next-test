// import { getCategoryIcon } from "../_lib/getCategoryIcon";

import Link from "next/link";
import type { FeatureSectionProps } from "../_types/categoriesSection";
import Category from "./Category";
import { IoArrowForwardOutline } from "react-icons/io5";

function CategoriesSection({ data }: { readonly data: FeatureSectionProps }) {
	const { footer, category, heading } = data;
	// console.log("footer----------------", footer);
	return (
		<div className='flex-1 '>
			<section className='container flex flex-col px-4 py-6 mx-auto md:px-6 lg:py-24 gap-[40px] justify-center '>
				<h1 className='text-[40px] leading-[50px] font-[600] text-center'>
					{heading}
				</h1>
				<div className='grid grid-cols-4 gap-[24px]'>
					{data &&
						category.map((category) => {
							return <Category key={category.id} category={category} />;
						})}
				</div>
				<footer className='flex gap-[12px] self-center text-[14px] items-center justify-center'>
					<p>{data.footer.text}</p>
					<span className='flex gap-[8px] items-center'>
						<Link className='text-amber-600' href={footer.link.url}>
							{String(footer.link.text)}
						</Link>
						<span className='text-amber-600 '>
							<IoArrowForwardOutline />
						</span>
					</span>
				</footer>
			</section>
		</div>
	);
}

export default CategoriesSection;
