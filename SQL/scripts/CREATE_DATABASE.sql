DROP DATABASE IF EXISTS gustavo_events;

CREATE DATABASE gustavo_events;

USE gustavo_events;

CREATE TABLE usuario (
    email VARCHAR(30) PRIMARY KEY,
    senha VARCHAR(20) NOT NULL,
    nome VARCHAR(60) NOT NULL,
    foto VARCHAR(200),
    descricao VARCHAR(200)
);

CREATE TABLE evento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(200),
    endereco VARCHAR(200) NOT NULL,
    data_hora DATETIME
);

CREATE TABLE usuario_evento (
    email VARCHAR(30) NOT NULL,
    id INT AUTO_INCREMENT,
    PRIMARY KEY IDENTITY(email, id),
    FOREIGN KEY(email) REFERENCES usuario(email),
    FOREIGN KEY(id) REFERENCES evento(id)  
);
