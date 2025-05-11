import type { TopInstructorSectionProps } from "@/app/_types/topInstructorSection";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import Instructor from "../_Shared/Instructor";

function TopInstructorSection({
	data,
}: {
	readonly data: TopInstructorSectionProps;
}) {
	const { heading, footer, instructors } = data;
	return (
		<div className='flex-1 '>
			<section className='container flex flex-col px-4 py-6 mx-auto md:px-6 lg:py-24 gap-[40px] justify-center '>
				<h1 className='text-[40px] leading-[50px] font-[600] text-center'>
					{heading}
				</h1>
				<div className='flex items-center justify-between'>
					{instructors &&
						instructors.map((instructor) => {
							return <Instructor key={instructor.id} instructor={instructor} />;
						})}
				</div>
				<footer className='flex gap-[12px] font-[400] self-center text-[14px] text-[#6E7485] items-center justify-center'>
					<p>{footer?.text}</p>
					<span className='flex gap-[8px] font-[500] items-center text-[#FF6636] hover:underline '>
						<Link href={String(footer?.link.url)}>
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

export default TopInstructorSection;
