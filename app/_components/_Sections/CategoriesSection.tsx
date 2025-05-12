// import { getCategoryIcon } from "../_lib/getCategoryIcon";

import Link from "next/link";

import { IoArrowForwardOutline } from "react-icons/io5";

import type { Url } from "next/dist/shared/lib/router/router";
import Category from "../_Shared/Category";
import type { CategoriesSectionProps } from "@/app/_types/categoriesSection";

function CategoriesSection({
	data,
}: {
	readonly data: CategoriesSectionProps;
}) {
	const { footer, category, heading } = data;

	return (
		<div className='flex-1 '>
			<section className='container flex flex-col px-4 py-6 mx-auto md:px-6 lg:py-24 gap-[40px] justify-center '>
				<h1 className='text-[40px] leading-[50px] font-[600] text-center'>
					{heading}
				</h1>
				<div className='grid grid-cols-4 [@media(max-width:1373px)]:grid-cols-2 gap-[24px]'>
					{category &&
						category.map((category) => {
							return <Category key={category.id} category={category} />;
						})}
				</div>
				<footer className='flex gap-[12px] self-center text-[14px] items-center justify-center'>
					<p>{footer?.text}</p>
					<span className='flex gap-[8px] items-center text-[#FF6636] hover:underline'>
						<Link className='' href={footer?.link.url as Url}>
							{String(footer?.link.text)}
						</Link>
						<span>
							<IoArrowForwardOutline className='text-[18px]' />
						</span>
					</span>
				</footer>
			</section>
		</div>
	);
}

export default CategoriesSection;
