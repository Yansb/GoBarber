<h1 align="center">
  <img alt='GoStack GoBarber' src='https://camo.githubusercontent.com/d1c64f218723a553f9f38bed77b485c0e172cb0c/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6c756b656d6f72616c65732f696d6167652f75706c6f61642f76313536343533333035312f726561646d655f6c6f676f732f676f6261726265725f6867356464782e706e67' />
  <br>
  GoBarber API
<h1>

<h4 align='center'>
  Api do aplicativo Go barber
</h4>

<br>
<br>

## :rocket:

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp)

## Para rodar a aplicação:
```bash
  yarn dev:server
```

## Para rodar os testes automatizados:

```bash
yarn test
```
## To do

# Recuperação de senha

**RF**(Requisitos Funcionais)

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**(Requisitos Não Funcionais)

- Utilizar Mailtrap para testar envios em ambiente dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**(Regras de Negocios)

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisar confirmar a nova senha ao resetar a senha;

# Atualização do perfil

**RF**(Requisitos Funcionais)

- O usuário deve poder atualizar seu nome, e-mail e senha

**RN**(Regras de Negocios)

- O usuario não pode alterar seu e-mail para um e-mail ja utilizado por outro usuario;
- Para atualizar sua senha o usuario deve colocar a senha antiga;
- Para atualizar sua senha o usuário deve confirmar a nova senha;

# Painel do prestador

**RF**(Requisitos Funcionais)

- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificações não lidas

**RNF**(Requisitos Não Funcionais)

- Os agendamentos do prestador no dia, devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestdor devem ser enviadas em tempo-real utilizando Socket.io

**RN**(Regras de Negocios)

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar

# Agendamento de serviços

**RF**(Requisitos Funcionais)

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponivel disponivel de um prestador;
- O usuário deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**(Requisitos Não Funcionais)

- A listagem de prestadores deve ser armazenada em cache;

**RN**(Regras de Negocios)

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre as 8h as 18h (primeiro às 8h, ultimo às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que ja passou;
- O usuário não pode agendar um horário consigo mesmo;


<br>
<h4>
Made with 💜️ by Rocketseat
</h4>
