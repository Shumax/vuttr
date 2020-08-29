# VUTTR - Very Usefuls Tools To Remember
	
## Objetivo
 A tarefa é construir uma API e banco de dados para a aplicação VUTTR (Very Useful Tools to Remember). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

# User Stories e wireframes

####	0): A API deve responder na porta 3000

#### 1): Deve haver uma rota para listar todas as ferramentas cadastradas
 
```json
[
	{
		"id": 1, // ou qualquer outro identificador
		"title": "Notion",
		"link": "https://notion.so",
		"description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized",
		"tags": [
			"organization",
			"planning",
			"collaboration",
			"writing",
			"calendar"
		]
	},
	{
		"id": 2,
		"title": "json-server",
		"link": "https://github.com/typicode/json-server",
		"description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
		"tags": [
			"api",
			"json",
			"schema",
			"node",
			"github",
			"rest"
		]
	},
	{
		"id": 3,
		"title": "fastify",
		"link": "https://www.fastify.io/",
		"description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
		"tags": [
			"web",
			"framework",
			"node",
			"http2",
			"https",
			"localhost"
		]
	}
]
```

#### 2): Deve ser possível filtrar ferramentas utilizando uma busca por tag
 GET /tools?tag=node (node é a tag sendo buscada neste exemplo)

```json
[
	{
			id: 2, // ou qualquer outro identificador
			title: "json-server",
			link: "https://github.com/typicode/json-server",
			description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
			tags: [
					"api",
					"json",
					"schema",
					"node",
					"github",
					"rest"
			]
	},
	{
			id: 3,
			title: "fastify",
			link: "https://www.fastify.io/",
			description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
			tags: [
					"web",
					"framework",
					"node",
					"http2",
					"https",
					"localhost"
			]
	}
]
```

#### 3): Deve haver uma rota para cadastrar uma nova ferramenta
 O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor). A resposta, em caso de sucesso, deve ser o mesmo objeto, com seu novo ID gerado.

  POST /tools Content-Type: application/json 

```json
{
	"title": "hotel",
	"link": "https://github.com/typicode/hotel",
	"description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
	"tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
}
```
 Resposta:
 
 Status: 201 Created
 
 Content-Type: application/json
 
```json     
{
		"title": "hotel",
		"link": "https://github.com/typicode/hotel",
		"description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
		"tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
		"id":5 // ou qualquer outro identificador
}
```

#### 4): O usuário deve poder remover uma ferramenta por ID
 
 DELETE /tools/:id
 
 Resposta:
 
 Status: 204 No Content 


## Dependências Necessárias
```json
{
	"body-parser": "^1.19.0",
	"express": "^4.17.1",
	"mysql2": "^2.1.0",
	"sequelize": "^6.3.4",
	"sequelize-cli": "^6.2.0",
	"eslint": "^7.7.0"
}
```

### Iniciar o projeto:
* Instale as dependências do projeto com o comando *yarn install* ou *npm install*.
* Inicie o projeto com comando *yarn start* ou *npm start* / *npm run start*.

### Requisitos:
* **[Node v12.18.3](https://nodejs.org/en/)** - ou superior, instalado em seu computador.
* **[MySQL 5.7.31](https://dev.mysql.com/doc/)**