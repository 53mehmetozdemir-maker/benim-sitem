function toggleDarkMode() {
  document.body.classList.toggle("light-mode");
}

document.getElementById("iletisim-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mesajınız gönderildi! Teşekkürler 😊");
  this.reset();
});

function mesajGoster() {
  alert("Bana ulaşmak için formu doldurabilirsiniz!");
}