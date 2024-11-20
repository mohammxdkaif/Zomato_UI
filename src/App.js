import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import FoodCategory from "./components/FoodCategory/FoodCategory";
import Restaurants from "./components/Restaurants/Restaurants";
import RestaurantsCards from "./components/RestaurantsCards/RestaurantsCards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-middle">
      <Navbar />
      <Header />
      <FoodCategory />
      <Restaurants />
      <RestaurantsCards />
      <Footer />
    </div>
  );
}

export default App;
