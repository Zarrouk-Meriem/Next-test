import { MdKeyboardArrowDown } from "react-icons/md";

function BrowseDropdown() {
	return (
		<div className='menu-item py-[12px] px-[18px] flex gap-6 justify-between items-center text-[#4E5566] font-sans font-normal text-base border-1 border-[#E9EAF0]  hover:border-[#FFDDD1] '>
			Browse
			<MdKeyboardArrowDown className='h-[24px] w-[24px]' />
		</div>
	);
}

export default BrowseDropdown;
