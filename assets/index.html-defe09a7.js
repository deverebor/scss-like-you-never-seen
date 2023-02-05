import{_ as e,W as a,X as n,Y as o,Z as i,$ as t,a1 as r,G as d,a0 as c}from"./framework-ba4bf44d.js";const l={},p=r(`<h1 id="sass-module-mode" tabindex="-1"><a class="header-anchor" href="#sass-module-mode" aria-hidden="true">#</a> Sass Module mode</h1><p>A um bom tempo o sass trouxe essa feature muito massa chamada moudule.</p><p>Existem duas formas de se utilizar o sass module:</p><p><code>nome.module.scss</code> ou <code>_nome.scss</code></p><p>Nas duas formas você vai poder usufruir de todos os recursos do sass module.</p><p>As novidades que vieram foi justamente o <code>@use</code> que permite que você importe um arquivo de estilo dentro de outro, para ser utilizado naquele contexto.</p><p><code>foward</code> que permite que você importe um arquivo de estilo dentro de outro e que ele seja passado para frente na importação.</p><h2 id="porque-o-import-e-um-problema" tabindex="-1"><a class="header-anchor" href="#porque-o-import-e-um-problema" aria-hidden="true">#</a> Porque o <em><code>@import</code></em> é um problema ?</h2><p>Usando o @import no scss encontramos um problema, um arquivo que possui por exemplo <code>margin: 5rem;</code> no final pode ficar com <code>margin: 10rem;</code>, caso tenha alguma váriavel com o mesmo nome da qual alimenta aquela propriedade, visto que o @import na hora da compilação leva em consideração a ordem.</p><p>EXAMPLE:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;spacings&quot;</span><span class="token punctuation">;</span> <span class="token comment">// margin: 10rem;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;variables&quot;</span><span class="token punctuation">;</span><span class="token comment">// margin: 5rem;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;mixins&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;colors&quot;</span><span class="token punctuation">;</span>


<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--margin<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// essa margin vem do variables</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Caso a gente altere a ordem de importação, na hora que ocorrer a compilação será alterado o valor.</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;variables&quot;</span><span class="token punctuation">;</span><span class="token comment">// margin: 5rem;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;spacings&quot;</span><span class="token punctuation">;</span> <span class="token comment">// margin: 10rem;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;mixins&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;colors&quot;</span><span class="token punctuation">;</span>


<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--margin<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// essa margin vem do spacings</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O sass compila de forma procedural, ou seja, o valor da propriedade vai ser alterado de acordo com a última variável encontrada.</p><h2 id="o-problema-que-o-use-e-foward-resolve" tabindex="-1"><a class="header-anchor" href="#o-problema-que-o-use-e-foward-resolve" aria-hidden="true">#</a> O problema que o <em><code>@use</code></em> e <em><code>@foward</code></em> resolve</h2><h3 id="foward" tabindex="-1"><a class="header-anchor" href="#foward" aria-hidden="true">#</a> <em>@foward</em></h3><p>Ele é similar ao <code>@import</code>, você vai passar para frente oque estiver em um contexto, não haverá sobre escrita.</p><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> <em>@use</em></h3><p>É utilizado no contexto e recebe um namespace, então se o meu arquivo se chama <code>util</code> tudo que eu utilizar ali será necessário passar o <code>util</code> como prefixo.</p><p>EX:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;_util&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> util.<span class="token variable">$margin</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Caso não queria usar o namespace, esteja em processo de migração ou deseja utilizar outro nome porque o atual é grande, basta utilizar <code>as</code> e colocar um alias.</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;_util&quot;</span> <span class="token module-modifier keyword">as</span> u<span class="token punctuation">;</span> <span class="token comment">// o prefixo agora é \`u\`</span>
<span class="token keyword">@use</span> <span class="token string">&quot;_animations&quot;</span> <span class="token module-modifier keyword">as</span> *<span class="token punctuation">;</span> <span class="token comment">// não será necessário passar o namespace</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eu-posso-utilizar-essas-features-do-module-mode" tabindex="-1"><a class="header-anchor" href="#eu-posso-utilizar-essas-features-do-module-mode" aria-hidden="true">#</a> Eu posso utilizar essas features do module mode ?</h2><p>Caso você tenha <code>node-sass</code>, <code>lib-sass</code> ou <code>ruby-sass</code>, você não poderá uitilizar o module mode. Essa feature está disponível apenas para o compiladores <code>sass</code> ou o <code>dart-sass</code>.</p><h2 id="_7-1-pattern-scss" tabindex="-1"><a class="header-anchor" href="#_7-1-pattern-scss" aria-hidden="true">#</a> 7-1 pattern scss</h2><p><em>&quot;One file to <strong>RULE</strong> them all.</em></p><p><em>One file to <strong>FIND</strong> them.</em></p><p><em>One file to <strong>BRING</strong> them all.</em></p><p><em>And in the sass way <strong>MERGE</strong> them&quot;.</em></p><p>Esse é o pattern mais utilizado para desfrutar do scss modules, ou seja, o scss modules é um modo de modularizar, cada arquivo é um componente, e cada componente é um modulo. A sua estrutura é a seguinte: <code>abstracts</code>, <code>vendors</code>, <code>base</code>, <code>layout</code>, <code>components</code>, <code>pages</code> e <code>themes</code></p><p>Existem vários patterns 4-1, 5-1 etc. Tudo vai depender da sua necessidade.</p><p>particularmente eu gosto mais desse para projetos VUE:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>styles/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _color.scss       # Paleta de cores da aplicação
|   |– _typography.scss  # Typography rules
|   |– _index.scss       # File used to import all base
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|
|– pages/                # Base views -&gt; HOME, ABOUT, CONTACT etc.
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|
|– themes/
|   |– _theme.scss       # Default theme
|
|– abstract/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _index.scss       # File used to import all abstracts
|
\`– _index.scss           # Main Sass file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,35);function u(m,v){const s=d("RouterLink");return a(),n("div",null,[p,o("p",null,[i(s,{to:"/content/SubGrids/"},{default:t(()=>[c("Ir para o próximo conteúdo")]),_:1})])])}const k=e(l,[["render",u],["__file","index.html.vue"]]);export{k as default};
