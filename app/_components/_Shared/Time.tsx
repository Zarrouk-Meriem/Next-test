import Image from "next/image";

function Time({ estimatedTime }: { estimatedTime: string }) {
	return (
		<div className='flex whitespace-nowrap items-center gap-[6px] text-[#4E5566] text-[14px] '>
			<Image src={"/assets/icons/hour.svg"} alt='user' height={20} width={20} />
			{estimatedTime}
		</div>
	);
}

export default Time;
