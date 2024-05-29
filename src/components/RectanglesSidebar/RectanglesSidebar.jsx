import { useState } from "react";
import Rectangles from "../Rectangles/Rectangles";
import "./RectangleSidebar.css";
const RectanglesSidebar = () => {
	const [rectangles, setRectangles] = useState([
		{ id: 1, color: "purple", borderRadius: "50px" },
		{ id: 2, color: "blue" },
		{ id: 3, color: "darkorange", styles: { width: "100px", height: "100px" } },
	]);
	return (
		<aside className="rectAside" id="rectAside">
			<Rectangles rectangles={rectangles} />
			<div>
				<button
					onClick={() => {
						let rectType = prompt("blue or purple ?").toLowerCase()
						if (rectType === "blue") {
							setRectangles((prevState) => [
								...prevState,
								{ id: prevState.length + 1, color: "blue" },
							]);
						} else if (rectType === "purple") {
							setRectangles((prevState) => [
								...prevState,
								{ id: 1, color: "purple", borderRadius: "50px" },
							]);
						}
					}}
				>
					Add Rect
				</button>
			</div>
		</aside>
	);
};

export default RectanglesSidebar;
