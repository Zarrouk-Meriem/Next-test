import type { CoursesSectionProps } from "@/app/_types/coursesSection";
import Course from "../_Shared/Course";

function CoursesSection({ data }: { readonly data: CoursesSectionProps }) {
	const { heading, course } = data;
	return (
		<div key={heading} className='flex flex-col gap-[40px]'>
			<section className='container flex flex-col px-4 py-6 mx-auto md:px-6 lg:py-24 gap-[40px] justify-center '>
				<h1 className='text-[40px] leading-[50px] font-[600] text-center'>
					{heading}
				</h1>
				<div className='grid  self-center grid-cols-5  w-[100%] [@media(min-width:1373px)]:grid-cols-5 [@media(min-width:1024px)]:grid-cols-4 [@media(max-width:1024px)]:grid-cols-2  gap-[25px]'>
					{course?.map((course) => (
						<Course key={course.image.documentId} course={course} />
					))}
				</div>
			</section>
		</div>
	);
}

export default CoursesSection;
