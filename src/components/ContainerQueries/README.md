# Container Queries

Para utilizar o `@container` é necessário definir um query para o componente, fazemos isso da seguinte forma:

```scss
.nosso-wrapper {
  contain: style layout inline-size;
}
```

O que fizemos a cima foi definir o tipo do container e o nome dele.

Note que o `@container` tem o mesmo funcionamento do `@media`, entretanto oque diferencia os dois é o container vai ter o adicional de poder utilizar operadores lógicos para definir o tamanho do container.

Oque também diferencia o `@container` do `@media` é que ele ajusta o tamanho dos elementos baseado na classe pai e não pelo tamanho do viewport.

EX:

```scss
@container (inline > 50px) {
  .nossa-classe {
    display: grid;
    align-items: center;
    justify-content: center;
  }
}
```

> Compatibilidade: Chrome(🚧Beta), Firefox(🚧Beta), Chromium(🚧Beta) & Safari(✅Suportado)
