import "./App.css";
// import Auction from "./components/Auction";
// import Auctions from "./components/Auctions";
// import DistilleriesInfo from "./components/DistilleriesInfo";
// import AuctionsInfo from "./components/AuctionsInfo";
// import DistilleryInfo from "./components/DistilleryInfo";
import NewDistilleryForm from "./components/forms/NewDistilleryForm";

function App() {
  return (
    <div className="App">
      <h1>Whisky Hunter</h1>

      {/* <h2>Catawiki Whisky Auction</h2>
      <Auction />

      <h2>Distilleries Information</h2>
      <DistilleriesInfo />

      <h2>Auctions Information</h2>
      <AuctionsInfo />

      <h2>All Auctions</h2>
      <Auctions />

      <h2>Speyside Distillery Information</h2>
      <DistilleryInfo /> */}

      <NewDistilleryForm />
    </div>
  );
}

export default App;
