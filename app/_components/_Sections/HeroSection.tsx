import Image from "next/image";
import Link from "next/link";

import type { Url } from "next/dist/shared/lib/router/router";
import type { HeroSectionProps } from "@/app/_types/heroSection";

function HeroSection({ data }: { readonly data: HeroSectionProps }) {
	const { heading, subheading, image, link } = data;
	const imageURL = "http://localhost:1337" + image?.url;
	return (
		<section className=' flex px-4 py-6 mx-auto md:px-6 lg:py-24 gap-[40px]  items-center justify-end overflow-hidden lg:pt-0 pt-0 '>
			<div className='flex flex-col gap-[32px] justify-center pl-[50px] w-[550px] '>
				<h1 className='text-[52px] leading-[50px] font-[600]'>{heading}</h1>
				<p className='text-[18px] w-[450px] font-[400] leading-[25px] text-[#4E5566]'>
					{subheading}
				</p>
				<Link
					href={link?.url as Url}
					className='text-[16px] px-[22px] py-[12px] text-white hover:[box-shadow:0px_6px_20px_0px_#cc532b4b] bg-[#FF6636] self-baseline font-[600]'
				>
					{link?.text}
				</Link>
			</div>
			<div className='relative flex items-end w-[50%] h-[550px]  '>
				<div className='absolute w-[100%] h-[100%] top-[10px] left-[100px]'>
					<Image
						src={imageURL}
						alt={image?.alternativeText ?? "no alternative text"}
						quality={100}
						priority
						fill
						className='w-[100%]'
					/>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
