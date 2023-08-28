<h1>MailCron</h1>

Esta aplicação consiste no envio de emails agendados, onde o usuário pode 
definir a data e hora que ele deseja que o job seja executado, além de definir
quem irá receber e o conteúdo da mensagem (texto ou html).

Obs: Neste projeto, utilizei princípios de arquitetura como SOLID e clean architecture,
fazendo com que cada camada seja independente e facilite a manutenção do código.


<h2>Como utilizar?</h2>
<p>Para fazer o uso da api, você deve fazer algumas configurações iniciais:</p>

- Instale as dependências:


 ```bash
 yarn
 ```


- Adiciona as variáveis de ambiente. Utilize o example.env como template:

  
```env
MAIL_USER="Email que enviará as mensagens"
MAIL_PASS="Senha de app do email"
```


- Execute a aplicação:
```bash
yarn dev
```
- Faça uma requisição à rota /send na porta 3000 do seu localhost:
```json
{
	"to": "receptor@gmail.com",
	"subject": "assunto",
	"content": "<h1>CONTEUDO AQUI</h1>",
	"date": "DD/MM/YYYY",
	"hour": "HH:MM"
}
```

- Resposta:

```bash
status: 200
```

<h2>Considerações finais:</h2>

Sinta-se à vontade para contribuir com o projeto! 
Para entrar em contato comigo, envie um email para: ruyteraraujo992@gmail.com
