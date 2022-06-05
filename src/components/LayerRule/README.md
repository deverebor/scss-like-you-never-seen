# Layer Rule

Define uma camada de cascata para ser trabalhada, as regas farão parte daquele contexto, não do escopo global da view.

EXAMPLE:

```scss
@layer base, component;

@layer base {
  .button {
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #333;
    padding: 10px;
    margin: 10px;
  }
}

@layer component {
  .button {
    &__title {
      font-size: 1.5rem;
      font-weight: bold;
    }
    &__icon {
      margin-right: 0.5rem;
    }
  }
}
```

A ordem de declaração de camadas é importante, pois a camada mais acima será a camada mais próxima do contexto, então caso você altere a ordem a prioridade do estilo também mudará.

A propriedade layer pode ser útil para resolver problemas de prioridade não sendo mais necessário usar o atributo important.

> Compatibilidade: Chrome(✅Suportado), Firefox(✅Suportado), Chromium(✅Suportado) & Safari(✅Suportado)
