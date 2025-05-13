import Image from "next/image";
import Link from "next/link";

function notFound() {
	return (
		<div className='flex flex-col gap-[40px] items-center justify-center min-h-svh'>
			<Image
				alt={"404"}
				src={"/assets/404/039-error-404-colour.svg"}
				height={400}
				width={400}
			/>
			<Link
				href={"/"}
				className='cursor-pointer whitespace-nowrap px-[24px] py-[12px] bg-[#FFEEE8] hover:text-[#794738] transition-all text-[#FF6636] rounded-xl font-[600] mb-[150px] '
			>
				Back to Home
			</Link>
		</div>
	);
}

export default notFound;
