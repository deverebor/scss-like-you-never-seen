# Accent Color

O Accent Color é uma propriedade css que permite a alteração de cores
em elementos específicos do site. Atualmente os elementos que podem
ter a cor alterada são:

```html
<!-- input:checkbox -->
<input type="checkbox" />
<!-- input:radio -->
<input type="radio" />
<!-- input:range -->
<input type="range" />
<!-- progress -->
<progress />
```

Isso permite que o usuário tenha uma experiência mais personalizada
com o site, para determinadas interações. Além de remover a
complexidade que anteriormente existia para alterar a cor desses
elementos.

## Como usar

Para usar o Accent Color, basta adicionar a propriedade `accent-color`
ao elemento que deseja alterar a cor. O valor dessa propriedade deve
ser uma cor válida, como `red`, `#f00`, `rgb(255, 0, 0)`,
`hsl(250, 100%, 34%)` ou variáveis de cor do seu design system.

```html
<input type="checkbox" class="foo" />
```

```css
.foo {
  accent-color: red;
}
```

> Compatibilidade: Chrome(✅Suportado), Firefox(✅Suportado), Chromium(✅Suportado) & Safari(✅Suportado)
