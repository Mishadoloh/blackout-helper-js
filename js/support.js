window.renderSupportSection = function(container) {
    container.innerHTML = `
        <div class="zsu-header">
            <h2>🇺🇦 Підтримка Збройних Сил України</h2>
            <p>Кожна гривня наближає перемогу. Тільки офіційні рахунки:</p>
        </div>
        <div class="zsu-grid">
            <div class="zsu-card">
                <h3>НБУ: Спецрахунок для ЗСУ</h3>
                <p>Прямий збір Національного банку України.</p>
                <a href="https://bank.gov.ua/ua/about/support-the-armed-forces" target="_blank" class="zsu-link">Допомогти</a>
            </div>
            <div class="zsu-card">
                <h3>Фонд "Повернись живим"</h3>
                <p>Найбільший фонд компетентної допомоги армії.</p>
                <a href="https://savelife.in.ua/donate/" target="_blank" class="zsu-link">Задонатити</a>
            </div>
            <div class="zsu-card">
                <h3>UNITED24</h3>
                <p>Глобальна ініціатива Президента України.</p>
                <a href="https://u24.gov.ua/uk" target="_blank" class="zsu-link">Зробити внесок</a>
            </div>
            <div class="zsu-card">
                <h3>Благодійний фонд Сергія Притули</h3>
                <p>Збори на дрони, ППО та техніку.</p>
                <a href="https://prytulafoundation.org/support-spending" target="_blank" class="zsu-link">Підтримати</a>
            </div>
        </div>
    `;
};
