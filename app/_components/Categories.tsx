import { FiArrowRight } from "react-icons/fi";

function Categories() {
	return (
		<div className='gap-[40px] flex flex-col items-center justify-center'>
			<h1 className='text-[40px]'>Browse top category</h1>
			<div className='grid grid-cols-4 '></div>
			<div className='self-center flex gap-[12px]'>
				<h4>We have more category & subcategory. </h4>
				<span className='text-[#FF6636]'>
					Browse All <FiArrowRight />
				</span>
			</div>
		</div>
	);
}

export default Categories;
