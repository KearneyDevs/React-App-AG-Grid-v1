import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Auction from "./components/Auction";
// import Auctions from "./components/Auctions";
import DistilleriesInfo from "./components/DistilleriesInfo";
// import AuctionsInfo from "./components/AuctionsInfo";
import NewDistilleryForm from "./components/forms/NewDistilleryForm";
import DistillInfo from "./views/DistillInfo";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import DistilleryInformation from "./views/DistilleryInformation";
import DistilleryInfo from "./components/DistilleryInfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/distilleries"
          element={
            <DistillInfo
              distilleryTable={DistilleriesInfo}
              pageTitle="List of Distilleries"
              pagePara="Search and select a distillery name for more information."
            />
          }
        />
        <Route
          path="/distilleries/:slug"
          element={
            <DistillInfo
              distilleryTable={DistilleryInfo}
              pageTitle="Distillery Information"
            />
          }
        />
        {/* <Route path="/auctions" Component={DistillInfo} />
        <Route path="/auctions/:slug" Component={DistillInfo} /> */}
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
