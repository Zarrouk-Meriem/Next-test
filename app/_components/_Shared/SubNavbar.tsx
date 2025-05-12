// import logo from "@/app/public/LOGO.svg";
import Image from "next/image";
import SearchInput from "./SearchInput";
import BrowseDropdown from "./BrowseDropdown";
import { GoBell } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
function SubNavbar() {
	return (
		<div className='bg-white py-6 px-8 flex gap-[50px] justify-between items-center'>
			<div className=' flex gap-[50px] h-[43px]'>
				<Image priority height={40} width={153} src={"/LOGO.svg"} alt='logo' />
				<div className='gap-[16px] flex [@media(max-width:1289px)]:hidden'>
					<BrowseDropdown />
					<SearchInput />
				</div>
			</div>
			<div className='h-[48px] end flex gap-[24px] text-black items-center text-[16px]'>
				<GoBell className='size-[24px]' />
				<FiHeart className='size-[24px]' />
				<PiShoppingCartSimple className='size-[24px]' />
				<div className='justify-between flex gap-[12px] font-bold'>
					<button className='cursor-pointer whitespace-nowrap px-[24px] py-[14px] bg-[#FFEEE8] hover:text-[#794738] transition-all text-[#FF6636]'>
						Create Account
					</button>
					<button className='cursor-pointer whitespace-nowrap px-[24px] py-[14px] text-white bg-[#FF6636]'>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}

export default SubNavbar;
