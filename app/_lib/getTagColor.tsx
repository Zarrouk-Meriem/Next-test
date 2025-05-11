const colorMap: Record<
	string,
	{
		bg: string;
		text: string;
	}
> = {
	Design: {
		bg: "#FFEEE8",
		text: "#993D20",
	},
	Developments: {
		bg: "#EBEBFF",
		text: "#342F98",
	},
	Business: {
		bg: "#E1F7E3",
		text: "#15711F",
	},
	Marketing: {
		bg: "#EBEBFF",
		text: "#882929",
	},
	"IT & Software": {
		bg: "#FFF0F0",
		text: "#882929",
	},
	Music: {
		bg: "#FFF2E5",
		text: "#65390C",
	},
	"Health & Fitness": {
		bg: "#E1F7E3",
		text: "#15711F",
	},
	Lifestyle: {
		bg: "#FFF2E5",
		text: "#65390C",
	},
	"Personal Development": {
		bg: "#FFF0F0",
		text: "#882929",
	},
};

export function getTagColor(tag: string) {
	return colorMap[tag] ?? "";
}
