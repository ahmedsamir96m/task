import { allowDrop, drop } from "../Rectangles/methods";

export default function RectContainer({styles}) {
	return (
		<div
			style={{
				width: 150,
				height: 50,
				border: "2px dashed gray",
        ...styles
			}}
			onDrop={(e) => drop(e)}
			onDragOver={(e) => allowDrop(e)}
		>
		</div>
	);
}
