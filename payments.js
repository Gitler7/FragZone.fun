const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/pay", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 5000, // Ціна в копійках (50 грн)
            currency: "uah",
            payment_method_types: ["card"],
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
