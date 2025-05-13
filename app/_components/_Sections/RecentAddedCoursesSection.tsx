"use client";
import type { RecentCoursesSectionProps } from "@/app/_types/recentAddedCoursesSection";
import RecentCourse from "../_Shared/RecentCourse";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import Modal from "../_Shared/Modal";
import { useState } from "react";
import type { CourseProps } from "@/app/_types/coursesSection";

function RecentAddedCourses({
	data,
}: {
	readonly data: RecentCoursesSectionProps;
}) {
	const { heading, footer, course: courses } = data;
	const [clickedCourse, setClickedCourse] = useState<CourseProps | null>(null);

	return (
		<div className='flex '>
			<section className='container  items-center justify-center flex flex-col px-4 py-6 mx-auto md:px-6 lg:py-24 gap-[40px]  '>
				<h1 className='text-[32px] leading-[40px] font-[600] '>{heading}</h1>

				<div className='flex gap-[24px] relative  [@media(max-width:755px)]:grid-cols-1 [@media(max-width:1373px)]:grid [@media(max-width:1373px)]:grid-cols-2 '>
					{courses?.map((course) => (
						<div key={course.id}>
							<RecentCourse
								studentIcon={true}
								course={course}
								setClickedCourse={setClickedCourse}
							/>
							<Modal course={clickedCourse} />
						</div>
					))}
				</div>
				<div className='bg-[#FFEEE8] text-[#FF6636] gap-[12px] cursor-pointer flex items-center   px-[24px] py-[10px] text-[16px] font-[600] hover:underline'>
					<Link href={String(footer?.link?.url)}>{footer?.link?.text}</Link>
					<IoArrowForwardOutline className='text-[24px]' />
				</div>
			</section>
		</div>
	);
}

export default RecentAddedCourses;
