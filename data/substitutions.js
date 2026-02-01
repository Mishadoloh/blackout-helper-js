window.renderSubstitutions = function(container) {
    if (!container) return;

    const subData = [
        {
            category: " ПРОДУКТИ ХАРЧУВАННЯ",
            items: [
                { original: "Хліб", replace: "Лаваш, галети, хлібці, або смажені коржі (борошно + вода + сіль)." },
                { original: "Яйця (для зв'язки)", replace: "1 ст.л. насіння льону + 3 ст.л. води або 1/2 банана." },
                { original: "Молоко", replace: "Сухе молоко, вершки для кави або вівсяна вода." },
                { original: "М'ясо", replace: "Квасоля, сочевиця, гриби, горіхи або консервований нут." },
                { original: "Свіжі овочі", replace: "Квашена капуста, корейська морква, консервація." },
                { original: "Вершкове масло", replace: "Рослинна олія (80% від об'єму) або маргарин." },
                { original: "Кава", replace: "Цикорій, міцний чорний чай, какао." }
            ]
        },
        {
            category: "⚡ ЕНЕРГІЯ ТА СВІТЛО",
            items: [
                { original: "Електроплита", replace: "Туристичний газовий пальник або сухий спирт (таблетки)." },
                { original: "Освітлення", replace: "Гірлянда на батарейках (працює довше за ліхтарик), свічки." },
                { original: "Холодильник", replace: "Термосумка, балкон (вночі), або металеве відро з холодною водою." },
                { original: "Павербанк", replace: "Заряджений ноутбук (якщо є USB-вихід), акумулятор від авто (через інвертор)." }
            ]
        },
        {
            category: " ПОБУТ ТА ГІГІЄНА",
            items: [
                { original: "Миючий засіб", replace: "Харчова сода або гірчичний порошок (відмиває жир у холодній воді)." },
                { original: "Туалетний папір", replace: "Серветки, паперові рушники, стара газета (пом'ята)." },
                { original: "Опалення", replace: "Пластикові пляшки з гарячою водою (грілки), намет всередині кімнати." }
            ]
        }
    ];

    let html = `<h2> Чим можна замінити?</h2>`;

    subData.forEach(section => {
        html += `<div class="sub-section fade-item">
                    <h3 style="color: var(--accent); margin: 15px 0 10px;">${section.category}</h3>`;
        
        section.items.forEach(item => {
            html += `
                <div class="sub-card" style="background: var(--card-bg); border: 1px solid var(--border); padding: 12px; border-radius: 12px; margin-bottom: 8px;">
                    <span style="color: #ff4d4d; font-weight: bold;">❌ Немає: ${item.original}</span><br>
                    <span style="color: #2ecc71; font-weight: bold;">✅ Заміна:</span> ${item.replace}
                </div>
            `;
        });
        
        html += `</div>`;
    });

    container.innerHTML = html;
    console.log("Substitutions engine: Rendered successfully.");
};
