import type { CourseProps } from "@/app/_types/coursesSection";
import Tag from "./Tag";
import Rating from "./Rating";
import { getTagColor } from "@/app/_lib/getTagColor";
import Image from "next/image";
import { formatStudentNumber } from "@/app/_lib/utils";
import User from "./User";

function Modal({ course }: { course: CourseProps }) {
	const { courseName, tag, rating, enrolledStudents, instructor } = course;
	const colorTag = getTagColor(tag);
	return (
		<div className='absolute'>
			<Tag tag={tag} colorTag={colorTag} />
			<p className='  text-[#1D2026] text-[14px] leading-[20px] font-[500]'>
				{courseName}
			</p>
			<div className='py-[14px] px-[18px] border-t border-t-[#E9EAF0] flex gap-[67px] items-center justify-between'>
				<div className='flex gap-[67px] items-center justify-between'>
					<User courseBy={false} user={instructor} />
					<span className='flex gap-1 items-center text-[#A1A5B3]'>
						<Rating rating={rating} />
						(357,914)
					</span>
				</div>
				<p className=' font-[500] whitespace-nowrap flex items-center gap-[6px]  '>
					<Image
						src={"/assets/icons/User.svg"}
						alt='user'
						height={20}
						width={20}
					/>

					{formatStudentNumber(enrolledStudents)}
					<span className=' text-[#8C94A3] font-light'> students</span>
				</p>
			</div>
		</div>
	);
}

export default Modal;
