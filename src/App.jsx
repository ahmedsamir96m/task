import "./App.css";
import FlowChart from "./components/FlowChart/FlowChart";
import RectanglesSidebar from "./components/RectanglesSidebar/RectanglesSidebar";

function App() {
	return (
		<>
			<div
				style={{
					display: "flex",
				}}
			>
				<RectanglesSidebar />
				<FlowChart />
			</div>
		</>
	);
}

export default App;
