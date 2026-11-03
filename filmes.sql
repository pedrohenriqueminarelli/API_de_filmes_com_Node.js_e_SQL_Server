/*códigos de criação do sql*/
create schema dbFilmes;
	create table dbFilmes.categorias(
		id int identity(1,1) primary key,
		nome varchar(50) not null unique
	);

	create table dbFilmes.filmes(
		id int identity(1,1) primary key,
		titulo varchar(150) not null,
		categoria_id int not null,
		diretor varchar(100) not null,
		ano_lancamento int null,
		duracao_minutos int null
		foreign key (categoria_id)
			references dbFilmes.categorias(id)
	);
    insert into dbfilmes.categorias (nome) VALUES 
    ('Ação'),
    ('Aventura'),
    ('Romance'),
    ('Terror'),
    ('Comédia');
    select * from dbfilmes. categorias