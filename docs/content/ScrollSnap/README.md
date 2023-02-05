# Scroll Snap

O scroll snap é uma nova propriedade que nos permite criar interações mais intuitivas em dispositivos móveis, como por exemplo, carrosséis, sliders, etc.

## Como funciona?

Para se utilizar o scroll snap, basta adicionar a propriedade `scroll-snap-type` em um elemento pai, e adicionar a propriedade `scroll-snap-align` em seus filhos.

```scss
.carousel {
  scroll-snap-type: x mandatory;
 }

.carousel__item { 
 scroll-snap-align: center;
 }
```

Com isso, ao rolar o elemento pai, os filhos irão se alinhar com o scroll. Podemos utilizar os valores `start`, `center` e `end` para definir a posição do elemento filho.

---

[Ir para o próximo conteúdo](../StylesArchitecture/README.md)
