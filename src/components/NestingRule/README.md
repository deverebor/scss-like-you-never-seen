# Nesting Rule

Ao contrario do css, a regra de aninhamento não é aplicada a um
elemento em si, mas sim a um conjunto de elementos. Ela é usada para
definir a profundidade máxima de aninhamento de um elemento em relação
a outro.

## Exemplo

```scss
// NestingRule.scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

CSS output:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

Dessa forma, o aninhamento é limitado a 3 níveis, sendo que o primeiro
nível é o elemento `nav`, o segundo é o elemento `ul`, e o terceiro é
o elemento `li`.

## Porque devemos utilizar o Nesting Rule?

O Nesting Rule é uma forma de organizar o código, deixando-o mais
legível e de fácil manutenção. Além disso, ele evita a repetição de
nomes de classes, o que pode ser um problema quando o projeto cresce.

O poder do nesting se torna mais forte quando utilizamos a
Interpolation e a metodologia BEM.

## Oque é BEM ?

BEM é uma metodologia de desenvolvimento de CSS que visa facilitar a
manutenção e a escalabilidade de projetos. Ela é baseada em 3
princípios:

- **Block**: um bloco é um componente independente, que pode ser
  reutilizado em qualquer lugar do projeto. Um bloco pode ser
  representado por uma classe CSS.

- **Element**: um elemento é um componente que pertence a um bloco. Um
  elemento pode ser representado por uma classe CSS que começa com o
  nome do bloco, seguido de dois underlines e o nome do elemento.

- **Modifier**: um modificador é uma classe que modifica o estilo de
  um bloco ou elemento. Um modificador pode ser representado por uma
  classe CSS que começa com o nome do bloco ou elemento, seguido de
  dois underlines e o nome do modificador.

## Exemplo da utilização do BEM

```scss
// NestingRule.scss

// Block
.button {
  display: inline-block;
  padding: 6px 12px;
  text-decoration: none;
  border-radius: 4px;
}

// Element

.button__text {
  color: #fff;
}

// Modifier

.button--primary {
  background-color: #337ab7;
  border-color: #2e6da4;
}
```
