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

// Livros transparentes passando pelo fundo
(() => {
  const caixa = document.querySelector(".fundo-anim");
  const cores = ["#f2c14e", "#d9558f", "#b49ae0", "#f8f3fc", "#8f6bd1"];
  const livro = (cor, aberto) => aberto
    ? `<svg viewBox="0 0 100 70"><path d="M50 12C36 4 18 4 4 10v52c14-6 32-6 46 2 14-8 32-8 46-2V10C82 4 64 4 50 12z" fill="${cor}"/><path d="M50 12v52" stroke="#2e1a4a" stroke-opacity=".35" stroke-width="2"/><path d="M12 22c12-3 24-2 34 3M12 34c12-3 24-2 34 3M54 25c10-5 22-6 34-3M54 37c10-5 22-6 34-3" stroke="#2e1a4a" stroke-opacity=".25" stroke-width="2" fill="none"/></svg>`
    : `<svg viewBox="0 0 70 100"><rect x="6" y="4" width="58" height="92" rx="6" fill="${cor}"/><rect x="6" y="4" width="10" height="92" rx="4" fill="#2e1a4a" fill-opacity=".3"/><rect x="26" y="22" width="30" height="5" rx="2" fill="#2e1a4a" fill-opacity=".35"/><rect x="26" y="34" width="22" height="4" rx="2" fill="#2e1a4a" fill-opacity=".25"/></svg>`;
  for (let i = 0; i < 16; i++) {
    const el = document.createElement("span");
    el.className = "livro-passa";
    el.innerHTML = livro(cores[i % cores.length], i % 3 === 0);
    const perto = Math.random();                      // 0 = longe, 1 = perto
    el.style.top = (Math.random() * 88) + "%";
    el.style.width = (28 + perto * 70) + "px";
    el.style.setProperty("--op", (.1 + perto * .22).toFixed(2));
    el.style.setProperty("--blur", ((1 - perto) * 3).toFixed(1) + "px");
    el.style.setProperty("--dy", (Math.random() * 120 - 60) + "px");
    el.style.setProperty("--rot", (Math.random() * 60 - 30) + "deg");
    el.style.animationDuration = (30 - perto * 12 + Math.random() * 10) + "s";
    el.style.animationDelay = (-Math.random() * 40) + "s";
    caixa.appendChild(el);
  }
})();
