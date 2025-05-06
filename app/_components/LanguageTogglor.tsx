"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const LanguageToggler = () => {
	const { t, i18n } = useTranslation("translation");

	const [open, setOpen] = useState(false);

	const onChangeLanguage = (language: string) => {
		window.localStorage.setItem("language", language);
		i18n.changeLanguage(language);
	};

	return (
		<div
			className='shared_language_toggler'
			style={open ? { height: "34px !important" } : {}}
		>
			<div className='menu-item' onClick={() => setOpen(!open)}>
				{t(`language.${i18n.language}`)}
				<MdKeyboardArrowDown
					className='icon'
					style={
						open
							? { transform: "rotate(180deg)" }
							: { transform: "rotate(0deg)" }
					}
				/>
			</div>
			<div
				className='shared_language_toggler_btns'
				style={
					!open
						? { height: "0", opacity: "0", display: "none" }
						: { height: "100%", opacity: "100%" }
				}
			>
				<div
					className='shared_language_toggler_btns_btn'
					onClick={() => onChangeLanguage("en")}
				>
					<span className='fi fi-us'></span>
					{t("language.en")}
				</div>

				<div
					className='shared_language_toggler_btns_btn'
					onClick={() => onChangeLanguage("fr")}
				>
					<span className='fi fi-fr'></span>
					{t("language.fr")}
				</div>

				<div
					className='shared_language_toggler_btns_btn'
					onClick={() => onChangeLanguage("ar")}
				>
					<span className='fi fi-tn'></span>
					{t("language.ar")}
				</div>
			</div>
		</div>
	);
};

export default LanguageToggler;
