import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Auction from "./components/Auction";
// import Auctions from "./components/Auctions";
// import DistilleriesInfo from "./components/DistilleriesInfo";
// import AuctionsInfo from "./components/AuctionsInfo";
import NewDistilleryForm from "./components/forms/NewDistilleryForm";
import DistillInfo from "./views/DistillInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={DistillInfo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
