import express from "express";
const router = express.Router();

// Define routes

router.get("/auction_data/:slug/", async (req, res) => {
  const { slug } = req.params;
  try {
    const response = await fetch(
      `https://whiskyhunter.net/api/auction_data/${slug}/`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/auctions_data/", async (req, res) => {
  try {
    const response = await fetch(`https://whiskyhunter.net/api/auctions_data/`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/auctions_info", async (req, res) => {
  try {
    const response = await fetch(`https://whiskyhunter.net/api/auctions_info`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/distilleries_info/", async (req, res) => {
  try {
    const response = await fetch(
      `https://whiskyhunter.net/api/distilleries_info/`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/distillery_data/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const response = await fetch(
      `https://whiskyhunter.net/api/distillery_data/${slug}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
