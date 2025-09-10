const cron = require("node-cron");
const axios = require("axios");

// Change to your Render URL
const SERVER_URL = "https://vobb-backend-1.onrender.com";

// Schedule job every 15 minutes
cron.schedule("*/15 * * * *", async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/deals`);
    console.log("✅ Pinged server:", res.status, new Date().toISOString());
  } catch (error) {
    console.error("❌ Error pinging server:", error.message);
  }
});
