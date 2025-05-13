import Image from "next/image";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Footer() {
	return (
		<div className='flex flex-col text-[#8C94A3]'>
			<div className='py-[100px] [@media(max-width:1300px)]:px-[100px] [@media(max-width:1300px)]:flex-col [@media(max-width:1300px)]:text-center [@media(max-width:1300px)]:gap-[20px] px-[300px] flex gap-[136px] items-center border-b-2 border-b-[#363B4780] bg-[#1D2026] text-[white] '>
				<div className=' flex flex-col gap-[32px]  '>
					<h1 className='text-[40px] leading-[50px] font-[600] '>
						Start learning with 67.1k students around the world.
					</h1>
					<div className='flex gap-[16px] [@media(max-width:1300px)]:justify-center '>
						<button className='bg-[#FF6636]  hover:[box-shadow:0px_6px_20px_0px_#cc532b4b] transition-all  text-[white] gap-[12px] cursor-pointer  px-[24px] py-[10px] text-[16px] font-[600]'>
							Join the Family
						</button>

						<button className='bg-[#FFFFFF0D] hover:[box-shadow:0px_6px_20px_0px_#cc532b4b] transition-all  text-[white] gap-[12px] cursor-pointer   px-[24px] py-[10px] text-[16px] font-[600]'>
							Browse all courses
						</button>
					</div>
				</div>

				<div className='flex gap-[24px] '>
					<div className='flex flex-col gap-[12px] justify-between'>
						<p className='text-[40px] leading-[50px] font-[600]  '>6.3k</p>
						<span className='text-[16px] leading-[22px] font-[500] whitespace-nowrap text-[#B7BAC7] '>
							Online courses
						</span>
					</div>
					<div className='flex flex-col gap-[12px] justify-between'>
						<p className='text-[40px] leading-[50px] font-[600]  '>26k</p>
						<span className='text-[16px] leading-[22px] font-[500] whitespace-nowrap text-[#B7BAC7]  '>
							Certified Instructor
						</span>
					</div>
					<div className='flex flex-col gap-[12px] justify-between'>
						<p className='text-[40px] leading-[50px] font-[600]  '>99.9%</p>
						<span className='text-[16px] leading-[22px] font-[500] whitespace-nowrap text-[#B7BAC7]  '>
							Success Rate
						</span>
					</div>
				</div>
			</div>
			<div className='py-[100px] text-[#8C94A3]  px-4  px-auto md:px-6 lg:py-24 flex items-center border-b-2 border-b-[#363B4780] bg-[#1D2026] font-[400] [@media(max-width:1300px)]:flex-col [@media(max-width:1300px)]:gap-[40px] justify-center [@media(max-width:1300px)]:text-center '>
				<div className=' flex flex-col gap-[20px]  w-[424px] [@media(max-width:1300px)]:justify-center [@media(max-width:1300px)]:items-center '>
					<Image
						priority
						height={46}
						width={175.1999969482422}
						src={"/assets/LOGO footer.png"}
						alt='logo'
					/>

					<p className='text-[14px] text-[#8C94A3] leading-[22px] font-[400]'>
						Aliquam rhoncus ligula est, non pulvinar elit
						<br /> convallis nec. Donec mattis odio at.
					</p>
					<div className='mt-[6px] flex gap-[12px]  '>
						<div className='bg-[#363B4766]'>
							<FaFacebookF className='hover:bg-[#FF6636] cursor-pointer hover:[box-shadow:0px_6px_20px_0px_#CC522B80] transition-all p-[14px] shrink-0 size-[46px] text-[white] ' />
						</div>

						<div className='bg-[#363B4766]'>
							<GrInstagram className='hover:bg-[#FF6636] cursor-pointer hover:[box-shadow:0px_6px_20px_0px_#CC522B80] transition-all p-[14px] shrink-0 size-[46px] text-[white] ' />
						</div>

						<div className='bg-[#363B4766]'>
							<FaLinkedinIn className='hover:bg-[#FF6636] cursor-pointer hover:[box-shadow:0px_6px_20px_0px_#CC522B80] transition-all p-[14px] shrink-0 size-[46px] text-[white] ' />
						</div>
						<div className='bg-[#363B4766]'>
							<FaTwitter className='hover:bg-[#FF6636] cursor-pointer hover:[box-shadow:0px_6px_20px_0px_#CC522B80] transition-all p-[14px] shrink-0 size-[46px] text-[white] ' />
						</div>
						<div className='bg-[#363B4766]'>
							<FaYoutube className='hover:bg-[#FF6636] cursor-pointer hover:[box-shadow:0px_6px_20px_0px_#CC522B80] transition-all p-[14px] shrink-0 size-[46px] text-[white] ' />
						</div>
					</div>
				</div>

				<div className='flex gap-[24px] [@media(max-width:755px)]:flex-col [@media(max-width:755px)]:gap-[30px]'>
					<div className='flex flex-col gap-[20px] w-[200px] [@media(max-width:755px)]:gap-[10px] '>
						<p className='text-[14px] uppercase  text-[white]  font-[500] mb-[20px] [@media(max-width:755px)]:mb-[0px] '>
							Top 4 Category
						</p>
						<ul className='flex flex-col gap-[8px] whitespace-nowrap'>
							<li>Development</li>
							<li>Finance & Accounting</li>
							<li>Design</li>
							<li>Design</li>
						</ul>
					</div>
					<div className='flex flex-col gap-[20px] w-[200px] '>
						<p className='text-[14px] uppercase  text-[white]  font-[500] mb-[20px] [@media(max-width:755px)]:mb-[0px] '>
							Quick Links
						</p>
						<ul className='flex flex-col gap-[8px] whitespace-nowrap'>
							<li>About</li>
							<li>Become Instructor</li>
							<li>Contact</li>
							<li>Career</li>
						</ul>
					</div>
					<div className='flex flex-col gap-[20px] w-[200px] '>
						<p className='text-[14px] uppercase  text-[white]  font-[500] mb-[20px] [@media(max-width:755px)]:mb-[0px] '>
							Support
						</p>
						<ul className='flex flex-col gap-[8px] whitespace-nowrap'>
							<li>Help Center</li>
							<li>FAQs</li>
							<li>Terms & Condition</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<ul className='flex flex-col gap-[8px] [@media(max-width:750px)]:items-center  '>
						<p className='text-[14px] uppercase    text-[white]  font-[500] mb-[20px] [@media(max-width:755px)]:mb-[0px] '>
							Download our app
						</p>
						<Image
							priority
							height={58}
							width={163}
							src={"/assets/Download our app (1).svg"}
							alt='logo'
							className='p-[14px] [@media(max-width:750px)]:p-[8px] cursor-pointer'
						/>
						<Image
							priority
							height={58}
							width={163}
							src={"/assets/Download our app.svg"}
							alt='logo'
							className='p-[14px] [@media(max-width:750px)]:p-[8px]   cursor-pointer'
						/>
					</ul>
				</div>
			</div>
			<div className='flex  px-[300px]  px-auto md:px-6 lg:py-6 bg-[#1D2026] [@media(max-width:1300px)]:text-center  justify-center text-left whitespace-nowrap [@media(max-width:755px)]:px-[0]'>
				© 2021 - Eduflex. Designed by
				<b className='text-white ml-1'>Templatecookie</b> . All rights reserved
			</div>
		</div>
	);
}

export default Footer;
