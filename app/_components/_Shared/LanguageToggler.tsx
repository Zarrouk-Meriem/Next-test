"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const LanguageToggler = () => {
	const [open, setOpen] = useState(false);

	return (
		<div
			className='menu-item flex gap-[6px] justify-between items-center'
			onClick={() => setOpen(!open)}
		>
			{/* {t(`language.${i18n.language}`)} */}
			English
			<MdKeyboardArrowDown
				className='icon h-[12px] w-[12px]'
				style={
					open ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }
				}
			/>
		</div>
	);
};

export default LanguageToggler;
// /* English */

// width: 47px;
// height: 22px;

// /* Body Medium/400 */
// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 22px;
// /* identical to box height, or 157% */
// letter-spacing: -0.01em;

// /* Gray/400 */
// color: #A1A5B3;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
