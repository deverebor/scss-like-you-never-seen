# Has Selector

É uma pseudo classe que permite ao usuário selecionar um elemento do DOM e manipular caso o mesmo exista. Ele não pode ser utilizado dentro de classes css, somente selecionando seletores para seletores.

```scss
section:has(div) {
  color: red;
}
```

```html
<section>
    <h1>Has Selector</h1>
    <div>
      <p>Message</p>
    </div>
  </section>
```

> Compatibilidade: Chrome(🚧Beta), Firefox(🚧Beta), Chromium(🚧Beta) & Safari(✅Suportado)
