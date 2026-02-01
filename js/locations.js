window.renderLocationsSection = function(container, data) {
    container.innerHTML = `
        <div class="gps-card">
            <h3>📍 Твій навігатор</h3>
            <p>Натисніть кнопку, щоб знайти найближчий об'єкт поруч із вами:</p>
            <div class="gps-grid">
                <button class="gps-btn" onclick="searchNearby('аптека')">💊 Аптека</button>
                <button class="gps-btn" onclick="searchNearby('лікарня')">🏥 Лікарня</button>
                <button class="gps-btn" onclick="searchNearby('пункт незламності')">⚡ Пункт допомоги</button>
                <button class="gps-btn" onclick="searchNearby('супермаркет')">🛒 Продукти</button>
                <button class="gps-btn" onclick="searchNearby('бювет')">💧 Вода (Бювет)</button>
            </div>
            <button class="gps-main-btn" onclick="showMyPosition()">🎯 Де я зараз?</button>
        </div>
        <div id="locations-list">${data.items.map(loc => `<div class="loc-item"><strong>${loc.name}</strong><br>${loc.address}</div>`).join('')}</div>
    `;
};

window.searchNearby = function(type) {
    const url = `https://www.google.com/maps/search/${encodeURIComponent(type)}/@?api=1`;
    window.open(url, '_blank');
};

window.showMyPosition = function() {
    window.open("https://www.google.com/maps/search/?api=1&query=my+location", '_blank');
};
