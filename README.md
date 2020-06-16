<h2 align="center">
  Desafio 02: Conceitos do Node.js ✍️ 
</h2>

<img src="https://images8.alphacoders.com/380/thumb-1920-380534.png">

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher!”</blockquote>

## :rocket: Sobre o desafio

Objetivo do desafio: criar uma aplicação para armazenar repositórios fictícios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".
API construída utilizando Node.js

Desafio original: https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs

## Específicação dos testes feitos pela Rocketseat

- **`should be able to create a new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.

- **`should be able to list the repositories`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

- **`should be able to update repository`**: Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos `url`, `title` e `techs`.

- **`should not be able to update a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should not be able to update repository likes manually`**: Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

- **`should be able to delete the repository`**: Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status `204`.

- **`should not be able to delete a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should be able to give a like to the repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

- **`should not be able to like a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

<h2>:toolbox: Tecnologias usadas</h2>
<ul>
<li>Javascript;</li>
<li>NodeJS;</li>
<li>Express;</li>
</ul>

<h2>:man_technologist: Features</h2>
<ul>
<li>Métodos HTTP</li>
<li>HTTP Status Code</li>
<li>Uso de rotas estáticas e dinâmicas;</li>
<li>Desestruturação ES6</li>
<li>Parâmetros de API</li>
</ul>

<h2>:heavy_check_mark: Teste a API na sua máquina</h2>
$ git clone https://github.com/MatheusChein/desafio-node.git
<br>
$ yarn install
<br>
$ yarn dev
<br>
<hr>
README inspirado pela <a href="https://github.com/Rocketseat">Rocketseat</a> e pelo <a href="https://github.com/victorfclima">Victor França</a> <br>
<br>
💼 <a href="https://www.linkedin.com/in/matheus-chein/">Matheus Chein</a>
