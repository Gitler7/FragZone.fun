const express = require("express");
const cors = require("cors");
const SteamAuth = require("steam-openid");
require("dotenv").config();

const app = express();
app.use(cors());

const steam = new SteamAuth({
    realm: "http://localhost:3000/",
    returnUrl: "http://localhost:3000/auth/steam/return",
    apiKey: process.env.STEAM_API_KEY
});

// Авторизація через Steam
app.get("/auth/steam", (req, res) => {
    res.redirect(steam.getRedirectUrl());
});

app.get("/auth/steam/return", async (req, res) => {
    try {
        const user = await steam.authenticate(req);
        res.json({ success: true, user });
    } catch (err) {
        res.json({ success: false, message: "Помилка авторизації!" });
    }
});

app.listen(3000, () => console.log("✅ Сервер запущено на порті 3000"));
