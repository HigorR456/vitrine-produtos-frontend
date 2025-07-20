# Vitrine de Produtos

Frontend de e-commerce, contruído com Next.js, com foco em consumir backend tirando proveito de SSR e SSG do framework utilizado.

## Funcionalidades

✅ Autenticação de Usuário
- Cadastro e login de usuários ***(/account)***
- Autenticação via **JWT** armazenado em **cookie HTTP-Only**
- Proteção **CSRF** enviando o token nos headers da requisição

📦 Produtos
- Listagem paginada de produtos ***(/produtos)*** com **SSR**
- Suporte á paginação ***(/products?page=2)*** via searchParams
- Filtros de categoria, ordenação por preço, avaliação ou categoria via searchParams ***(/products?sortBy=price&sortOrder=asc)***
- Detalhamento de produto por id ***(/produtos/[id])*** com **SSG**
- Botão para comprar e adicionar item ao **carrinho** com armazenamento no **localStorage**.
- Gerenciamento de itens do carrinho de compras em ***(/cart)***.

🔐 Rotas Protegidas
- Perfil do usuário logado com opção de **deslogar** em ***(/account/user)***

## Tecnologias Utilizadas

- JavaScript
- Next.js
- Tailwind CSS

## Pré-requisitos

- Configurar o [backend](https://github.com/HigorR456/vitrine-produtos-backend)
- Node.js >=20.0.0 <23

## Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/HigorR456/vitrine-produtos-frontend.git
cd vitrine-produtos-frontend
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` conforme necessário.

### 3. Instale os pacotes

```bash
npm install
```

### 4. Inicie a aplicação

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000` (ou na porta configurada no arquivo `.env`).

## Licenciamento

ISC

---

Desenvolvido por [Higor Ruan](https://github.com/HigorR456)
