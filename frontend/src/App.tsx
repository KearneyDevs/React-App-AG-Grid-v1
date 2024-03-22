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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
