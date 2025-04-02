function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    let emoji = "⏳"; // Default emoji
    if (hours >= 6 && hours < 12) emoji = "☀️"; // Morning
    else if (hours >= 12 && hours < 18) emoji = "🌤️"; // Afternoon
    else if (hours >= 18 && hours < 21) emoji = "🌆"; // Evening
    else emoji = "🌙"; // Night
    
    document.getElementById('clock').innerHTML = `${emoji} ${hours}:${minutes}:${seconds}`;
    document.getElementById('character').textContent = emoji;
}
setInterval(updateClock, 1000);
updateClock();