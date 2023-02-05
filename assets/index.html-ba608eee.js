import{_ as s,W as a,X as e,Y as p,Z as o,$ as t,a1 as i,G as l,a0 as c}from"./framework-ba4bf44d.js";const u={},d=i(`<h1 id="extend-rule" tabindex="-1"><a class="header-anchor" href="#extend-rule" aria-hidden="true">#</a> Extend Rule</h1><p>O extend é um recurso em que você replica o mesmo estilo de uma classe em outra.</p><p>Mas qual a diferença entre o <code>@mixin</code> e o <code>@extend</code>?</p><p>O mixin vai gerar uma copia daquele estilo em outro componente na hora da compilação. Já o extends gera uma referência para a classe original.</p><p>EXAMPLE:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/// Mixin input</span>

<span class="token keyword">@mixin</span> <span class="token selector">placeHolder </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.classe1 </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> placeholder<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.classe2 </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> placeholder<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/// Mixin output</span>
<span class="token selector">.classe1 </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.classe2 </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">/// Extend input</span>
<span class="token selector">.placeHolder </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.classe1 </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%placeHolder</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.classe2 </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%placeHolder</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/// Extend output</span>
<span class="token selector">.classe1,
.classe2 </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Apesar do <code>@extend</code> ser mais simples, ele é tão poderoso quanto <code>@mixin</code>. Mas isso pode causar alguns problemas.</p><ul><li>Como a classe <code>.placeHolder</code> é copiada para duas classes, elas são independentes e não se comportam como se fossem uma única classe.</li><li>Dependendo do comportamento da classe, a classe pai pode não ser a classe original.</li></ul><h2 id="quando-usar-ou-nao-o-extend" tabindex="-1"><a class="header-anchor" href="#quando-usar-ou-nao-o-extend" aria-hidden="true">#</a> Quando usar ou não o <code>@extend</code>?</h2><ul><li>Mixin: Utilize para gerar seu código de modo dinâmico através de variáveis;</li><li>Extend: Utilize para elementos comuns mas que haverá pouca repetição;</li></ul><p>Quando for necessário criar algum tipo de automatização utilize o <code>@mixin</code>, caso contrario utilize o <code>@extend</code>, ou até mesmo os dois juntos.</p><blockquote><p>Compatibilidade: Chrome(✅Suportado), Firefox(✅Suportado), Chromium(✅Suportado) &amp; Safari(✅Suportado)</p></blockquote><hr>`,14);function r(k,m){const n=l("RouterLink");return a(),e("div",null,[d,p("p",null,[o(n,{to:"/content/HasSelector/"},{default:t(()=>[c("Ir para o próximo conteúdo")]),_:1})])])}const b=s(u,[["render",r],["__file","index.html.vue"]]);export{b as default};
