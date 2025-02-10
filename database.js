const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Підключено до бази даних!"))
    .catch(err => console.log("❌ Помилка підключення:", err));

const UserSchema = new mongoose.Schema({
    steamId: String,
    balance: Number,
    inventory: [String]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
