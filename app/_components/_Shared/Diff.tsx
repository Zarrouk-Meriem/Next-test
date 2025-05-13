import { FaMountain } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FiBarChart } from "react-icons/fi";

function Diff({ diff }: { diff: string }) {
	return (
		<div className='flex whitespace-nowrap  gap-[6px] items-center  '>
			{diff === "Beginner" && (
				<FiBarChart className='text-[#E34444] size-[20px]  ' />
			)}
			{diff === "Intermediate" && (
				<FaMountain className='text-[#564FFD]  size-[20px] ' />
			)}
			{diff === "Advanced" && (
				<FaFireFlameCurved className='text-[#eea00f] size-[20px]  ' />
			)}
			<p className=' text-[#4E5566] text-[14px] font-[400]  '>{diff}</p>
		</div>
	);
}

export default Diff;
