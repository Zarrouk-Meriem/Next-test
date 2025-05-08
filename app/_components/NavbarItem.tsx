"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarItem({ href, content }: { href: string; content: string }) {
	const pathname = usePathname();

	return (
		<li
			className={`p-[16px] text-[14px] text-[#8C94A3] font-normal mt-[2px] pb-[18px] hover:text-white  ${
				pathname === href
					? "shadow-[0_-2px_0_0_#FF6636] text-white font-medium"
					: ""
			}`}
		>
			<Link href={href}>{content}</Link>
		</li>
	);
}

export default NavbarItem;
//  border-t-amber-600 border-t-2 hover:text-white
