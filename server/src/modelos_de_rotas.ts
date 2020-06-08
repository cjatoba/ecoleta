import express from 'express';

const app = express();

app.use(express.json());

//Rota é o caminho completo da URL
//Recurso é o que estamao acessando, em uma rota www.teste.com/users o recurso
// são os users

//Requisições:
//GET: Busca informações no back-end
//POST: Cria informações no back-end
//PUT: atualiza informações no back-end
//Delete: Remove informações do backend

//Request Parms: são Parametros que vem na propria rota e identifica um recurso
//Queries parms: são parametros que vem das rotas geralmente opcionais para filtros, paginação etc
//Querie body: Parametros para criação e atualização de informações

const users = [
    'João',
    'Maria',
    'Clayton',
    'Gerson'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});


app.get('/users/:id', (request, response) => {
    //O retorno padrão do GET valor id é String, por isso precisa converter para number
    //para usar o valor de id no array
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user);
});

app.listen(3333);