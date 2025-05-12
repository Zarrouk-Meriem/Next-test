function Tag({
	tag,
	colorTag,
}: {
	tag: string;
	colorTag: { bg: string; text: string };
}) {
	return (
		<span
			style={{
				backgroundColor: colorTag.bg,
				color: colorTag.text,
			}}
			className={`pt-1 pr-[6px] pb-1 pl-[6px] text-[10px]  font-[500]  `}
		>
			{tag.toUpperCase()}
		</span>
	);
}

export default Tag;
