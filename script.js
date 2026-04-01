// Toggle butonu
const toggleBtn = document.getElementById("mode-toggle");

// Dark/Light mod toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Sembol değişimi (sadece ikon, arka plan yok)
  toggleBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// İletişim formu submit
const form = document.getElementById("iletisim-form");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Burada mail gönderme kısmı sunucu ile yapılmalı, frontend ile direkt mail atılamaz
    alert("Mesajınız gönderildi! Teşekkürler 😊");
    this.reset();
  });
}

// Butonla mesaj göster
function mesajGoster() {
  alert("Bana ulaşmak için formu doldurabilirsiniz!");
}