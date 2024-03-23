# Perpustakaan Backend


## 📌 Getting Started

To run the project locally, follow these simple steps:

1. Clone this repository
```sh
  git clone https://github.com/putragabrielll/perpustakaan-be
  cd perpustakaan-be
```

2. Open in VSCode
```sh
  code .
```

3. install all the dependencies
```sh
  npm install
```

4. run the project
```sh
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_HOST`

`DB_USER`

`DB_DATABASE`

`DB_PASSWORD`

`DB_PORT`

## API Reference

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/books` | `GET` | Get a list of books |
| `/books/:id` | `GET` | Get a detailed books data |
| `/users` | `GET` | Get a list of users |
| `/users/:id` | `GET` | Get a detailed users data |
| `/order/pesan` | `POST` | Create order books |
| `/order/kembali/:userCode?booksCode=` | `PATCH` | Book back |