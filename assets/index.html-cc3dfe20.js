import{_ as n,W as s,X as e,Y as t,Z as o,$ as c,a1 as p,G as l,a0 as i}from"./framework-ba4bf44d.js";const r={},u=p(`<h1 id="accent-color" tabindex="-1"><a class="header-anchor" href="#accent-color" aria-hidden="true">#</a> Accent Color</h1><p>O Accent Color é uma propriedade css que permite a alteração de cores em elementos específicos do site. Atualmente os elementos que podem ter a cor alterada são:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- input:checkbox --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- input:radio --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- input:range --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>range<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- progress --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progress</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Isso permite que o usuário tenha uma experiência mais personalizada com o site, para determinadas interações. Além de remover a complexidade que anteriormente existia para alterar a cor desses elementos.</p><h2 id="como-usar" tabindex="-1"><a class="header-anchor" href="#como-usar" aria-hidden="true">#</a> Como usar</h2><p>Para usar o Accent Color, basta adicionar a propriedade <code>accent-color</code> ao elemento que deseja alterar a cor. O valor dessa propriedade deve ser uma cor válida, como <code>red</code>, <code>#f00</code>, <code>rgb(255, 0, 0)</code>, <code>hsl(250, 100%, 34%)</code> ou variáveis de cor do seu design system.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
  <span class="token property">accent-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Compatibilidade: Chrome(✅Suportado), Firefox(✅Suportado), Chromium(✅Suportado) &amp; Safari(✅Suportado)</p></blockquote><hr>`,10);function d(m,k){const a=l("RouterLink");return s(),e("div",null,[u,t("p",null,[o(a,{to:"/content/ContainerQueries/"},{default:c(()=>[i("Ir para o próximo conteúdo")]),_:1})])])}const g=n(r,[["render",d],["__file","index.html.vue"]]);export{g as default};