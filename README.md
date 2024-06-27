# API de Pontos de Interesse

## Descrição

Este é um projeto de API para gerenciar pontos de interesse do usuário com base na geolocalização. O projeto foi desenvolvido usando TypeScript, JavaScript e NPM.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o NPM instalados em seu sistema.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Scripts

O projeto inclui os seguintes scripts NPM:

- `build`: Compila o projeto usando o Nest.js.
- `format`: Formata o código usando Prettier.
- `start`: Inicia o servidor Nest.js.
- `start:dev`: Inicia o servidor Nest.js em modo de desenvolvimento (com hot-reloading).
- `start:debug`: Inicia o servidor Nest.js em modo de depuração.
- `start:prod`: Inicia o servidor usando o código compilado.
- `lint`: Executa o linter ESLint no código.
- `test:cov`: Executa os testes e gera um relatório de cobertura de código.
- `test:e2e`: Executa os testes de ponta a ponta.

## Uso

### Criar um ponto de interesse

Endpoint: `POST /create-point`

Payload:

```json
{
  "name": "string",
  "coordinate_x": "number",
  "coordinate_y": "number",
  "opening_time": "string",
  "closing_time": "string"
}
```

### Obter todos os pontos de interesse

Endpoint: `GET /all-interest-points`

### Obter pontos de interesse por proximidade

Endpoint: `GET /interest-points-proximity`

Query parameters:

- `pageSize`: Número de resultados por página.
- `page`: Número da página.

Payload:

```json
{
  "coordinate_x": "number",
  "coordinate_y": "number",
  "time": "String"
}
```

## Testes

Para executar os testes, use o seguinte comando:

```bash
npm run test:e2e
```

Para gerar um relatório de cobertura de código, use o seguinte comando:

```bash
npm run test:e2e:cov
```
