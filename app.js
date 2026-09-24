// ======================================
// ECLIPSE EXCHANGE
// ======================================


// Открытие монеты

function openCoin(coin) {

    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    let data = {
        BTC: {
            name: "Bitcoin",
            price: "$112,430.25",
            change: "+2.41%"
        },

        ETH: {
            name: "Ethereum",
            price: "$4,021.82",
            change: "+1.83%"
        },

        SOL: {
            name: "Solana",
            price: "$241.73",
            change: "-0.64%"
        }
    };

    const selected = data[coin];

    content.innerHTML = `
        <h2>${selected.name}</h2>

        <div style="
            font-size: 30px;
            font-weight: 700;
            margin-top: 20px;
        ">
            ${selected.price}
        </div>

        <div style="
            margin-top: 8px;
            color: ${selected.change.startsWith("+") ? "#45d483" : "#ff5e6c"};
        ">
            ${selected.change}
        </div>

        <div style="
            height: 180px;
            margin-top: 25px;
            border-radius: 15px;
            background: #181a22;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #656873;
        ">
            📈 График ${coin}
        </div>
    `;

    modal.classList.remove("hidden");
}


// Закрытие окна

function closeModal() {

    document
        .getElementById("modal")
        .classList.add("hidden");
}


// Купить

function buy() {

    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    content.innerHTML = `
        <h2>💰 Купить</h2>

        <p style="
            color: #777b86;
            margin-top: 12px;
        ">
            Здесь появится форма покупки.
        </p>

        <button
            onclick="closeModal()"
            style="
                width: 100%;
                margin-top: 30px;
                padding: 15px;
                border-radius: 12px;
                background: #237a4b;
                color: white;
                font-weight: 700;
            "
        >
            Продолжить
        </button>
    `;

    modal.classList.remove("hidden");
}


// Продать

function sell() {

    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    content.innerHTML = `
        <h2>💸 Продать</h2>

        <p style="
            color: #777b86;
            margin-top: 12px;
        ">
            Здесь появится форма продажи.
        </p>

        <button
            onclick="closeModal()"
            style="
                width: 100%;
                margin-top: 30px;
                padding: 15px;
                border-radius: 12px;
                background: #8b3038;
                color: white;
                font-weight: 700;
            "
        >
            Продолжить
        </button>
    `;

    modal.classList.remove("hidden");
}


// Нижняя навигация

function showPage(page) {

    const items = document.querySelectorAll(".nav-item");

    items.forEach(item => {
        item.classList.remove("active");
    });

    event.currentTarget.classList.add("active");

    console.log("Открыта страница:", page);
}