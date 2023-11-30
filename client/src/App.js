import React, { useEffect, useState } from "react";
import "./App.css";
import MobileCategory from "./components/MobileCategory";
import MobileHero from "./components/MobileHero";
import MobileMenubar from "./components/MobileMenubar";
import MobileNavbar from "./components/MobileNavbar";
import MobileTrending from "./components/MobileTrending";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";

function App() {
	const [pageWidth, setPageWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Update the page width on window resize
		const handleResize = () => {
			setPageWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		// Clean up the event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{pageWidth < 600 ? (
				<>
					<MobileNavbar />
					<MobileHero />
					<MobileCategory />
					<MobileTrending />
					<MobileMenubar />
				</>
			) : (
				<>
					<Navbar />
					<Hero />
					<Category />
					<Trending />
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
