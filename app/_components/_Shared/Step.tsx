import { getImageUrl } from "@/app/_lib/utils";
import type { IStep } from "@/app/_types/becomeAnInstructor";
import Image from "next/image";

function Step({ step }: { step: IStep }) {
	const {
		text,
		icon: { url, alternativeText },
	} = step;
	return (
		<div className='flex gap-[16px] items-center  '>
			<Image
				alt={String(alternativeText)}
				height={52}
				width={52}
				src={getImageUrl(String(url))}
			/>
			<p className='text-[16px] leading-[24px] font-[400] w-[312px] text-[#6E7485] '>
				{text}
			</p>
		</div>
	);
}

export default Step;
