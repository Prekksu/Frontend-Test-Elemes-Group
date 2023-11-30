import "./App.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Category />
			<Trending />
			<Footer />
		</>
	);
}

export default App;
