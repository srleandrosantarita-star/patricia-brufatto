const LIVROS = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Clássicos", preco: 29.9, cor: "#7b3f2a" },
  { id: 2, titulo: "Grande Sertão: Veredas", autor: "João Guimarães Rosa", categoria: "Clássicos", preco: 59.9, cor: "#9a6b2f" },
  { id: 3, titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", categoria: "Clássicos", preco: 27.5, cor: "#5c4a3a" },
  { id: 4, titulo: "O Cortiço", autor: "Aluísio Azevedo", categoria: "Clássicos", preco: 24.9, cor: "#a14b3a" },
  { id: 5, titulo: "Torto Arado", autor: "Itamar Vieira Junior", categoria: "Romance", preco: 54.9, cor: "#b5532a" },
  { id: 6, titulo: "A Hora da Estrela", autor: "Clarice Lispector", categoria: "Romance", preco: 34.9, cor: "#3d5a80" },
  { id: 7, titulo: "Capitães da Areia", autor: "Jorge Amado", categoria: "Romance", preco: 39.9, cor: "#2f6f73" },
  { id: 8, titulo: "Dom Quixote", autor: "Miguel de Cervantes", categoria: "Clássicos", preco: 89.9, cor: "#6b4e71" },
  { id: 9, titulo: "O Hobbit", autor: "J. R. R. Tolkien", categoria: "Fantasia", preco: 49.9, cor: "#3f6b3a" },
  { id: 10, titulo: "Duna", autor: "Frank Herbert", categoria: "Ficção Científica", preco: 79.9, cor: "#b8862b" },
  { id: 11, titulo: "Fundação", autor: "Isaac Asimov", categoria: "Ficção Científica", preco: 52.9, cor: "#2b4a6f" },
  { id: 12, titulo: "Neuromancer", autor: "William Gibson", categoria: "Ficção Científica", preco: 46.9, cor: "#4a2b6f" },
  { id: 13, titulo: "O Nome do Vento", autor: "Patrick Rothfuss", categoria: "Fantasia", preco: 62.9, cor: "#5a3d2b" },
  { id: 14, titulo: "Sapiens", autor: "Yuval Noah Harari", categoria: "Não Ficção", preco: 69.9, cor: "#c0572b" },
  { id: 15, titulo: "Hábitos Atômicos", autor: "James Clear", categoria: "Não Ficção", preco: 44.9, cor: "#2b6f5a" },
  { id: 16, titulo: "O Homem Mais Rico da Babilônia", autor: "George S. Clason", categoria: "Não Ficção", preco: 22.9, cor: "#8a7a2b" },
  // Edição Infantil: preços ainda não informados (preco: null mostra "Consulte o preço")
  { id: 101, titulo: "Naruto – 500 Adesivos", autor: "Culturama", categoria: "Edição Infantil", preco: null, img: "imagens/livros/naruto-500-adesivos.jpg" },
  { id: 102, titulo: "Mundo Encantado – Diversão Colorida", autor: "DCL", categoria: "Edição Infantil", preco: null, img: "imagens/livros/mundo-encantado.jpg" },
  { id: 103, titulo: "Justice League – 365 Atividades e Desenhos para Colorir", autor: "Ciranda Cultural", categoria: "Edição Infantil", preco: null, img: "imagens/livros/justice-league-365.jpg" },
  { id: 104, titulo: "Dinossauros – 365 Atividades e Desenhos para Colorir", autor: "Livro de atividades", categoria: "Edição Infantil", preco: null, img: "imagens/livros/dinossauros-365.jpg" },
  { id: 105, titulo: "365 Desenhos para Colorir (Dinossauro)", autor: "Livro de atividades", categoria: "Edição Infantil", preco: null, img: "imagens/livros/365-desenhos-colorir.jpg" },
  { id: 106, titulo: "OMG – 365 Atividades e Desenhos para Colorir", autor: "Livro de atividades", categoria: "Edição Infantil", preco: null, img: "imagens/livros/omg-365.jpg" },
  { id: 107, titulo: "551 Atividades – Diversão que não acaba", autor: "Culturama", categoria: "Edição Infantil", preco: null, img: "imagens/livros/551-atividades.jpg" },
  { id: 108, titulo: "Barbie – 365 Atividades e Desenhos para Colorir", autor: "Ciranda Cultural", categoria: "Edição Infantil", preco: null, img: "imagens/livros/barbie-365.jpg" },
  { id: 109, titulo: "Disney Moana – 100 Páginas para Colorir", autor: "Disney", categoria: "Edição Infantil", preco: null, img: "imagens/livros/moana-100.jpg" },
  { id: 110, titulo: "Disney Frozen II – 100 Páginas para Colorir e Aprender", autor: "Disney", categoria: "Edição Infantil", preco: null, img: "imagens/livros/frozen-100.jpg" },
  { id: 111, titulo: "Disney Toy Story 4 – 100 Páginas para Colorir", autor: "Disney · Pixar", categoria: "Edição Infantil", preco: null, img: "imagens/livros/toy-story-100.jpg" },
  { id: 112, titulo: "Unicórnios – 500 Adesivos", autor: "Culturama", categoria: "Edição Infantil", preco: null, img: "imagens/livros/unicornios-500-adesivos.jpg" },
  { id: 113, titulo: "Disney Princesa – 100 Páginas para Colorir e Aprender", autor: "Disney", categoria: "Edição Infantil", preco: null, img: "imagens/livros/princesas-100.jpg" },
  // PROVISÓRIOS: títulos e preços fictícios até a lista real da autora ser informada
  { id: 17, titulo: "Livro de Exemplo 1 (provisório)", autor: "Patricia Brufatto", categoria: "Patricia Brufatto", preco: 39.9, cor: "#7a2b5a" },
  { id: 18, titulo: "Livro de Exemplo 2 (provisório)", autor: "Patricia Brufatto", categoria: "Patricia Brufatto", preco: 44.9, cor: "#2b5a7a" },
  { id: 19, titulo: "Livro de Exemplo 3 (provisório)", autor: "Patricia Brufatto", categoria: "Patricia Brufatto", preco: 49.9, cor: "#5a7a2b" },
];

// Número com DDI+DDD, só dígitos (ex.: "5551999999999"). Preenchido, o pedido é enviado por WhatsApp.
const WHATSAPP = "";
const FRETE_GRATIS = 150, FRETE_FIXO = 19.9;
const brl = n => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const $ = id => document.getElementById(id);

let categoria = "Edição Infantil";
let carrinho = [];
try { carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; } catch {}

function salvar() {
  try { localStorage.setItem("carrinho", JSON.stringify(carrinho)); } catch {}
}

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("visivel");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("visivel"), 2000);
}

function renderCategorias() {
  const cats = ["Todos", ...new Set(LIVROS.map(l => l.categoria))];
  $("categorias").innerHTML = cats
    .map(c => `<button class="${c === categoria ? "ativa" : ""}" data-cat="${c}">${c}</button>`).join("");
}

function renderCatalogo() {
  const termo = $("busca").value.trim().toLowerCase();
  let lista = LIVROS.filter(l =>
    (categoria === "Todos" || l.categoria === categoria) &&
    (l.titulo + " " + l.autor).toLowerCase().includes(termo));
  const ord = $("ordenar").value;
  lista.sort((a, b) => ord === "menor" ? (a.preco ?? 1e9) - (b.preco ?? 1e9) : ord === "maior" ? (b.preco ?? -1) - (a.preco ?? -1) : a.titulo.localeCompare(b.titulo, "pt-BR"));

  $("total-resultados").textContent = `${lista.length} livro(s)`;
  $("grade").innerHTML = lista.length ? lista.map(l => `
    <article class="livro">
      ${l.img
        ? `<img class="capa-img" src="${l.img}" alt="Capa: ${l.titulo}" loading="lazy">`
        : `<div class="capa" style="background:linear-gradient(160deg, ${l.cor}, #1d1a17)">
        <small>${l.categoria}</small><b>${l.titulo}</b><small>${l.autor}</small>
      </div>`}
      <div class="info">
        <span class="autor">${l.autor}</span>
        ${l.preco == null
          ? `<span class="preco">Consulte o preço</span>
        <button class="btn-primario" data-consulta="${l.id}">Perguntar sobre este livro</button>`
          : `<span class="preco">${brl(l.preco)}</span>
        <span class="parcela">ou 3x de ${brl(l.preco / 3)}</span>
        <button class="btn-primario" data-add="${l.id}">Adicionar ao carrinho</button>`}
      </div>
    </article>`).join("") : `<p class="vazio">Nenhum livro encontrado.</p>`;
}

function totais() {
  const subtotal = carrinho.reduce((s, i) => s + LIVROS.find(l => l.id === i.id).preco * i.qtd, 0);
  const frete = !subtotal || subtotal >= FRETE_GRATIS ? 0 : FRETE_FIXO;
  return { subtotal, frete, total: subtotal + frete };
}

function renderCarrinho() {
  $("contador").textContent = carrinho.reduce((s, i) => s + i.qtd, 0);
  $("itens").innerHTML = carrinho.length ? carrinho.map(i => {
    const l = LIVROS.find(x => x.id === i.id);
    return `<li>
      <div><strong>${l.titulo}</strong><br><small>${l.autor}</small></div>
      <div>${brl(l.preco * i.qtd)}</div>
      <div class="qtd">
        <button data-menos="${l.id}" aria-label="Diminuir">−</button>${i.qtd}
        <button data-mais="${l.id}" aria-label="Aumentar">+</button>
      </div>
      <button class="remover" data-rem="${l.id}">remover</button>
    </li>`;
  }).join("") : `<li><span>Seu carrinho está vazio.</span></li>`;
  const t = totais();
  $("subtotal").textContent = brl(t.subtotal);
  $("frete").textContent = !carrinho.length ? "—" : t.frete ? brl(t.frete) : "Grátis";
  $("total").textContent = brl(t.total);
  $("finalizar").disabled = !carrinho.length;
  salvar();
}

function alterarQtd(id, delta) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) carrinho = carrinho.filter(i => i !== item);
  renderCarrinho();
}

function abrirCarrinho(abrir) {
  $("carrinho").classList.toggle("aberto", abrir);
  $("carrinho").setAttribute("aria-hidden", String(!abrir));
  $("fundo").hidden = !abrir;
}

$("grade").addEventListener("click", e => {
  const c = +e.target.dataset.consulta;
  if (c) {
    const l = LIVROS.find(x => x.id === c);
    if (WHATSAPP) window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Quero saber o preço do livro: ${l.titulo}`)}`, "_blank");
    else toast("Em breve: fale com a Patricia para saber o preço");
    return;
  }
  const id = +e.target.dataset.add;
  if (!id) return;
  const item = carrinho.find(i => i.id === id);
  item ? item.qtd++ : carrinho.push({ id, qtd: 1 });
  renderCarrinho();
  toast("Adicionado ao carrinho");
});
$("categorias").addEventListener("click", e => {
  if (!e.target.dataset.cat) return;
  categoria = e.target.dataset.cat;
  renderCategorias(); renderCatalogo();
});
$("itens").addEventListener("click", e => {
  const d = e.target.dataset;
  if (d.mais) alterarQtd(+d.mais, 1);
  if (d.menos) alterarQtd(+d.menos, -1);
  if (d.rem) { carrinho = carrinho.filter(i => i.id !== +d.rem); renderCarrinho(); }
});
$("busca").addEventListener("input", renderCatalogo);
$("ordenar").addEventListener("change", renderCatalogo);
$("abrir-carrinho").addEventListener("click", () => abrirCarrinho(true));
$("fechar-carrinho").addEventListener("click", () => abrirCarrinho(false));
$("fundo").addEventListener("click", () => abrirCarrinho(false));

$("finalizar").addEventListener("click", () => {
  const t = totais();
  $("resumo-checkout").textContent = `Total do pedido: ${brl(t.total)}`;
  $("checkout").showModal();
});
$("cancelar-checkout").addEventListener("click", () => $("checkout").close());
$("form-checkout").addEventListener("submit", () => {
  if (WHATSAPP) {
    const f = new FormData($("form-checkout")), t = totais();
    const linhas = carrinho.map(i => { const l = LIVROS.find(x => x.id === i.id); return `${i.qtd}x ${l.titulo} (${brl(l.preco * i.qtd)})`; });
    const msg = `Olá! Quero fazer um pedido:\n${linhas.join("\n")}\nTotal: ${brl(t.total)}\nNome: ${f.get("nome")}\nEndereço: ${f.get("endereco")}\nPagamento: ${f.get("pagamento")}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }
  carrinho = [];
  renderCarrinho();
  abrirCarrinho(false);
  $("form-checkout").reset();
  toast("Pedido confirmado! Obrigado pela compra 🎉");
});

renderCategorias();
renderCatalogo();
renderCarrinho();
