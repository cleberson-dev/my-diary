# My Diary :green_book:

Diário pessoal criado como meu primeiro Vue.js webapp.

<div>
  <img src="https://i.ibb.co/kqWFPT4/Screenshot-20200731-013913.png" alt="Página inicial" width="200">
  <img src="https://i.ibb.co/Ssdj1mD/Screenshot-20200731-014120.png" alt="Página de Lista registros" width="200">
  <img src="https://i.ibb.co/LR153Jh/Screenshot-20200731-014052.png" alt="Página de Criar registros" width="200">
</div>


## Uso

Primeiramente, é necessário ter [Node.js](https://nodejs.org) instalado em sua máquina.

Para usar:

- Clone o repositório para seu sistema:

  ```bash
  git clone https://github.com/cleberson-dev/my-diary.git
  ```

- Dentro do diretório do repositório clonado, execute o comando:

  ``````bash
  npm run serve
  ``````

  Com isso, iniciará um ambiente de desenvolvimento local no endereço `http://localhost:8080`, conseguindo visualizar/interagir com a aplicação.



## Sobre

O projeto é usado para aprendizado da framework Vue.js (focada em fáceis e rápidas construções de UIs) e portanto não penso em publicar na Web já que lidaria com múltiplos usuários, e com isso autenticação, autorização, bancos de dados, servidores, o que não é o escopo desse projeto.

A aplicação é um diário pessoal meu onde posso registrar diariamente um resumo do dia consistindo de tarefas criadas e feitas, humor geral, síntese, etc... Só é possível criar um registro por dia e não é possível removê-lo após publicação.

> Por enquanto, não há persistência dos registros, há somente um conjunto de registros falsos para melhor visualização da aplicação, porém existe a possibilidade de criar um registro pro dia atual.



## Tarefas Pendentes

- [ ] Componentizar Cabeçalho
- [ ] Separar lógica de acesso/manipulação à dados em serviços
- [ ] Persistir registros
- [ ] Configurar aplicação para produção
- [ ] Realizar testes E2E (com Cypress)
- [ ] Realizar testes unitários
- [ ] Realizar testes de integração
- [ ] [NÃO IMPORTANTE] Criar API REST para gerenciamento dos registros

