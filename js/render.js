window.AppRender = {
    uiState: {
        activeTab: 'recipes',
        isProcessing: false,
        error: null
    },


    init: function() {
        const root = document.getElementById('app-root');
        if (!root) return console.error("Mount point missing!");

        if (!window.appState.isLoggedIn) {
            this.renderAuth(root);
        } else {
            this.renderShell(root);
            this.showTab(this.uiState.activeTab);
        }
    },

    renderAuth: function(container) {
        container.innerHTML = `
            <div class="auth-container fade-in">
                <div class="auth-card glass">
                    <h1 class="gradient-text">Blackout Helper</h1>
                    <div class="input-group">
                        <label>Електронна пошта</label>
                        <input type="email" id="u-email" placeholder="admin@test.com">
                    </div>
                    <div class="input-group">
                        <label>Пароль</label>
                        <input type="password" id="u-pass" placeholder="••••">
                    </div>
                    <button class="buy-button" id="login-trigger">УВІЙТИ</button>
                </div>
            </div>`;

        document.getElementById('login-trigger').onclick = () => {
            const email = document.getElementById('u-email').value;
            const pass = document.getElementById('u-pass').value;
            if (window.appState.signIn(email, pass)) this.init();
        };
    },

    renderShell: function(container) {
        container.innerHTML = `
            <header class="main-header glass sticky">
                <nav class="main-nav">
                    <button class="nav-item" data-tab="recipes">🍱 Меню</button>
                    <button class="nav-item" data-tab="map">📍 Карта</button>
                    <button class="nav-item" data-tab="cart">🛒 Кошик (<span id="cart-cnt">0</span>)</button>
                    <button class="nav-item" data-tab="zsu">🛡️ ЗСУ</button>
                </nav>
            </header>
            <main id="view-port" class="container"></main>`;

        container.querySelectorAll('.nav-item').forEach(btn => {
            btn.onclick = () => this.showTab(btn.dataset.tab);
        });
        this.updateCartCounter();
    },

    showTab: function(tab) {
        const port = document.getElementById('view-port');
        if (!port) return;
        this.uiState.activeTab = tab;

        port.innerHTML = '<div class="loader"></div>';

        setTimeout(() => {
            switch(tab) {
                case 'recipes': this.renderRecipes(port); break;
                case 'cart': this.renderCart(port); break;
                case 'map': this.renderMap(port); break;
                case 'zsu': this.renderZSU(port); break;
            }
        }, 100);
    },

    renderRecipes: function(port) {
        const recipes = window.appState.getSortedRecipes();
        
        port.innerHTML = `
            <div class="control-grid">
                <div class="glass card">
                    <h4>⚙️ Сортування</h4>
                    <select class="sort-select" onchange="window.handleSort(this.value)">
                        <option value="default" ${window.appState.sortBy === 'default' ? 'selected' : ''}>Стандартно</option>
                        <option value="difficulty" ${window.appState.sortBy === 'difficulty' ? 'selected' : ''}>Складність ↑</option>
                        <option value="speed" ${window.appState.sortBy === 'speed' ? 'selected' : ''}>Швидкість ↑</option>
                        <option value="price" ${window.appState.sortBy === 'price' ? 'selected' : ''}>Ціна ↑</option>
                    </select>
                </div>

                <div class="glass card">
                    <h4> Свій інгредієнт</h4>
                    <div style="display:flex; gap:5px;">
                        <input type="text" id="cust-n" placeholder="Назва" style="flex:2">
                        <input type="number" id="cust-p" placeholder="₴" style="flex:1">
                        <button class="buy-button" style="padding:10px" id="add-cust">ADD</button>
                    </div>
                </div>
            </div>

            <div class="recipes-grid fade-in">
                ${recipes.map(r => `
                    <div class="card glass recipe-card">
                        <div class="badge">⭐ ${r.difficulty}</div>
                        <h3>${r.title}</h3>
                        <p class="text-muted">⏱️ ${r.speed} хв. готування</p>
                        <div class="ing-preview">
                            ${r.ingredients.map(i => `<span>• ${i.name}</span>`).join('')}
                        </div>
                        <button class="buy-button" onclick="window.appState.addIngredientsToCart(${r.id})">
                            ВЗЯТИ ІНГРЕДІЄНТИ
                        </button>
                    </div>
                `).join('')}
            </div>`;

        document.getElementById('add-cust').onclick = () => {
            const n = document.getElementById('cust-n').value;
            const p = document.getElementById('cust-p').value;
            window.appState.addUserIngredient(n, p);
        };
    },

    renderCart: function(port) {
        const cart = window.appState.cart;
        const total = cart.reduce((s, i) => s + i.price, 0);

        port.innerHTML = `
            <div class="card glass cart-view fade-in">
                <h2 class="gradient-text">Ваше замовлення</h2>
                <div class="cart-items">
                    ${cart.length === 0 ? '<p>Кошик порожній</p>' : cart.map((i, idx) => `
                        <div class="cart-row">
                            <span>${i.name} <small>(${i.from})</small></span>
                            <b>${i.price} ₴</b>
                        </div>
                    `).join('')}
                </div>
                <div class="total-block">
                    <span>ВСЬОГО:</span>
                    <span class="price-big">${total} ₴</span>
                </div>
                <button class="buy-button ${total === 0 ? 'disabled' : ''}" 
                        id="pay-trigger" ${total === 0 ? 'disabled' : ''}>
                    ${this.uiState.isProcessing ? 'ОБРОБКА...' : 'ОПЛАТИТИ ЗАРАЗ'}
                </button>
            </div>`;

        if (total > 0) {
            document.getElementById('pay-trigger').onclick = (e) => this.handlePayment(total, e.target);
        }
    },

    handlePayment: function(amount, btn) {
        this.uiState.isProcessing = true;
        btn.innerText = "ОБРОБКА...";
        btn.classList.add('loading');

        setTimeout(() => {
            alert(`✅ Оплата ${amount} ₴ пройшла успішно!\nДякуємо за підтримку економіки.`);
            window.appState.cart = [];
            this.uiState.isProcessing = false;
            this.updateCartCounter();
            this.showTab('recipes');
        }, 2000);
    },

    renderMap: function(port) {
        port.innerHTML = `
            <div class="card glass fade-in" style="padding:0; overflow:hidden;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d30.5!3d50.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1" 
                    width="100%" height="450" style="border:0;" allowfullscreen=""></iframe>
                <div style="padding:15px; text-align:center;">
                    <button class="buy-button" onclick="window.open('https://google.com/maps/search/пункти+незламності')">📍 ВІДКРИТИ ПОВНУ КАРТУ</button>
                </div>
            </div>`;
    },

    renderZSU: function(port) {
        const links = [
            { t: "United24", u: "https://u24.gov.ua/" },
            { t: "Повернись Живим", u: "https://savelife.in.ua/" },
            { t: "Фонд Притули", u: "https://prytulafoundation.org/" },
            { t: "Госпітальєри", u: "https://www.hospitallers.life/" }
        ];
        port.innerHTML = `
            <h2 class="gradient-text center">ПІДТРИМКА АРМІЇ</h2>
            <div class="zsu-grid">
                ${links.map(l => `<a href="${l.u}" target="_blank" class="zsu-card glass"><h3>${l.t}</h3><span>ЗРОБИТИ ДОНАТ</span></a>`).join('')}
            </div>`;
    },

    updateCartCounter: function() {
        const cnt = document.getElementById('cart-cnt');
        if (cnt) cnt.innerText = window.appState.cart.length;
    }
};

document.addEventListener('DOMContentLoaded', () => window.AppRender.init());
