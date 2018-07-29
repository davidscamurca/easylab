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

# Exemplo - GET

Para user este recurso utilize `https://projetosinformacao.herokuapp.com/easy/api/v1/auth/` com o vebo `GET`

```json
{
  isAdm: true
  _id:  "5b5501c32b957b144f50300e"
  name: "Fucapi"
  email:  "fucapi@gmail.com"
  createdAt:  "2018-07-22T22:14:27.813Z"
  __v:  0
}
```
