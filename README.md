# CSTSI-BDA: Atividade Aual 4 - Filtros com Firebase

Faça o clone do projeto com o comando git:
>git clone https://github.com/g1ll/cstsi_bda_atividade_aula_04.git

Após o git fazer o download do projeto, entre na pasta ***cstsi_bda_atividade_aula_04***

>cd cstsi_bda_atividade_aula_04

Dentro da pasta execute o comando do npm para instalar as dependências, incluindo o Firebase:

>npm install

Espere o npm instalar todas as dependências e siga para a configuração do seu projeto.

Para configurar o acesso ao seu projeto no Firebase, crie o arquivo ***.env*** na raiz do projeto javascript:

Use este template: [.env](https://gist.githubusercontent.com/g1ll/6e401fcff66fae92aaa862903cc86669/raw/7bb0c78559e3fa1c82c469e7e905ba86a9dc27cc/.env)

[![env-file](https://i.ibb.co/KmC7gDg/env-file.png)](https://i.ibb.co/KmC7gDg/env-file.png)

Após criar cada variável de ambiente ***REACT_APP_NOME_CONFIG*** coloque o valor de acordo com as configurações de acesso de app ao seu projeto Firebase. Observe que as variáveis de ambiente usam o prefixo **REACT_APP_**, após este prefixo usa se o nome da variável da configuração do Firebase em formato MACRO_CASE.

As variáveis de ambiente que configuram o acesso do app ao projeto no Firebase serão lidas no módulo *"Firebase/firebase"*:

[![firebase-config](https://i.ibb.co/h8KLFyq/firebase-config.png)](https://i.ibb.co/h8KLFyq/firebase-config.png)

Caso o seu aquivo de configuração possua alguma variável que falta no módulo, apenas acrescente seguindo os padrões de nome em formato MACRO_CASE.

Agora já podemos testar o projeto rodando o comando abaixo no terminal e dentro da raiz do diretório do projeto:

>npm start

Este comando irá iniciar um servidor local para rodar o seu projeto react no endereço: [http://localhost:3000](http://localhost:3000)

Para testar o projeto apenas acesse o endereço acima após a execução do comando **npm start**.

As alterações no código serão automaticamente compiladas, atualizando a página no endereço de teste.
Caso a porta 3000 do seu computador já esteja ocupada, o npm irá lhe perguntar por outra porta ou rodará na pora 3001.

Agora o projeto cliente está pronto para a atividade!

## Implementando as funções de Firebase/ProdutoDao.js

A atividade consiste da implementação das seguintes funções no módulo **[Firebase/ProdutoDao](https://github.com/g1ll/cstsi_bda_atividade_aula_04/blob/main/src/components/Firebase/ProdutosDao.js)** :

1 - ***GetOrderByChild(order, db, callback)***: Recebe o termo para a ordenação (***order***), uma referência ao banco de dados (***db***) e a referência à função de ***callback***, a qual deverá ser repassada ao evento apropriado do firebase.

2 - ***getFilterByChild(filter,value, db,callback)***: Recebe o nome do filtro a ser aplicado (***filter***), ou sejam filho do nó (***atributo***). Em value a função recebe o valor a ser filtrado. Os demais parâmetros são iguais a função anterior. Importante: esta função deverá retornar os dados do banco que sejam iguais ou maiores do que o valor do value.

3 - ***getMostExpensive(db, setValue, list)***: Ordenar pelos mais caros. Esta função recebe uma referência ao banco de dados (***db***). Esta função recebe como segundo parâmetro (***setValue***) a referêrencia da função que alterar os dados de estado do componente (***[ListProds](https://github.com/g1ll/cstsi_bda_atividade_aula_04/blob/main/src/components/App/listProds.js)***) responsável pela visualização dos resultados. E por fim, a referencia ao atributo que guarda os valores da lista retornada pelo firebase (***list***).

 Devido a sua natureza desta função, precisaremos implenetar o *callbak* e portanto usar  ***setValue([...list])*** quando os resultados estiverem prontos para serem repassados o componente do react.

 4 - ***getMostCheap(db, callback)***: Essa função deverá retornar a lista de produtos ordenada pelos menores preços, de menor a maior. Não é necessário desenvolver o *callback*, apenas repassá-lo para o evento apropriado do firebase.

 5 - ***getPriceRange(value, db, callback)***: Esta função deverá mostrar um intervalo de valores, menores ou iguais ao definido. Como parâmetros, a função recebe o valor para a filtragem dos preços iguais ou menores do que o ***value***, uma referência ao banco de dados (***db***) e a referência a função de ***callback***, a qual será repassada ao evento do firebase.

## Referências:

[Filtro de Dados no Firebase](https://firebase.google.com/docs/database/web/lists-of-data#filtering_data)

[Firebase Instalação e Configuração](https://firebase.google.com/docs/database/web/start?hl=pt)

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

[Create React App](https://github.com/facebook/create-react-app).
