import Image from "next/image";
import type { IInstructor } from "../../_types/coursesSection";
import { getImageUrl } from "../../_lib/utils";

function User({
	user,
	courseBy,
	size = 28,
}: {
	user: IInstructor;
	courseBy: boolean;
	size?: number;
}) {
	const {
		name,
		avatar: { alternativeText, url },
	} = user;
	return (
		<div className='flex gap-[12px] items-center  text-[#A1A5B3] '>
			<Image
				alt={(alternativeText as string) ?? "alternativeText"}
				src={getImageUrl(url as string)}
				height={size}
				width={size}
				className='rounded-[100%]  '
				quality={100}
				priority
			/>
			<div>
				{courseBy && <span>course By</span>}
				<p className='text-[#4E5566]  text-[14px] font-[400]  '>{name}</p>
			</div>
		</div>
	);
}

export default User;
