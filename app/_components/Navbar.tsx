import NavbarItem from "./NavbarItem";
import LanguageToggler from "./LanguageToggler";

function Navbar() {
	return (
		<div className=' bg-[#1D2026]'>
			<div className='w-auto flex justify-between mx-[32px] h-[53px]'>
				<ul className='flex gap-x-[8px] h-[52px]'>
					<NavbarItem href='/' content='Home' />
					<NavbarItem href='/courses' content='Courses' />
					<NavbarItem href='/about' content='About' />
					<NavbarItem href='/contact' content='Contact' />
					<NavbarItem href='/instructor' content='Become an Instructor' />
				</ul>
				<div className='flex items-center'>
					{/* Currency toggler */}
					<LanguageToggler />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
