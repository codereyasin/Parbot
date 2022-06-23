import "./App.css";
import Fotter from "./app/components/bottom";
import Review from "./app/components/CsReview";
import Hero from "./app/components/Hero";
import Navbar from "./app/components/navbar";
import Shop from "./app/components/Shop";
import ShopbyP from "./app/components/ShopbyProducts";
import Subscription from "./app/components/subsciption";

function App() {
  return (
      <div >
        <Navbar />
        <Hero />
        <Shop />
        <ShopbyP />
        <Review />
        <Subscription />
        <Fotter />
      </div>
  );
}

export default App;
