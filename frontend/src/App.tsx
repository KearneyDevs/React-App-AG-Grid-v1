import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Views
import Home from "./views/Home";
import PageLayout from "./views/PageLayout";
import About from "./views/About";
import Contact from "./views/Contact";

// Components
import Header from "./components/Header";
import DistilleriesInfo from "./components/DistilleriesInfo";
import DistilleryInfo from "./components/DistilleryInfo";
import Auction from "./components/Auction";
import Auctions from "./components/Auctions";
// import AuctionsInfo from "./components/AuctionsInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/distilleries"
          element={
            <PageLayout
              pageTitle="List of Distilleries"
              pageParagraph="Search and select a distillery name for more information."
              component={DistilleriesInfo}
            />
          }
        />
        <Route
          path="/distilleries/:slug"
          element={
            <PageLayout
              pageTitle="Distillery Information"
              pageParagraph="Please interact with the data below relating to your selected distillery."
              component={DistilleryInfo}
            />
          }
        />
        <Route
          path="/auctions"
          element={
            <PageLayout
              pageTitle="List of Auctions"
              pageParagraph="Search and select an auction name for more information."
              component={Auctions}
            />
          }
        />
        <Route
          path="/auctions/:slug"
          element={
            <PageLayout
              pageTitle="Auction Information"
              pageParagraph="Please interact with the data below relating to your selected auction."
              component={Auction}
            />
          }
        />
        <Route
          path="/about"
          element={
            <PageLayout pageTitle="About" pageParagraph="" component={About} />
          }
        />
        <Route
          path="/contact"
          element={
            <PageLayout
              pageTitle="Contact"
              pageParagraph=""
              component={Contact}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
