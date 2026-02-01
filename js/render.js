window.AppRender = {
    init: function() {
        const root = document.getElementById('app-root');
        if (!root) return;
        
        if (!window.appState.isLoggedIn) {
            this.renderAuth(root);
        } else {
            this.renderLayout(root);
            this.showTab('recipes');
        }
    },

    renderAuth: function(root) {
        root.innerHTML = `
            <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px;">
                <div class="card glass" style="width: 100%; max-width: 400px;">
                    <h2 class="gradient-text">Вхід</h2>
                    <form onsubmit="handleLogin(event)">
                        <input type="email" id="email" placeholder="Email" required>
                        <input type="password" id="pass" placeholder="Пароль" required>
                        <button class="buy-button">Зареєструватися</button>
                    </form>
                </div>
            </div>`;
    },

    renderLayout: function(root) {
        root.innerHTML = `
            <header class="main-header">
                <nav class="main-nav">
                    <button class="nav-btn" onclick="AppRender.showTab('recipes')" id="tab-recipes">
                        <span class="icon">🍱</span> Меню
                    </button>
                    <button class="nav-btn" onclick="AppRender.showTab('gps')" id="tab-gps">
                        <span class="icon">📍 GPS</span>
                    </button>
                    <button class="nav-btn" onclick="AppRender.showTab('cart')" id="tab-cart">
                        <span class="icon">🛒</span> Кошик (<span id="cart-count">0</span>)
                    </button>
                    <button class="nav-btn" onclick="AppRender.showTab('zsu')" id="tab-zsu">
                        <span class="icon">🇺🇦</span> ЗСУ
                    </button>
                </nav>
            </header>
            <main id="main-view"></main>`;
    },

    showTab: function(tab) {
        const view = document.getElementById('main-view');
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`tab-${tab}`)?.classList.add('active');

        if (tab === 'recipes') this.renderRecipes(view);
        if (tab === 'gps') this.renderGPS(view);
        if (tab === 'cart') this.renderCart(view);
        if (tab === 'zsu') this.renderZSU(view);
    },

    renderRecipes: function(view) {
        view.innerHTML = `
            <h1 class="gradient-text">Blackout Food</h1>
            <div class="recipes-grid">
                ${window.recipesData.map(r => `
                    <div class="card glass">
                        <h3>${r.title}</h3>
                        <div style="color: var(--text-dim); font-size: 0.85rem;">
                            ${r.ingredients.map(i => i.name).join(' • ')}
                        </div>
                        <span class="price">${r.ingredients.reduce((s,i) => s+i.price, 0)} ₴</span>
                        <button class="buy-button" onclick="addToCart(${r.id})">Додати набір</button>
                    </div>
                `).join('')}
            </div>`;
    },

    renderGPS: function(view) {
        view.innerHTML = `
            <h1 class="gradient-text">Карта допомоги</h1>
            <div class="card glass" style="margin-bottom: 20px;">
                <h3 style="color: var(--accent);">🔥 Поради по теплу:</h3>
                <p>• Використовуйте намет у кімнаті</p>
                <p>• Пляшки з гарячою водою в ноги</p>
            </div>
            <a href="https://nezlamnist.gov.ua/" target="_blank" class="charity-card">
                <span>Пункти Незламності</span>
                <span>➜</span>
            </a>
            <a href="https://palyanytsya.info/" target="_blank" class="charity-card">
                <span>Допомога зі світлом</span>
                <span>➜</span>
            </a>`;
    },

    renderCart: function(view) {
        const { cart, totalPrice } = window.appState;
        view.innerHTML = `
            <h1 class="gradient-text">Оформлення</h1>
            <div class="card glass">
                ${cart.length === 0 ? '<p style="text-align:center">Кошик порожній</p>' : 
                cart.map(i => `
                    <div class="cart-item">
                        <span>${i.name}</span>
                        <b>${i.price} ₴</b>
                    </div>
                `).join('')}
                <div class="cart-total">
                    <span>Разом:</span>
                    <span>${totalPrice} ₴</span>
                </div>
                ${cart.length > 0 ? `
                    <div style="margin-top: 30px;">
                        <input type="text" id="card-num" placeholder="0000 0000 0000 0000" maxlength="16">
                        <button class="buy-button" onclick="confirmPayment()">Оплатити карткою</button>
                    </div>
                ` : ''}
            </div>`;
    },

    renderZSU: function(view) {
        view.innerHTML = `
            <h1 class="gradient-text">Підтримка</h1>
            <div style="text-align: center; margin-bottom: 30px;">
                <p>Кожен донат — це крок до перемоги 🇺🇦</p>
            </div>
            <button class="buy-button" style="margin-bottom: 15px;" onclick="window.open('https://savelife.in.ua/')">Повернись Живим</button>
            <button class="buy-button" style="background: #222;" onclick="window.open('https://u24.gov.ua/')">UNITED24</button>`;
    }
};

document.addEventListener('DOMContentLoaded', () => AppRender.init());
