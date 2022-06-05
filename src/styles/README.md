# Sass Module mode

A um bom tempo o sass trouxe essa feature muito massa chamada moudule.

Existem duas formas de se utilizar o sass module:

`nome.module.scss` ou `_nome.scss`

Nas duas formas você vai poder usufruir de todos os recursos do sass module.

As novidades que vieram foi justamente o `@use` que permite que você importe um arquivo de estilo dentro de outro, para ser utilizado naquele contexto.

`foward` que permite que você importe um arquivo de estilo dentro de outro e que ele seja passado para frente na importação.

## Porque o *`@import`* é um problema ?

Usando o @import no scss encontramos um problema, um arquivo que possui por exemplo `margin: 5rem;` no final pode ficar com `margin: 10rem;`, caso tenha alguma váriavel com o mesmo nome da qual alimenta aquela propriedade, visto que o @import na hora da compilação leva em consideração a ordem.

EXAMPLE:

```scss
@import "spacings"; // margin: 10rem;
@import "variables";// margin: 5rem;
@import "mixins";
@import "colors";


.container {
  margin: var(--margin); // essa margin vem do variables
}
```

Caso a gente altere a ordem de importação, na hora que ocorrer a compilação será alterado o valor.

```scss
@import "variables";// margin: 5rem;
@import "spacings"; // margin: 10rem;
@import "mixins";
@import "colors";


.container {
  margin: var(--margin); // essa margin vem do spacings
}
```

O sass compila de forma procedural, ou seja, o valor da propriedade vai ser alterado de acordo com a última variável encontrada.

## O problema que o *`@use`* e *`@foward`* resolve

### *@foward*

Ele é similar ao `@import`, você vai passar para frente oque estiver em um contexto, não haverá sobre escrita.

### *@use*

É utilizado no contexto e recebe um namespace, então se o meu arquivo se chama `util` tudo que eu utilizar ali será necessário passar o `util` como prefixo.

EX:

```scss
@use "_util";

.container {
  margin: util.$margin;
}
```

Caso não queria usar o namespace, esteja em processo de migração ou deseja utilizar outro nome porque o atual é grande, basta utilizar `as` e colocar um alias.

```scss
@use "_util" as u; // o prefixo agora é `u`
@use "_animations" as *; // não será necessário passar o namespace
```

## Eu posso utilizar essas features do module mode ?

Caso você tenha `node-sass`, `lib-sass` ou `ruby-sass`, você não poderá uitilizar o module mode. Essa feature está disponível apenas para o compiladores `sass` ou o `dart-sass`.

## 7-1 pattern scss

*"One file to **RULE** them all.*

*One file to **FIND** them.*

*One file to **BRING** them all.*

*And in the sass way **MERGE** them".*

Esse é o pattern mais utilizado para desfrutar do scss modules, ou seja, o scss modules é um modo de modularizar, cada arquivo é um componente, e cada componente é um modulo. A sua estrutura é a seguinte:
`abstracts`, `vendors`, `base`, `layout`, `components`, `pages` e `themes`

Existem vários patterns 4-1, 5-1 etc. Tudo vai depender da sua necessidade.

particularmente eu gosto mais desse para projetos VUE:

```md
styles/
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
|– pages/                # Base views -> HOME, ABOUT, CONTACT etc.
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
`– _index.scss           # Main Sass file
```
