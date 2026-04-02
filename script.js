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

// Scroll ile görünür olduğunda Hakkımda, Projelerim ve İletişim kartlarını büyüt
const scrollCards = document.querySelectorAll("#hakkimda .card, #projeler .kart, #iletisim .card");

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85; // ekranın %85’inde tetikleme

    scrollCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("active"); // kart görünür olunca büyür
        }
    });
}

// Scroll ve load eventleri ile tetikle
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
window.addEventListener("resize", animateOnScroll);