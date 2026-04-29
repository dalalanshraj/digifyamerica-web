import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const base =
  process.env.NODE_ENV === "production"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

// 🔑 Get Access Token
async function getAccessToken() {
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.PAYPAL_CLIENT_ID + ":" + process.env.PAYPAL_SECRET
        ).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  console.log("TOKEN RESPONSE:", data);

  if (!data.access_token) {
    throw new Error("Failed to get access token");
  }

  return data.access_token;
}

// 🧾 Create Order
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: "Amount required" });
    }

    const accessToken = await getAccessToken();

    const response = await fetch(`${base}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount,
            },
          },
        ],
        application_context: {
          return_url: "https://digifyamerica.com/success", // ✅ FIX
          cancel_url: "https://digifyamerica.com/cancel",  // ✅ FIX
        },
      }),
    });

    const data = await response.json();
    console.log("PAYPAL RESPONSE:", data);

    // ❌ PayPal error handling
    if (!data.links) {
      return res.status(500).json({
        error: "PayPal API failed",
        details: data,
      });
    }

    const approveLink = data.links.find(
      (link) => link.rel === "approve"
    );

    if (!approveLink) {
      return res.status(500).json({
        error: "Approval link not found",
        details: data,
      });
    }

    res.json({ url: approveLink.href });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 🧾 Capture Order (Success page ke liye)
app.post("/capture-order", async (req, res) => {
  try {
    const { orderID } = req.body;

    const accessToken = await getAccessToken();

    const response = await fetch(
      `${base}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    console.log("CAPTURE RESPONSE:", data);

    res.json(data);

  } catch (err) {
    console.error("CAPTURE ERROR:", err);
    res.status(500).json({ error: "Capture failed" });
  }
});

// 🚀 Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));