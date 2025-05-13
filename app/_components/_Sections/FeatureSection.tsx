import type { FeatureSectionProps } from "../../_types/featureSection";
import FeatureCourse from "../_Shared/FeatureCourse";

function FeatureSection({ data }: { readonly data: FeatureSectionProps }) {
	const { heading, feature, description } = data;

	return (
		<div>
			<section className='container flex flex-col px-4 py-6 mx-auto md:px-6 lg:py-24 gap-[40px] justify-center '>
				<header className='flex items-center justify-between [@media(max-width:1289px)]:flex-col [@media(max-width:1289px)]:text-center'>
					<h1 className='text-[40px] leading-[50px] font-[600] text-center '>
						{heading}
					</h1>
					<p className='text-[14px] text-[#4E5566] leading-[22px] font-[400]'>
						{description!
							.split(".")
							.filter(Boolean)
							.map((sentence, index) => (
								<span
									key={index}
									className='text-[14px] text-[#4E5566] leading-[22px] font-[400]'
								>
									{sentence.trim()}.
									<br />
								</span>
							))}
					</p>
				</header>
				<div className='grid  self-center grid-cols-2  [@media(max-width:1373px)]:grid-cols-1 justify-between  [@media(max-width:1373px)]:justify-items-center  grid-rows-[188px_188px] gap-x-[150px] gap-y-[50px] w-[-webkit-fill-available]'>
					{feature?.map((feature) => (
						<FeatureCourse key={feature.image.documentId} feature={feature} />
					))}
				</div>
			</section>
		</div>
	);
}

export default FeatureSection;
