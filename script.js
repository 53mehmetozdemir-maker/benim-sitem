const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// 1. Tema Kontrolü (Sayfa yüklendiğinde)
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "🌞";
}

// 2. Mod Değiştirme
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        toggleBtn.textContent = "🌞";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});

// 3. İletişim Formu Submit
const form = document.getElementById("iletisim-form");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const isim = document.getElementById("isim").value;

        // 🔥 Formspree gönderimi eklendi (bozmadan)
        fetch("https://formspree.io/f/xpqolgpj", {
            method: "POST",
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(() => {
            alert(`Teşekkürler ${isim}! Mesajınız bana ulaştı 🚀`);
            this.reset();
        }).catch(() => {
            alert("Bir hata oluştu, tekrar dene 😢");
        });
    });
}