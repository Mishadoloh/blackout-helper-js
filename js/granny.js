window.renderGrannySection = function(container, grannyData) {
    if (!container || !grannyData) return;

    const header = document.createElement('div');
    header.className = 'granny-header animate-in';
    header.innerHTML = `
        <div class="granny-badge">👵 Поради від бабусі</div>
        <p class="granny-subtitle">Перевірені часом методи виживання</p>
    `;
    container.appendChild(header);

    const list = document.createElement('div');
    list.className = 'granny-list';

    if (grannyData.items) {
        grannyData.items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'granny-card fade-item';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="granny-card-content">
                    <span class="quote-mark">“</span>
                    ${item}
                </div>
            `;
            list.appendChild(card);
        });
    }

    container.appendChild(list);
    console.log("Granny section: Wisdom successfully loaded.");
};
