# Extend Rule

O extend é um recurso em que você replica o mesmo estilo de uma classe em outra.

Mas qual a diferença entre o `@mixin` e o `@extend`?

O mixin vai gerar uma copia daquele estilo em outro componente na hora da compilação.
Já o extends gera uma referência para a classe original.

EXAMPLE:

```scss
/// Mixin input

@mixin placeHolder {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.classe1 {
    @include placeholder;
}
.classe2 {
    @include placeholder;
}

/// Mixin output
.classe1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.classe2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
```

```scss
/// Extend input
.placeHolder {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.classe1 {
    @extend %placeHolder;
}
.classe2 {
    @extend %placeHolder;
}

/// Extend output
.classe1,
.classe2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
```

Apesar do `@extend` ser mais simples, ele é tão poderoso quanto `@mixin`. Mas isso pode causar alguns problemas.

- Como a classe `.placeHolder` é copiada para duas classes, elas são independentes e não se comportam como se fossem uma única classe.
- Dependendo do comportamento da classe, a classe pai pode não ser a classe original.

## Quando usar ou não o `@extend`?

- Mixin: Utilize para gerar seu código de modo dinâmico através de variáveis;
- Extend: Utilize para elementos comuns mas que haverá pouca repetição;

Quando for necessário criar algum tipo de automatização utilize o `@mixin`, caso contrario utilize o `@extend`, ou até mesmo os dois juntos.

> Compatibilidade: Chrome(✅Suportado), Firefox(✅Suportado), Chromium(✅Suportado) & Safari(✅Suportado)
