import { getImageUrl } from "@/app/_lib/utils";
import type { CompaniesSectionProps } from "@/app/_types/companiesSection";
import Image from "next/image";

function Companies({ data }: { readonly data: CompaniesSectionProps }) {
	const { heading, subheading, logo: logos } = data;
	const sortedLogos = logos?.sort(
		(a, b) => Number(a.alternativeText) - Number(b.alternativeText)
	);
	return (
		<div>
			<section className='container flex px-4 py-6 mx-auto md:px-6 lg:py-24 items-center justify-between '>
				<div className='flex flex-col gap-[24px] w-[424px]  '>
					<h1 className='text-[32px] leading-[40px] font-[600] '>{heading}</h1>
					<p className='text-[14px] leading-[22px] font-[400] w-[312px] text-[#6E7485] '>
						{subheading}
					</p>
				</div>
				<div className='grid grid-cols-4 gap-[24px] '>
					{sortedLogos?.map(({ alternativeText, url, id }) => (
						<Image
							key={id}
							alt={alternativeText ?? "company logo"}
							width={100}
							height={100}
							src={getImageUrl(url as string)}
							quality={100}
							className='mx-[50px]'
						/>
					))}
				</div>
			</section>
		</div>
	);
}

export default Companies;
