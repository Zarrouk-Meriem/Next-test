import Image from "next/image";

function Rating({ rating }: { rating: number }) {
	return (
		<span className='flex gap-[4px] text-[#1D2026] items-center justify-between text-[14px] font-[500]'>
			<Image
				alt='star'
				src={"/assets/icons/Star.svg"}
				height={16}
				width={16}
				className='mb-[2px]'
			/>
			{rating.toFixed(1)}
		</span>
	);
}

export default Rating;
