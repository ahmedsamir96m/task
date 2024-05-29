import { allowDrop, drag, drop } from "./methods";
import { useState } from "react";

const rectStyles = {
	width: 150,
	height: 50,
	cursor: "pointer",
};

const Rect = ({ id, color, borderRadius, styles }) => (
	<div
		data-id={id}
		onDragStart={(e) => drag(e)}
		draggable="true"
		onClick={() => console.log(styles)}
		style={{
			...rectStyles,
			background: color,
			borderRadius: borderRadius || 0,
			cursor: "grab",
			...styles
		}}
	></div>
);

export default function Rectangles({rectangles}) {
	return (
		<ul
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				rowGap: 20,
				paddingTop: 20,
				height: "90%",
			}}
			onDrop={(e) => drop(e)}
			onDragOver={(e) => allowDrop(e)}
		>
			{rectangles.map((rect) => (
				<Rect
					key={rect.id}
					id={rect.id}
					color={rect.color}
					borderRadius={rect.borderRadius}
					styles={rect.styles}
				/>
			))}
		</ul>
	);
}
