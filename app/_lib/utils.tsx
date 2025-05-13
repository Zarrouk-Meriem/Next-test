export function getStrapiURL() {
	return process.env.STRAPI_URL ?? "http://localhost:1337";
}

export function getStrapiMedia(url: string | null) {
	if (url == null) return null;
	if (url.startsWith("data:")) return url;
	if (url.startsWith("http") || url.startsWith("//")) return url;
	return `${getStrapiURL()}${url}`;
}
export function formatStudentNumber(value: number): string {
	if (value >= 1_000_000) {
		return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
	}
	if (value >= 1_000) {
		return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
	}
	return value.toString();
}
export function getImageUrl(imageUrl: string) {
	return String(getStrapiURL() + imageUrl);
}
export function formatPrice(price: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	}).format(price);
}
