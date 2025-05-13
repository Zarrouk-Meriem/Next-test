import type { IInstructor } from "@/app/_types/coursesSection";
import Rating from "./Rating";
import Image from "next/image";
import { formatStudentNumber, getImageUrl } from "@/app/_lib/utils";

function Instructor({ instructor }: { instructor: IInstructor }) {
	const {
		rating,
		name,
		job,
		studentNum,
		avatar: { alternativeText, url },
	} = instructor;
	return (
		<div className='flex flex-col  w-[244px] text-[#4E5566]'>
			<div className='overflow-hidden'>
				<Image
					alt={alternativeText ?? "instructor"}
					width={244}
					height={244}
					src={getImageUrl(url as string)}
					quality={100}
					className='hover:[transform:scale(110%)] transition-transform duration-300 '
				/>
			</div>
			<div className=' flex flex-col  text-[14px] border border-[#E9EAF0] border-t-0  '>
				<div className='flex items-center justify-center border-b border-b-[#E9EAF0] '>
					<div className='px-[16px] py-[12px]  flex flex-col gap-[4px] items-center justify-center'>
						<p className='text-[#1D2026] text-[16px] font-[500]'>{name}</p>
						<span className='text-[#8C94A3] text-[14px] font-[400]'>{job}</span>
					</div>
				</div>

				<div className=' flex gap-[78px] px-[16px] py-[12px] items-center justify-between'>
					<Rating rating={Number(rating)} />
					<p className='whitespace-nowrap font-[500]  '>
						{formatStudentNumber(Number(studentNum))}
						<span className=' text-[#8C94A3] font-light'> students</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Instructor;
