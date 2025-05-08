import Image from "next/image";
import { getCategoryIcon } from "../_lib/getCategoryIcon";
import type { CategoryProps } from "../_types/categoriesSection";

function Category({ category }: { category: CategoryProps }) {
	const { categoryName, categoryCourses, categoryIcon } = category;
	const Icon = getCategoryIcon(categoryIcon);

	const colorMap: Record<string, string> = {
		LABEL_ICON: "EBEBFF",
		BUSINESS_ICON: "E1F7E3",
		FINANCE_ICON: "FFF2E5",
		IT_ICON: "FFF0F0",
		PERSONAL_ICON: "FFFFFF",
		OFFICE_ICON: "F5F7FA",
		MARKETING_ICON: "EBEBFF",
		PHOTO_ICON: "F5F7FA",
		LIFESTYLE_ICON: "FFF2E5",
		DESIGN_ICON: "FFEEE8",
		HEALTH_ICON: "E1F7E3",
		MUSIC_ICON: "FFF2E5",
	};

	return (
		<div
			style={{ backgroundColor: `#${colorMap[categoryIcon]}` }}
			className={`gap-[20px]  p-[20px] flex w-auto items-center`}
		>
			<div className='size-[64px] flex items-center justify-center'>
				{Icon ? <Image src={Icon} alt='icon' width={50} height={50} /> : null}
			</div>
			<div className='flex flex-col text-[16px]'>
				<span>{categoryName}</span>
				<span className='text-[14px] text-[#6E7485]'>
					{categoryCourses} Courses
				</span>
			</div>
		</div>
	);
}

export default Category;
