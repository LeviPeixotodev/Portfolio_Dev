# Portfolio Full Stack — Documento de Construção

## 1. Direção de design (fugindo do AI slop)

Referência principal: layout do **Jacob Camacho** (imagem 2) — fundo off-white/creme, card único centralizado, nav minimalista no topo, foto redonda cortada de forma orgânica, ícones sociais soltos na lateral esquerda em vez de um footer genérico.

**O que copiar do Jacob:**
- Paleta neutra e quente (creme, cinza-escuro para texto, sem preto puro)
- Um único bloco/card centralizado, respiro generoso ao redor
- Hierarquia tipográfica forte: nome grande, cargo pequeno, descrição curta
- Ícones de rede social como elementos de design, não como "footer social bar"

**O que evitar (sinais claros de AI slop):**
- Gradiente roxo/azul + fonte Inter/Poppins default
- Ícones genéricos de Font Awesome jogados soltos sem hierarquia
- Emojis como bullet point (🚀 ✨ 💻)
- Glassmorphism aplicado sem motivo
- Blob shapes decorativos genéricos no fundo
- Cards com sombra pesada e cantos arredondados em tudo (padrão "template Bootstrap #47")

**Diferencial em relação ao Jacob (pra não ficar cópia):**
- Como você é full stack, a estética pode ter um toque técnico sutil: uma fonte monoespaçada só nos detalhes (tags de stack, labels), não no site inteiro
- Um elemento visual que remeta a "sistema" — pode ser uma pequena barra de status, um indicador tipo `● online`, algo que sugira backend rodando de verdade (ver seção 3)

**Paleta sugerida:** creme `#F5F1EA` / grafite `#1F1D1B` / um accent só (ex: verde-oliva `#6B7A5E` ou terracota `#B5654A`) — nada de accent neon.

**Tipografia:** uma serifada ou humanista pro nome/headings (ex: Fraunces, Source Serif, ou até uma sans mais autoral tipo Söhne/General Sans) + monoespaçada discreta (JetBrains Mono, IBM Plex Mono) só pros detalhes técnicos.

---

## 2. Estrutura de seções

1. **Nav fixo topo** — nome à esquerda, links (About / Skills / Projects / Contact) à direita. Simples, sem sombra.
2. **Hero** — "Hi, I'm [nome]" + cargo (Full Stack Developer) + descrição curta (2 linhas) + foto/avatar. Ícones GitHub/LinkedIn na lateral.
3. **Stack/Skills** — dividida em Frontend / Backend / Infra (ver seção 3, é aqui que o backend aparece)
4. **Projects** — 3-5 projetos, cada um com case curto (ver seção 4)
5. **Contact** — simples, direto: e-mail, LinkedIn, GitHub, talvez botão de CV

---

## 3. Como mostrar backend num site que é, por natureza, frontend

Esse é o ponto certo que você levantou — a maioria dos portfolios só mostra o que é visível (UI), e o backend fica invisível. Algumas soluções:

### a) Widget "ao vivo" (mockado) que sugere backend rodando
Um pequeno componente na hero ou footer, tipo:
```
● API status: online
Latência: 42ms
Último deploy: há 3 dias
```
Decisão final: dados estáticos, hardcoded no componente Angular, sem chamada real a nenhum endpoint. Atualiza manualmente a cada novo deploy do site. É puramente estético — a prova real de competência backend vem dos case studies (item c abaixo).

### b) Seção "Architecture" dentro de cada projeto
Em vez de só print de tela, incluir um diagrama simples (pode ser feito em Figma/Excalidraw) mostrando: Frontend → API → Banco de dados → serviços externos. Isso comunica muito mais competência backend do que qualquer texto.

### c) Case study em vez de card raso
Cada projeto ganha uma "ficha técnica" com:
- **Problema** que resolve
- **Stack** (frontend, backend, banco, deploy)
- **Decisão técnica interessante** (ex: "usei fila com Redis pra processar X assincronamente", "modelei o banco assim por causa de Y")
- Link do repo + link do projeto live (se tiver)

Isso é o que realmente diferencia um portfolio de dev júnior de alguém que entende sistema.

### d) Terminal interativo (opcional, mas combina com "animações legais")
Um pequeno terminal simulado na hero que "digita" comandos tipo:
```
$ whoami
full-stack developer
$ tech --stack
node · postgres · react · docker
```
Fica bonito, remete a backend/CLI, e não é clichê se for bem executado (poucas linhas, timing bom, sem exagero).

---

## 4. Animações (com moderação)

Ideia: **micro-interações**, não efeitos chamativos.

- Fade-in + slide sutil (8-12px) nos elementos ao entrar na viewport (scroll reveal)
- Hover nos ícones sociais: leve rotação ou troca de cor, não scale gigante
- Texto do hero: pode ter um efeito de "digitação" leve no cargo (ex: "Full Stack Developer" → troca pra "Backend Enthusiast" → "React Dev") usando algo tipo Typed.js ou feito na mão
- Cards de projeto: leve elevação (translateY) no hover, transição suave (200-300ms, easing tipo `ease-out`)
- Terminal da seção 3d: efeito de digitação real, com cursor piscando

**Regra geral:** toda animação deve durar entre 150-400ms e usar easing suave. Nada de bounce exagerado ou parallax pesado — isso é outro sinal de slop.

---

## 5. Stack técnica definida

- **Frontend:** Angular (o autor já sabe usar) + CSS puro ou SCSS com tokens customizados (nada de classes default "azul-500 genérico")
- **Animações:** `@angular/animations` (nativo do framework, cobre scroll-reveal, hover, transições — não precisa de lib externa)
- **Deploy:** Netlify ou Vercel (grátis) — Angular builda pra estático com `ng build`, deploy automático a cada push no GitHub
- **Backend:** nenhum. Decisão final — a competência de backend é mostrada via case studies dos projetos (item 3c: problema → stack → decisão técnica), sem depender de nada rodando ao vivo. Isso evita o risco de "servidor dormindo" (free tiers de Render/Fly.io/Railway) bem no momento em que um recrutador está olhando o site, e elimina manutenção contínua.
- **Widget de status (item 3a):** dados estáticos, hardcoded no componente, atualizados manualmente a cada novo deploy (ex: "último deploy: 05/08/2026"). Puramente decorativo, sem chamada de API.

---

## 6. Checklist final anti-slop antes de publicar

- [ ] Nenhum ícone genérico sem propósito
- [ ] Nenhum emoji como bullet
- [ ] Paleta com no máximo 1 accent color
- [ ] Fotos/screenshots reais dos projetos, não mockups genéricos de stock
- [ ] Textos curtos, sem "Apaixonado por tecnologia e inovação 🚀"
- [ ] Cada projeto tem pelo menos 1 decisão técnica explicada, não só "feito com React"
- [ ] Testado em mobile (nav colapsa bem, hero não quebra)
