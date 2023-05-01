INSERT INTO usuario VALUES 
("gustavo-dm2010@hotmail.com", "teste123", "Gustavo", "nenhuma", "admin do negócio todo!");

INSERT INTO evento VALUES 
(1, "Evento Teste", "descrição do coiso aqui", "aqui na minha casa", STR_TO_DATE('2023-04-26 11:49:00','%Y-%m-%d %H:%i:%s'));

INSERT INTO usuario_evento VALUES 
("gustavo-dm2010@hotmail.com", 1);


-- SELECT * FROM USUARIO;

-- SELECT * FROM EVENTO;

-- SELECT * FROM USUARIO_EVENTO;

-- SELECT * FROM USUARIO_EVENTO INNER JOIN USUARIO ON USUARIO_EVENTO.EMAIL = USUARIO.EMAIL;