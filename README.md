# vertexAI

Este código é um exemplo utilizado em projetos por mim mesmo para usar o Vertex AI para fazer análise de imagens.
Eu posso tanto passar a imagem em formato base64 atraves de request quanto extrair o rquivo diretamente de alguma psta dentro do projeto.

### O curl abaixo você pode colar no postman, está na estrutura que uso

```curl
curl --location 'http://localhost:3001/vertex' \
--header 'Content-Type: application/json' \
--data '{
    "mimeType": "image/png",
    "fileBase64": "passe aqui seu arquivo base64"
}'
```
