import RectContainer from "../RectContainer/RectContainer";
import "./FlowChart.css";
export default function FlowChart() {
	const rectContainerStyles = {
		margin: 10,
		marginBottom: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	};
	const rectSpanStyles = { transform: "rotate(90deg)" };
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				background: "lightgray",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				{[1, 2, 3].map((item) => (
					<div key={item} style={{ ...rectContainerStyles }}>
						<RectContainer />
						{item === 3 ? (
							<span
								style={{ ...rectSpanStyles, position: "absolute", top: 75 }}
							>{`==>`}</span>
						) : (
							<span style={{ margin: 5 }}>{`==>`}</span>
						)}
					</div>
				))}
			</div>
			{/* CENTER */}
			<div style={{ display: "flex" }}>
				<div
					style={{
						...rectContainerStyles,
						marginLeft: "455px",
						marginTop: 40,
						marginBottom: 70,
					}}
				>
					<RectContainer
						styles={{ width: 100, height: 100, transform: "rotate(135deg)" }}
					/>
					<span
						style={{ ...rectSpanStyles, position: "absolute", top: 150 }}
					>{`==>`}</span>
				</div>
				<div
					style={{
						...rectContainerStyles,
						marginLeft: "70px",
					}}
				>
					<span
						style={{
							...rectSpanStyles,
							position: "absolute",
							top: 70,
							left: -45,
							transform: "rotate(0deg)",
						}}
					>{`==>`}</span>
					<RectContainer />
					<span
						style={{ ...rectSpanStyles, position: "absolute", top: 125 }}
					>{`==>`}</span>
					<div style={{ position: "absolute", top: 170 }}>
						<RectContainer />
					</div>
					<span
						style={{ ...rectSpanStyles, position: "absolute", top: 245 }}
					>{`==>`}</span>
					<div style={{ position: "absolute", top: 280 }}>
						<RectContainer />
					</div>
				</div>
			</div>

			<div
				style={{
					...rectContainerStyles,
					marginLeft: "430px",
					justifyContent: "left"
				}}
			>
				<RectContainer />
				<span
					style={{ ...rectSpanStyles, position: "absolute", top: 70, left: 60 }}
				>{`==>`}</span>
			</div>
			<div
				style={{
					...rectContainerStyles,
					marginLeft: "240px",
					justifyContent: "left"
				}}
			>
				<RectContainer />
				<span style={{ margin: 5 }}> {`<==`}</span>
				<RectContainer />
			</div>
		</div>
	);
}
