window.setLanguage = function(lang) {
    console.log("Setting language to:", lang);
    
    if (lang === 'ru') {
        window.triggerUAOverlay();
        return;
    }


    if (window.state) {
        window.state.lang = lang;
        localStorage.setItem('selected_lang', lang);
    }

    if (window.openTab && window.state.activeTab) {
        window.openTab(window.state.activeTab);
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(lang)) {
            btn.classList.add('active');
        }
    });
};

window.triggerUAOverlay = function() {
    console.warn("Access denied: Identity check failed.");
    
    let overlay = document.getElementById('ua-identity-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'ua-identity-overlay';
        overlay.className = 'overlay-fullscreen';
        overlay.innerHTML = `
            <div class="overlay-content">
                <h1>🇺🇦 ВИБАЧТЕ</h1>
                <p>Цей ресурс працює виключно для тих, хто знає, що "Паляниця" це хліб, а не полуниця.</p>
                <button onclick="this.parentElement.parentElement.remove()" class="action-btn">Зрозумів, Слава Україні!</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }
};
