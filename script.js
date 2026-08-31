// =========================================================
// LUMINA CONSULTORIA — Script principal
// Tudo simples e comentado para facilitar ajustes.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

  // ---------- Menu mobile (abrir/fechar) ----------
  var menuToggle = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var aberto = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link (útil no celular)
    var links = nav.querySelectorAll(".nav__link");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Ano automático no rodapé ----------
  var anoEl = document.getElementById("ano");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  // ---------- Formulário "Solicite o orçamento" ----------
  // Este site não tem backend, então o formulário apenas
  // valida os campos e mostra uma mensagem de confirmação.
  // Para receber os pedidos de verdade, este formulário
  // precisaria ser conectado a um e-mail ou sistema (backend).
  var form = document.getElementById("formOrcamento");
  var feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();

      var nome = document.getElementById("nome").value.trim();
      var email = document.getElementById("email").value.trim();

      if (!nome || !email) {
        feedback.style.color = "#b23b3b";
        feedback.textContent = "Por favor, preencha ao menos nome e e-mail.";
        return;
      }

      feedback.style.color = "#3f7a4f";
      feedback.textContent = "Solicitação enviada! Em breve entraremos em contato, " + nome + ".";

      form.reset();
    });
  }

});
