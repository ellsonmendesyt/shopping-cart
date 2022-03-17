



## `COMO INICAR O PROJETO`
#
## Clone o projeto 
O projeto contem uma pasta pro front end
chamada `front` e uma pro back chamada `api`


### Rode primeiro o servidor
#
 Entre na pasta `api` e execute o comando
 `yarn install` para instalar as depdendencias
 e depois o comando `yarn run serve`
 pra subir o servidor
 
### Agora o front end
#
Entre na pasta `front` instale as dependencias usando
`yarn install` após isso, rode o comando `yarn start`
e estará tudo preparado :)

### OBS 
#
Como corria o risto dos links da api cairem montei um pequeno servidor pra garantir a estabilidade

### Ainda está previsto escrever os testes
e contêinerizar, assim ficaria mais automatizado
a inicialização dos dos microserviços usando o `docker-compose` ou `kubernetes`

### Funcionamento do Carrinho
#
Na parte principal do site temos a listagem.
Ao passar o mouse sobre um dos produtos um cortina 
revelará o botão de adicionar ao carrinho

<img src='front/public/home2.gif' width="700" >


Há possibilidade de adicionar mais de um item ao carrinho, caso adicione mais de um alterará somente
o indicador de quantidade de item 

O usuario poderá remover seu itens do carrinho
se tiver mais de um item igual ao clicar em remover 
decrementará somente a quantidade, havendo apenas um item no carrinho ele será removido

<img src='./front/public/images/cart2.gif' width="700" >
O carrinho `enxergará` todos os itens e seus respectivos indicadores de unidades e fará o somatorio de todos os itens assim como atualizará de forma automatica caso seja removido algum item

### Eita readme grande hein      :)