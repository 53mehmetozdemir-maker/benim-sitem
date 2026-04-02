const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// Tema kontrolü (sayfa yüklendiğinde)
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "🌞";
}

// Mod değiştirme
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

// İletişim formu submit
const form = document.getElementById("iletisim-form");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const isim = document.getElementById("isim").value;

        fetch("https://formspree.io/f/xpqolgpj", {
            method: "POST",
            body: new FormData(this),
            headers: { 'Accept': 'application/json' }
        }).then(() => {
            alert(`Teşekkürler ${isim}! Mesajınız bana ulaştı 🚀`);
            this.reset();
        }).catch(() => {
            alert("Bir hata oluştu, tekrar dene 😢");
        });
    });
}

// Scroll ile görünür olduğunda Hakkımda, Projelerim ve İletişim kartlarını büyüt
const scrollCards = document.querySelectorAll("#hakkimda .card, #projeler .kart, #iletisim .card");

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.95; // Mobil uyumlu tetikleme

    scrollCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("active");
        } else {
            card.classList.remove("active"); // geri kaydırınca küçülür
        }
    });
}

// Scroll, load ve resize eventleri
['scroll', 'load', 'resize'].forEach(evt => {
    window.addEventListener(evt, animateOnScroll);
});