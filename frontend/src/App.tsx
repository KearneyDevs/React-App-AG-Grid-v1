import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Auction from "./components/Auction";
// import Auctions from "./components/Auctions";
// import DistilleriesInfo from "./components/DistilleriesInfo";
// import AuctionsInfo from "./components/AuctionsInfo";
import NewDistilleryForm from "./components/forms/NewDistilleryForm";
import DistillInfo from "./views/DistillInfo";
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/distilleries" Component={DistillInfo} />
        <Route path="/distilleries/:slug" Component={DistillInfo} />
        <Route path="/auctions" Component={DistillInfo} />
        <Route path="/auctions/:slug" Component={DistillInfo} />
        <Route path="/about" Component={DistillInfo} />
        <Route path="/contact" Component={DistillInfo} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
