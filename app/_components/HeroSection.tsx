import Image from "next/image";
import Link from "next/link";
import type { HeroSectionProps } from "../_types/heroSection";
import type { Url } from "next/dist/shared/lib/router/router";

function HeroSection({ data }: { readonly data: HeroSectionProps }) {
	const { heading, subheading, image, link } = data;
	console.log(data);
	const imageURL = "http://localhost:1337" + image?.url;
	return (
		<header className='flex justify-end gap-[72px] '>
			<div className='flex flex-col gap-[32px] justify-center pl-[200px] pb-[100px] pr-0 w-[1050px] '>
				<h1 className='text-[52px] leading-[50px] font-[600]'>{heading}</h1>
				<p className='text-[18px] font-[400] leading-[25px] text-[#4E5566]'>
					{subheading}
				</p>
				<Link
					href={link?.url as Url}
					className='text-[16px] px-[22px] py-[12px] text-white bg-[#FF6636] self-baseline font-[600]'
				>
					{link?.text}
				</Link>
			</div>
			<div className='relative w-[100%] h-[65vh]'>
				<Image
					src={imageURL}
					alt={image?.alternativeText ?? "no alternative text"}
					quality={100}
					priority
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
		</header>
	);
}

export default HeroSection;
