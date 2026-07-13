// ===============================
// CONFIGURAÇÕES
// ===============================

const WHATSAPP_NUMBER = "244936499072";

// ===============================
// ELEMENTOS
// ===============================

const form = document.getElementById("beatForm");
const artistName = document.getElementById("artistName");
const beatStyle = document.getElementById("beatStyle");
const message = document.getElementById("message");
const submitBtn = document.querySelector(".submit-btn");

// ===============================
// REMOVER ERROS AO DIGITAR
// ===============================

document.querySelectorAll("input, textarea, select").forEach((field) => {

    field.addEventListener("input", () => {
        field.style.borderColor = "";
        field.style.boxShadow = "";
    });

    field.addEventListener("change", () => {
        field.style.borderColor = "";
        field.style.boxShadow = "";
    });

});

// ===============================
// MOSTRAR ERRO
// ===============================

function showError(field, text) {

    field.focus();

    field.style.borderColor = "#ff4d4d";
    field.style.boxShadow = "0 0 15px rgba(255,77,77,.4)";

    alert(text);

}

// ===============================
// BOTÃO LOADING
// ===============================

function loadingButton() {

    submitBtn.disabled = true;

    submitBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Enviando...
    `;

}

// ===============================
// BOTÃO NORMAL
// ===============================

function normalButton() {

    submitBtn.disabled = false;

    submitBtn.innerHTML = `
        <i class="fa-solid fa-paper-plane"></i>
        Enviar Pedido
    `;

}

// ===============================
// ENVIAR FORMULÁRIO
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = artistName.value.trim();
    const estilo = beatStyle.value;
    const mensagem = message.value.trim();

    // Nome

    if (nome === "") {

        showError(
            artistName,
            "Informe o nome do artista."
        );

        return;

    }

    // Estilo

    if (estilo === "") {

        showError(
            beatStyle,
            "Selecione o estilo do beat."
        );

        return;

    }

    loadingButton();

    // Mensagem

    const texto = `🎧 *NOVO PEDIDO DE BEAT*

👤 *Nome do Artista:*
${nome}

🎼 *Estilo do Beat:*
${estilo}

📝 *Descrição:*
${mensagem !== "" ? mensagem : "Nenhuma descrição enviada."}

━━━━━━━━━━━━━━━━━━━━━━

Pedido enviado através do formulário do site
*Jota Efi Beatz*
`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    setTimeout(() => {

        window.open(whatsappURL, "_blank");

        form.reset();

        normalButton();

    }, 600);

});

// ===============================
// ANIMAÇÃO DO CARD
// ===============================

window.addEventListener("load", () => {

    const card = document.querySelector(".glass-card");

    card.animate(

        [
            {
                opacity: 0,
                transform: "translateY(35px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],

        {
            duration: 800,
            easing: "ease-out",
            fill: "forwards"
        }

    );

});