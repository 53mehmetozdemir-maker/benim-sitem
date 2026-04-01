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
        
        // Basit bir validasyon örneği
        const isim = document.getElementById("isim").value;
        alert(`Teşekkürler ${isim}! Mesajınız başarıyla gönderildi. 😊`);
        
        this.reset();
    });
}