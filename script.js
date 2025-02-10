document.getElementById("openCase").addEventListener("click", () => {
    const skins = ["AK-47 | Redline", "AWP | Asiimov", "Karambit | Doppler", "P250 | Sand Dune"];
    const result = skins[Math.floor(Math.random() * skins.length)];
    document.getElementById("caseResult").innerHTML = `🎉 Тобі випав: <strong>${result}</strong>!`;
});

// Авторизація через Steam (простий редирект)
document.getElementById("loginBtn").addEventListener("click", () => {
    window.location.href = "http://localhost:3000/auth/steam";
});
