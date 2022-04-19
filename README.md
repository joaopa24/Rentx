<h2 align="center">
  <img src="src/logo.svg"/>
  <br/>
  <br/>
  Car rental API developed during Ignite bootcamp from Rocketseat.
</h2>

---
## Requirements

### Cadastro de carro
**RF**
- Deve ser possível cadastrar um novo carro.

**RN**
- [x] Não deve ser possível cadastrar um carro com uma placa já existente.
- [x] O carro deve ser cadastrado, por padrão, como disponível.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de carros
**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
- [x] O usuário não precisa estar logado no sistema.

### Cadastro de especificação de carro
**RF**
- Deve ser possível cadastrar uma especificação para um carro.

**RN**
- [x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

### Cadastro de imagens do carro
**RF**
- Deve ser possível cadastrar a imagem do carro.

**RNF**
- Utilizar o multer para upload dos arquivos.

**RN**
- [x] O usuário pode cadastrar mais de uma imagem para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

---
### technologies:
- Node.js (https://nodejs.org/en/)
- TypeScript (https://www.typescriptlang.org/docs/)
- Express.js (http://expressjs.com/)
- TSyringe (https://www.npmjs.com/package/tsyringe)
- BCrypt (https://www.npmjs.com/package/bcrypt)
- JWT (https://jwt.io/)
- Docker (https://docs.docker.com/)
- TypeORM (https://typeorm.io/#/)
- PostgreSQL (https://www.postgresql.org/)
- Swagger (https://swagger.io/)

---
### How to run this project:

### 1. Clone this repository
```
$ git clone https://github.com/joaopa12/Rentx
```

### 2. Running the application on your terminal
```
#install the dependencies
$ yarn
# Start all the services and the application with Docker Compose
$ docker-compose up -d
# Once the services are running, run the migrations
$ yarn migration:run
#start the server
$ yarn dev
```

---
### Swagger Documentation

- Check the swagger documentation locally in: http://localhost:3333/api-docs

---
### 📄 License
This project is under MIT license.
