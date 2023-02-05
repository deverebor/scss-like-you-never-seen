import{_ as a,W as s,X as n,Y as o,Z as c,$ as i,a1 as t,G as r,a0 as l}from"./framework-ba4bf44d.js";const p={},d=t(`<h1 id="scroll-snap" tabindex="-1"><a class="header-anchor" href="#scroll-snap" aria-hidden="true">#</a> Scroll Snap</h1><p>O scroll snap é uma nova propriedade que nos permite criar interações mais intuitivas em dispositivos móveis, como por exemplo, carrosséis, sliders, etc.</p><h2 id="como-funciona" tabindex="-1"><a class="header-anchor" href="#como-funciona" aria-hidden="true">#</a> Como funciona?</h2><p>Para se utilizar o scroll snap, basta adicionar a propriedade <code>scroll-snap-type</code> em um elemento pai, e adicionar a propriedade <code>scroll-snap-align</code> em seus filhos.</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.carousel </span><span class="token punctuation">{</span>
  <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> x mandatory<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token selector">.carousel__item </span><span class="token punctuation">{</span> 
 <span class="token property">scroll-snap-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Com isso, ao rolar o elemento pai, os filhos irão se alinhar com o scroll. Podemos utilizar os valores <code>start</code>, <code>center</code> e <code>end</code> para definir a posição do elemento filho.</p><hr>`,7);function u(m,v){const e=r("RouterLink");return s(),n("div",null,[d,o("p",null,[c(e,{to:"/content/StylesArchitecture/"},{default:i(()=>[l("Ir para o próximo conteúdo")]),_:1})])])}const _=a(p,[["render",u],["__file","index.html.vue"]]);export{_ as default};
