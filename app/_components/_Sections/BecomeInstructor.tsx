import type { BecomeInstructorSectionProps } from "@/app/_types/becomeAnInstructor";
import Link from "next/link";
import Step from "../_Shared/Step";
import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";
import { getImageUrl } from "@/app/_lib/utils";

function BecomeInstructor({
	data,
}: {
	readonly data: BecomeInstructorSectionProps;
}) {
	const { heading, subheading, link, stepsHeading, steps, image } = data;
	const sortedSteps = steps?.sort((a, b) => a.order - b.order);
	return (
		<div key={heading} className='flex '>
			<section className='container flex px-4 py-6 mx-auto md:px-6 lg:py-24  justify-between [@media(max-width:1300px)]:flex-col [@media(max-width:1300px)]:gap-[20px] [@media(max-width:1300px)]:items-center '>
				<div
					style={{
						background: "linear-gradient(90deg, #CC522B 0%, #FF6636 100%)",
					}}
					className='flex flex-col md:flex-row overflow-hidden relative justify-between text-white p-[40px]  w-[648px]   md:min-h-[270px]   '
				>
					<div className='max-w-lg gap-[24px] flex flex-col text-center md:text-left'>
						<header className='flex flex-col gap-[12px]'>
							<h1 className='text-[32px] leading-[40px] font-[600] '>
								{heading}
							</h1>
							<p className='text-[14px] leading-[22px] font-[400] w-[311px]  '>
								{subheading}
							</p>
						</header>
						<div className='bg-white self-baseline text-[#FF6636] gap-[12px] cursor-pointer flex items-center  px-[24px] py-[10px] text-[16px] font-[600]'>
							<Link className='whitespace-nowrap' href={String(link?.url)}>
								{link?.text}
							</Link>
							<IoArrowForwardOutline className='text-[24px]' />
						</div>
					</div>
					<div className='mt-6 md:mt-0 absolute right-[0px] bottom-[-50px]'>
						<Image
							alt={image?.alternativeText ?? "an instructor smiling"}
							src={getImageUrl(String(image?.url))}
							width={310}
							height={400}
							className='object-contain'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-[27px] p-[40px]  '>
					<h1 className='text-[32px] leading-[40px] font-[600] w-[568px] [@media(max-width:1300px)]:text-center '>
						{stepsHeading}
					</h1>
					<div className='grid grid-cols-2 gap-[20px] w-[568px]'>
						{sortedSteps?.map((step) => (
							<Step key={step.id} step={step} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default BecomeInstructor;
