import Image from "next/image";
import type { CourseProps } from "../../_types/coursesSection";
import { getImageUrl } from "../../_lib/utils";
import Tag from "./Tag";
import Rating from "./Rating";
import { getTagColor } from "../../_lib/getTagColor";
import EnrolledStudents from "./EnrolledStudents";
import User from "./User";

function FeatureCourse({ feature }: { feature: CourseProps }) {
	const {
		courseName,
		tag,
		rating,
		enrolledStudents,
		price,
		image: { url, alternativeText },
		instructor,
		difficulty,
		estimatedTime,
	} = feature;
	const colorTag = getTagColor(tag);

	return (
		<div className='flex  gap-[20px]  text-[#4E5566] border border-[#E9EAF0] w-fit [@media(max-width:1535px)]:w-[640px]  '>
			<Image
				alt={alternativeText ?? "alternative text"}
				width={220}
				height={188}
				src={getImageUrl(url as string)}
				quality={100}
			/>

			<div className='gap-[17px] flex flex-col py-[16px] px-[20px] text-[14px] pb-0 pl-0  '>
				{/* tag and price */}
				<div className=' flex gap-[8px] flex-col'>
					<div className='flex w-[-webkit-fill-available]  gap-[67px] items-center justify-between'>
						<Tag tag={tag} colorTag={colorTag} />
						<div className='flex items-center   gap-[4px] '>
							<span className='text-[#1D20266] text-[18px] font-[600]'>
								${price}
							</span>
							<span className='line-through text-[#A1A5B3]  text-[14px] '>
								$26.00
							</span>
						</div>
					</div>
					{/* course name */}
					<p className=' text-[#1D2026] text-[16px] font-[500] whitespace-nowrap  '>
						{courseName}
					</p>
				</div>

				{/* user and rating */}
				<div className='flex gap-[67px] items-center justify-between'>
					<User courseBy={false} user={instructor} />
					<span className='flex gap-1 items-center text-[#A1A5B3]'>
						<Rating rating={rating} />
						(357,914)
					</span>
				</div>

				{/* footer */}
				<div className='border-[#E9EAF0] border-t'>
					<div className=' flex gap-[67px] pt-[17px] items-center justify-between  '>
						<div className='flex items-center gap-[6px] '>
							<Image
								src={"/assets/icons/User.svg"}
								alt='user'
								height={20}
								width={20}
							/>
							<EnrolledStudents enrolledStudents={enrolledStudents} />
						</div>
						<div className='  flex items-center gap-[6px] text-[#4E5566] text-[14px] '>
							<Image
								src={"/assets/icons/diff.svg"}
								alt='user'
								height={20}
								width={20}
							/>
							{difficulty}
						</div>
						<div className='flex whitespace-nowrap items-center gap-[6px] text-[#4E5566] text-[14px] '>
							<Image
								src={"/assets/icons/hour.svg"}
								alt='user'
								height={20}
								width={20}
							/>
							{estimatedTime}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeatureCourse;
