import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Views
import Home from "./views/Home";
import PageLayout from "./views/PageLayout";
import Contact from "./views/Contact";

// Components
import Header from "./components/Header";
import DataTableWithFilter from "./components/DataTableWithFilter";
import Footer from "./components/Footer";

// config files
import { componentConfig as distilleriesConfig } from "./components/config/distilleriesConfig";
import { componentConfig as auctionsConfig } from "./components/config/auctionsConfig";
import { componentConfig as distilleryInfoConfig } from "./components/config/distilleryInfo.config";
import { componentConfig as auctionInfoConfig } from "./components/config/auctionInfoConfig";
import AuctionsInfo from "./components/AuctionsInfo";

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
              component={() => (
                <DataTableWithFilter config={distilleriesConfig} />
              )}
            />
          }
        />
        <Route
          path="/distilleries/:slug"
          element={
            <PageLayout
              pageTitle="Distillery Information"
              pageParagraph="Please interact with the data below relating to your selected distillery."
              component={() => (
                <DataTableWithFilter config={distilleryInfoConfig} />
              )}
            />
          }
        />
        <Route
          path="/auctions"
          element={
            <PageLayout
              pageTitle="List of Auctions"
              pageParagraph="Search and select an auction name for more information."
              component={() => <DataTableWithFilter config={auctionsConfig} />}
            />
          }
        />
        <Route
          path="/auctions/:slug"
          element={
            <PageLayout
              pageTitle="Auction Information"
              pageParagraph="Please interact with the data below relating to your selected auction."
              component={() => (
                <DataTableWithFilter config={auctionInfoConfig} />
              )}
            />
          }
        />
        <Route
          path="/auctions_info/:slug"
          element={
            <PageLayout
              pageTitle="Auction Information"
              pageParagraph="Please interact with the data below relating to your selected auction."
              component={() => <AuctionsInfo />}
            />
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
