import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

const Home = () => {
	const [displaySide, setDisplaySide] = useState(false);
	return (
		<>
			<Header diplayedSide={displaySide} setDisplayedSide={setDisplaySide} />
			<SideBar diplayedSide={displaySide} setDisplayedSide={setDisplaySide} />
		</>
	);
};

export default Home;
