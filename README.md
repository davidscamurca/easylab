# easylab

É uma RESTFul API, desenvolvida por [David Camurça](https://github.com/davidscamurca), [Jerlilson Silva](https://github.com/jerlilson), [Renata Nunes](https://github.com/Renata-SN) implementada com NodeJS + Express + MongoDB, utilizada como projeto final para as disciplinas de **Programação Web e Projetos de Sistemas**, ministrada pelo professor [Eder Franco](https://github.com/ederfranco23), no curso de **Engenharia de Software, 2018/1 da Faculdade FUCAPI**.


# Documentação
| Verbo   | Caminho/Recurso | Ação |
| ------- | --------------- |------- |
| GET     | /auth<br>/reservation<br>/administration<br> | Mostra todos |  
| POST    | /auth<br>/reservation<br>/administration<br> | Cria um novo registro  |
| PUT     | /auth/id<br>/reservation/id<br>/administration/id<br> | Atualiza todos os campos por ID |
| DELETE  | /auth/id<br>/reservation/id<br>/administration/id<br> | Delete por ID |
| PATCH   | /auth/id<br>/reservation/id<br>/administration/id<br> | Atualiza alguns campos por ID   |
| OPTIONS | /auth/id<br>/reservation/id<br>/administration/id<br> | Mostra as operações que o recursos pode realizar |

# Heroku - Acesse agora mesmo esta API online

Opção 1: [Heroku](http://projetosinformacao.herokuapp.com/easy/api/v1)<br>
Opção 2: http://projetosinformacao.herokuapp.com/easy/api/v1

# Exemplo - GET

Para usar este recurso utilize `https://projetosinformacao.herokuapp.com/easy/api/v1/auth/` com o verbo `GET`.

```json
{
  "isAdm": "Leviny Oasis",
  "_id": "5b5501c32b957b144f50300e",
  "name": "Fucapi",
  "email": "fucapi@gmail.com",
  "createdAt": "2018-07-22T22:14:27.813Z",
}
```

# Exemplo - POST

Para usar este recurso utilize `https://projetosinformacao.herokuapp.com/easy/api/v1/auth/register` com o verbo `POST`.

```json
{
  "name": "Leviny Oasis",
  "email": "levenyo@gmail.com",
  "password": "123456",
}
```

# Exemplo - PATCH

Utilize `https://projetosinformacao.herokuapp.com/easy/api/v1/administration/5b591597fe686b404a74c213` com o verbo `PATCH`.

```json
[
  {"propName": "name", "value": "Atualizado com o method PATCH" },
  {"propName": "isReserved", "value": true }
]
```

# Exemplo - PUT

Utilize `https://projetosinformacao.herokuapp.com/easy/api/v1/administration/5b591597fe686b404a74c213`com o verbo `PUT`.

```json
{
  "name": "Novo nome do Laboratório"
}
```

# Exemplo - DELETE

Utilize `https://projetosinformacao.herokuapp.com/easy/api/v1/administration/administration/5b55108a986387175d0009fa` com o verbo `DELETE`.

```json
{
Esse método não precisa de um corpo pra funcionar, bastar informar o ID pela URL(recurso) que o mesmo será deletado.
}
```


# Exemplo - OPTIONS
```json
{
}
```

