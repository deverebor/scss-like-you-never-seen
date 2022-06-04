# SubGrids

Com a popularidade dos grids (já que flex-box só se move em uma direção) a utilização de grids é o mias comum hoje para criar estilizações mais complexas.

Mas até então não era possível estilizar grids dentro de grids sem perder a linearidade do código, sendo necessário algumas vezes fazer uma gambiarra ou outra para funcionar e manter a responsividade funcionando corretamente. Com a chegada da propriedade `subgrid` para o css a utilização de grids dentro de grids é agora é possível.

Basicamente a propriedade `subgrid` é uma propriedade que permite que você crie grids dentro de grids mantendo a responsividade, além de poder ser utilizada com o `gap`, também irá compartilhar os valores entre as grids assim como o `grid-template-rows` ou `grid-template-columns`.

> Compatibilidade: Chrome(🚧Beta), Firefox(✅Suportado), Chromium(🚧Beta) & Safari(✅Suportado)
