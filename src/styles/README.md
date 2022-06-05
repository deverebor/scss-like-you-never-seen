# Sass Module mode

- usando o @import no scss encontramos um problema, um arquivo quer possui por exemplo margin: 5rem; no final pode ficar com margin: 10rem; vistoq ue o @import na hora da compilação leva em consideração a ordem;

- a ordem da importação também é um problema visto que oque é global tem que ser importado por ultimo para não gerar erro de dependência;

@foward -> similar ao @import
@use -> será utilizado no contexto recebe um namespace então tudo teria que ser util.$breakingpoint, caso não queria usar o namespace basta colocar * e não será mais necessário 

Tanto o @use quando o @foward tem a mesma utilização porém o @use carrega mixins e variáveis

@extend -> ler sobre

## 7-1 pattern scss

*"One file to **RULE** them all."*
*"One file to **FIND** them".*
*"One file to **BRING** them all".*
*"And in the sass way **MERGE** them".*
