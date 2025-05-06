import LanguageToggler from "./LanguageTogglor";

function Navbar() {
	return (
		<div className='w-auto'>
			<ul className='flex gap-x-[8px]'>
				<li className='p-[16px]'>Home</li>
				<li className='p-[16px]'>Courses</li>
				<li className='p-[16px]'>About</li>
				<li className='p-[16px]'>Contact</li>
				<li className='p-[16px]'>Become an Instructor</li>
			</ul>
			<div className='flex '>
				{/* Currency toggler */}
				<LanguageToggler />
			</div>
		</div>
	);
}

export default Navbar;
