const iconMap: Record<string, string> = {
	LABEL_ICON: "/assets/icons/LabelIcon.svg",
	BUSINESS_ICON: "/assets/icons/business.svg",
	FINANCE_ICON: "/assets/icons/finance.svg",
	IT_ICON: "/assets/icons/it.svg",
	PERSONAL_ICON: "/assets/icons/personal.svg",
	OFFICE_ICON: "/assets/icons/office.svg",
	MARKETING_ICON: "/assets/icons/marketing.svg",
	PHOTO_ICON: "/assets/icons/photo.svg",
	LIFESTYLE_ICON: "/assets/icons/lifestyle.svg",
	DESIGN_ICON: "/assets/icons/design.svg",
	HEALTH_ICON: "/assets/icons/health.svg",
	MUSIC_ICON: "/assets/icons/music.svg",
};

export function getCategoryIcon(name: string) {
	return iconMap[name] ?? null;
}
