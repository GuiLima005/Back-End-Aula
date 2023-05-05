#Cria um database
create database db_lion_school_turma_manha;

#Visualiza todos os databases existentes no Banco de Dados
show databases;

#Seleciona o database que será utilizado
use db_lion_school_turma_manha;

#Visualiza todas as tabelas existentes em um database
show tables;

#Cria a tabela de aluno
create table tbl_aluno (
	id int not null primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(18) not null,
    rg varchar(15) not null,
    data_nascimento date not null,
    email varchar(250) not null,
    unique index(id)
);

#Mostra a descrição da tabela, mostrando os atributos e suas caracteristicas
desc tbl_aluno;

#Insere dados na tabela de alunos / Todos os valores recebem aspas, exceto no tipo int. (números inteiros)
insert into tbl_aluno (nome, cpf, rg, data_nascimento, email)

#Os valores que quero adicionar nos dados
values ('José da Silva', '300.400.458.10', '22.700.123-7', '2000-05-20', 'jose@gmail.com');

#Visualizar o conteúdo de uma tabela
select * from tbl_aluno;

insert into tbl_aluno (nome, cpf, rg, data_nascimento, email)
values ('Maria da Silva', '200.600.159.10', '20.900.987-7', '1955-10-08', 'maria@gmail.com');

#Atualiza as informações na tabela (Não esquecer do critérios de busca)
update tbl_aluno set email = 'jose@hotmail.com' where id = 1;

#Exclui um registro da tabela (Não esquecer do critério de busca)
delete from tbl_aluno where id = 2;