create database amandiitta_store;
-- drop table usuarios;
-- drop table clientes;
-- drop table estoque;
-- drop table pedidos;
-- drop table fornecedores;

create table usuarios
(
  id serial primary key,
  nome text not null,
  email text not null,
  senha text not null
);

create table clientes
(
  id serial primary key,
  nome text not null,
  telefone text not null
);

create table estoque
(
  id serial primary key,
  descricao text not null,
  quantidade_estoque integer not null,
  valor numeric not null
);
