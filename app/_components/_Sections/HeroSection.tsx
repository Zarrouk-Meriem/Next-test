import Image from "next/image";
import Link from "next/link";
import type { Url } from "next/dist/shared/lib/router/router";
import type { HeroSectionProps } from "@/app/_types/heroSection";
import { getImageUrl } from "@/app/_lib/utils";

function HeroSection({ data }: { readonly data: HeroSectionProps }) {
	const { heading, subheading, image, link } = data;

	return (
		<section className='flex flex-col-reverse  lg:flex-row items-center justify-between px-4 py-10 md:px-8 lg:py-24 gap-10 overflow-hidden pr-0 lg:pr-0  md:pr-0 [@media(max-width:1289px)]:pr-[16px]	'>
			{/* Text Section */}
			<div className='flex flex-col gap-8 justify-center max-w-xl w-full ml-[200px] [@media(max-width:1289px)]:ml-0 [@media(max-width:1289px)]:text-center '>
				<h1 className='text-4xl md:text-5xl font-semibold leading-tight'>
					{heading}
				</h1>
				<p className='text-lg text-[#4E5566] leading-relaxed'>{subheading}</p>
				{link?.url && (
					<Link
						href={link.url as Url}
						className='text-base px-6 py-3 text-white font-semibold bg-[#FF6636] hover:shadow-[0px_6px_20px_0px_#cc532b4b] w-fit  [@media(max-width:1289px)]:self-center '
					>
						{link.text}
					</Link>
				)}
			</div>

			{/* Image Section */}
			<div className='relative w-full lg:w-[50%] h-[400px] md:h-[500px] lg:h-[550px]'>
				<Image
					src={getImageUrl(String(image?.url))}
					alt={image?.alternativeText ?? "Hero image"}
					fill
					className='object-cover   [@media(max-width:1289px)]:rounded-lg '
					quality={100}
					priority
				/>
			</div>
		</section>
	);
}

export default HeroSection;
