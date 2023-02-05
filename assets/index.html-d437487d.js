import{_ as s,W as a,X as e,Y as o,Z as t,$ as i,a1 as p,G as l,a0 as c}from"./framework-ba4bf44d.js";const u={},d=p(`<h1 id="nesting-rule" tabindex="-1"><a class="header-anchor" href="#nesting-rule" aria-hidden="true">#</a> Nesting Rule</h1><p>Ao contrario do css, a regra de aninhamento não é aplicada a um elemento em si, mas sim a um conjunto de elementos. Ela é usada para definir a profundidade máxima de aninhamento de um elemento em relação a outro.</p><h2 id="exemplo" tabindex="-1"><a class="header-anchor" href="#exemplo" aria-hidden="true">#</a> Exemplo</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// NestingRule.scss</span>
<span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token selector">ul </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS output:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav li</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav a</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dessa forma, o aninhamento é limitado a 3 níveis, sendo que o primeiro nível é o elemento <code>nav</code>, o segundo é o elemento <code>ul</code>, e o terceiro é o elemento <code>li</code>.</p><h2 id="porque-devemos-utilizar-o-nesting-rule" tabindex="-1"><a class="header-anchor" href="#porque-devemos-utilizar-o-nesting-rule" aria-hidden="true">#</a> Porque devemos utilizar o Nesting Rule?</h2><p>O Nesting Rule é uma forma de organizar o código, deixando-o mais legível e de fácil manutenção. Além disso, ele evita a repetição de nomes de classes, o que pode ser um problema quando o projeto cresce.</p><p>O poder do nesting se torna mais forte quando utilizamos a Interpolation e a metodologia BEM.</p><h2 id="oque-e-bem" tabindex="-1"><a class="header-anchor" href="#oque-e-bem" aria-hidden="true">#</a> Oque é BEM ?</h2><p>BEM é uma metodologia de desenvolvimento de CSS que visa facilitar a manutenção e a escalabilidade de projetos. Ela é baseada em 3 princípios:</p><ul><li><p><strong>Block</strong>: um bloco é um componente independente, que pode ser reutilizado em qualquer lugar do projeto. Um bloco pode ser representado por uma classe CSS.</p></li><li><p><strong>Element</strong>: um elemento é um componente que pertence a um bloco. Um elemento pode ser representado por uma classe CSS que começa com o nome do bloco, seguido de dois underlines e o nome do elemento.</p></li><li><p><strong>Modifier</strong>: um modificador é uma classe que modifica o estilo de um bloco ou elemento. Um modificador pode ser representado por uma classe CSS que começa com o nome do bloco ou elemento, seguido de dois underlines e o nome do modificador.</p></li></ul><h2 id="exemplo-da-utilizacao-do-bem" tabindex="-1"><a class="header-anchor" href="#exemplo-da-utilizacao-do-bem" aria-hidden="true">#</a> Exemplo da utilização do BEM</h2><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// NestingRule.scss</span>

<span class="token comment">// Block</span>
<span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Element</span>

<span class="token selector">.button__text </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Modifier</span>

<span class="token selector">.button--primary </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #337ab7<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #2e6da4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,16);function r(m,v){const n=l("RouterLink");return a(),e("div",null,[d,o("p",null,[t(n,{to:"/content/ScrollSnap/"},{default:i(()=>[c("Ir para o próximo conteúdo")]),_:1})])])}const b=s(u,[["render",r],["__file","index.html.vue"]]);export{b as default};
