import { LuSearch } from "react-icons/lu";

function SearchInput() {
	return (
		<div className='  border-[1px] py-[12px] px-[18px] border-[#E9EAF0] flex gap-[12px] justify-baseline items-center w-[424px] font-sans font-normal text-base text-[#8C94A3] hover:border-[#FFDDD1] focus-within:border-[#FF6636] border-1"'>
			<LuSearch className='h-[24px] w-[24px] text-black mb-1' />
			<input
				placeholder='What do you want learn...'
				type='text'
				className='border-none focus:outline-0 text-black placeholder:text-[#8C94A3]'
			/>
		</div>
	);
}

export default SearchInput;
