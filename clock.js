function updateClock() {
    // Gauti dabartinį laiką
    const now = new Date();

    // Formatuoti laiką: valandos:minutės:sekundės
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Sukurti laiko eilutę
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Atvaizduoti laiką HTML dokumente
    const clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;
}

// Nustatyti intervalą, kad funkcija būtų iškviesta kas sekundę
setInterval(updateClock, 1000);

// Pirmą kartą iškviesti funkciją, kad atnaujintų laiką nedelsiant po puslapio įkėlimo
updateClock();