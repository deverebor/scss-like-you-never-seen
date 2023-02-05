import{_ as a,W as s,X as e,Y as t,Z as p,$ as o,a1 as c,G as i,a0 as l}from"./framework-ba4bf44d.js";const r={},u=c(`<h1 id="layer-rule" tabindex="-1"><a class="header-anchor" href="#layer-rule" aria-hidden="true">#</a> Layer Rule</h1><p>Define uma camada de cascata para ser trabalhada, as regas farão parte daquele contexto, não do escopo global da view.</p><p>EXAMPLE:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token atrule"><span class="token rule">@layer</span> base<span class="token punctuation">,</span> component<span class="token punctuation">;</span>

<span class="token rule">@layer</span> base</span> <span class="token punctuation">{</span>
  <span class="token selector">.button </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@layer</span> component</span> <span class="token punctuation">{</span>
  <span class="token selector">.button </span><span class="token punctuation">{</span>
    <span class="token selector"><span class="token parent important">&amp;</span>__title </span><span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector"><span class="token parent important">&amp;</span>__icon </span><span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A ordem de declaração de camadas é importante, pois a camada mais acima será a camada mais próxima do contexto, então caso você altere a ordem a prioridade do estilo também mudará.</p><p>A propriedade layer pode ser útil para resolver problemas de prioridade não sendo mais necessário usar o atributo important.</p><blockquote><p>Compatibilidade: Chrome(✅Suportado), Firefox(✅Suportado), Chromium(✅Suportado) &amp; Safari(✅Suportado)</p></blockquote><hr>`,8);function d(m,k){const n=i("RouterLink");return s(),e("div",null,[u,t("p",null,[p(n,{to:"/content/NestingRule/"},{default:o(()=>[l("Ir para o próximo conteúdo")]),_:1})])])}const b=a(r,[["render",d],["__file","index.html.vue"]]);export{b as default};
