import Image from "next/image";
import type { IInstructor } from "../../_types/coursesSection";
import { getImageUrl } from "../../_lib/utils";

function User({ user, courseBy }: { user: IInstructor; courseBy: boolean }) {
	const {
		name,
		avatar: { alternativeText, url },
	} = user;
	return (
		<div className='flex gap-[12px] items-center '>
			<Image
				alt={(alternativeText as string) ?? "alternativeText"}
				src={getImageUrl(url as string)}
				height={28}
				width={28}
				className='rounded-[100%]  '
			/>
			<div>
				{courseBy && <span>course By</span>}
				<p className='text-[#4E5566]  text-[14px] font-[400]  '>{name}</p>
			</div>
		</div>
	);
}

export default User;
