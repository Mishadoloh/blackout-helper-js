window.renderHeatSection = function(container, heatData) {
    if (!container || !heatData) return;


    const header = document.createElement('div');
    header.className = 'heat-header animate-in';
    header.innerHTML = `
        <div class="heat-status-bar"> Збереження тепла: Активне</div>
    `;
    container.appendChild(header);

    const heatGrid = document.createElement('div');
    heatGrid.className = 'heat-grid';

    if (heatData.items) {
        heatData.items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = item.length < 50 ? 'heat-card-mini fade-item' : 'heat-card-full fade-item';
            card.style.animationDelay = `${index * 0.07}s`;

            card.innerHTML = `
                <div class="heat-card-icon">${index + 1}</div>
                <div class="heat-card-text">${item}</div>
            `;
            heatGrid.appendChild(card);
        });
    }

    container.appendChild(heatGrid);
    console.log("Heat section: Thermal logic deployed.");
};
