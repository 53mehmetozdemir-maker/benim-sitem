document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("mode-toggle");
    const body = document.body;

    // 1. Tema Kontrolü
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleBtn.textContent = "🌞";
    }

    // 2. Karanlık/Aydınlık Mod Değişimi
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

    // 3. İletişim Formu Gönderimi (Formspree)
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
                alert(`Teşekkürler ${isim}! Mesajın başarıyla ulaştı. 🚀`);
                this.reset();
            }).catch(() => {
                alert("Bir hata oluştu, lütfen tekrar dene.");
            });
        });
    }

    // 4. Scroll Animasyonu (Kartların büyümesi)
    const scrollCards = document.querySelectorAll(".card, .kart");
    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        scrollCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Sayfa açıldığında ilk kontrol
});