const reduzir = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Revelar ao rolar
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("visivel"); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll(".revelar").forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 90 + "ms";
  io.observe(el);
});

// Lightbox da galeria
const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
document.querySelector(".galeria").addEventListener("click", e => {
  const img = e.target.closest("figure")?.querySelector("img");
  if (!img) return;
  lbImg.src = img.src; lbImg.alt = img.alt; lb.hidden = false;
});
lb.addEventListener("click", () => lb.hidden = true);
document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

// Nome: letras caem uma a uma e depois ondulam
(() => {
  const h = document.getElementById("nome"), texto = h.textContent;
  h.setAttribute("aria-label", texto);
  h.textContent = "";
  const livro = document.createElement("span");
  livro.className = "livro-nome";
  livro.textContent = "📖";
  livro.setAttribute("aria-hidden", "true");
  h.appendChild(livro);
  let i = 0;
  texto.split(" ").forEach((palavra, p, todas) => {
    const w = document.createElement("span");
    w.className = "palavra";
    [...palavra].forEach(c => {
      const s = document.createElement("span");
      s.className = "letra";
      s.textContent = c;
      s.setAttribute("aria-hidden", "true");
      s.style.animationDelay = (0.3 + i * 0.07) + "s, " + (2 + i * 0.12) + "s";
      w.appendChild(s);
      i++;
    });
    h.appendChild(w);
    if (p < todas.length - 1) h.appendChild(document.createTextNode(" "));
    i++;
  });
})();

// Botão voltar ao topo
(() => {
  const b = document.getElementById("topo");
  addEventListener("scroll", () => b.classList.toggle("mostra", scrollY > 700), { passive: true });
  b.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
})();

// Lema digitado
(() => {
  const el = document.getElementById("lema"), texto = el.dataset.texto;
  if (reduzir) { el.textContent = texto; return; }
  let i = 0;
  setTimeout(function digita() {
    el.textContent = texto.slice(0, ++i);
    if (i < texto.length) setTimeout(digita, 55);
  }, 1500);
})();

// Folhas e livros caindo no fundo
(() => {
  const caixa = document.querySelector(".fundo-anim");
  const itens = ["📄", "📖", "📜", "📕", "📄", "📗", "📜", "📘"];
  for (let i = 0; i < 12; i++) {
    const el = document.createElement("span");
    el.className = "folha-cai";
    el.textContent = itens[i % itens.length];
    el.style.left = (3 + Math.random() * 94) + "%";
    el.style.fontSize = (1.1 + Math.random() * 1.4) + "rem";
    el.style.animationDuration = (14 + Math.random() * 14) + "s";
    el.style.animationDelay = (-Math.random() * 22) + "s";
    el.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
    caixa.appendChild(el);
  }
})();
