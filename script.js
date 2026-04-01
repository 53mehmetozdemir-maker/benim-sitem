const toggleBtn = document.getElementById("mode-toggle");

// Dark/Light mod toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Sembol değişimi
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌞"; // Light mode → güneş
  } else {
    toggleBtn.textContent = "🌙"; // Dark mode → ay
  }
});

// İletişim formu submit
const form = document.getElementById("iletisim-form");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mesajınız gönderildi! Teşekkürler 😊");
    this.reset();
  });
}

// Butonla mesaj göster
function mesajGoster() {
  alert("Bana ulaşmak için formu doldurabilirsiniz!");
}