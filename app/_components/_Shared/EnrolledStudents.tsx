import { formatStudentNumber } from "../../_lib/utils";

function EnrolledStudents({ enrolledStudents }: { enrolledStudents: number }) {
	return (
		<p className=' font-[500] flex gap-1'>
			{formatStudentNumber(enrolledStudents)}
			<span className=' text-[#8C94A3] font-light'> students</span>
		</p>
	);
}

export default EnrolledStudents;
