import type { CourseProps } from "@/app/_types/coursesSection";
import Tag from "./Tag";
import Rating from "./Rating";
import { getTagColor } from "@/app/_lib/getTagColor";
import Image from "next/image";
import { formatPrice, formatStudentNumber } from "@/app/_lib/utils";
import User from "./User";

import Diff from "./Diff";
import Time from "./Time";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoCheckmarkOutline } from "react-icons/io5";
import Link from "next/link";

function Modal({ course }: { course: CourseProps | null }) {
	if (!course) return null;
	const {
		id,
		courseName,
		tag,
		rating,
		enrolledStudents,
		instructor,
		difficulty,
		price,
		oldPrice,
		estimatedTime,
		discount,
		detail,
	} = course;

	const colorTag = getTagColor(tag);

	return (
		<div
			className='[@media(max-width:1373px)]:hidden absolute  top-[-130px] justify-between bg-white h-[670px] w-[433px] right-0  shadow-[0px_-1px_29px_-7px_#1D20261F] border border-[#E9EAF0] flex flex-col items-center;
]   '
		>
			<div className=' flex flex-col '>
				<div className='flex p-[20px] pb-[16px]   flex-col gap-[10px] items-baseline'>
					<Tag tag={tag} colorTag={colorTag} />
					<p className='  text-[#1D2026] text-[18px] leading-[24px] font-[500]'>
						{courseName}
					</p>
				</div>
				<div className='flex flex-col  justify-between w-[100%]'>
					<div className='flex p-[20px] pt-0  items-center justify-between'>
						<User size={48} courseBy={true} user={instructor} />
						<span className='flex gap-1 items-center text-[#A1A5B3]'>
							<Rating rating={rating} />
							(357,914)
						</span>
					</div>
					<div className='flex px-[20px] items-center justify-between '>
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
						<Diff diff={difficulty} />
						<Time estimatedTime={estimatedTime} />
					</div>

					{/* Price - discount - favorite */}
					<div className='flex justify-between p-[20px] '>
						<div className='flex gap-[10px] items-center'>
							<div className='flex gap-[4px] items-center '>
								<p className=' text-[#1D2026] text-[24px] font-[400] '>
									{formatPrice(price)}
								</p>
								<span className='line-through  text-[#8C94A3] text-[16px] font-[400] '>
									{formatPrice(oldPrice)}
								</span>
							</div>
							<p className='bg-[#FFEEE8] text-[#FF6636] text-[14px] px-[12px] py-[8px] font-[500]'>
								{`${discount}% OFF`.toUpperCase()}
							</p>
						</div>
						<div className='bg-[#FFEEE8] text-[#FF6636] p-[12px] '>
							{!detail.favourite ? (
								<IoMdHeartEmpty className='size-[24px]' />
							) : (
								<IoMdHeart className='size-[24px]' />
							)}
						</div>
					</div>

					{/* What you will learn */}
					<div className='border-t border-b flex flex-col border-[#E9EAF0] gap-[8px] p-[20px]'>
						<h1 className='text-[12px]'>{`What you’ll learn`.toUpperCase()}</h1>
						<div className='text-[#6E7485] gap-[8px]  flex flex-col'>
							{detail?.youWillLearn
								.split("*")
								.map((learn: string, i: number) => (
									<div key={i} className='flex gap-[8px]  items-flex-start '>
										<div className='size-[24px]'>
											<IoCheckmarkOutline
												className='size-[24px]'
												color='#23BD33'
											/>
										</div>
										<div className='flex justify-baseline'>
											<p className='text-[14px]'>{learn}</p>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
			{/* buttons */}
			<div className='flex flex-col gap-[12px] px-[22px] w-[100%] pb-[22px]  text-[16px]'>
				<Link
					href={"/cart"}
					className='flex  gap-[12px] font-[600] justify-center items-center cursor-pointer whitespace-nowrap px-[24px] py-[14px] bg-[#FF6636] hover:text-[#794738] transition-all text-[#FFEEE8]'
				>
					<IoCartOutline size={24} />
					Add to Cart
				</Link>
				<Link
					href={`/course/${id}`}
					className='cursor-pointer text-center font-[600]   whitespace-nowrap px-[24px] py-[14px] bg-[#FFEEE8] hover:text-[#794738] transition-all text-[#FF6636]'
				>
					Course Detail
				</Link>
			</div>
		</div>
	);
}

export default Modal;
