create database amandiitta_store;


create table usuarios
(
  id serial primary key,
  nome text not null,
  email text not null unique ,
  senha text not null
);

create table clientes
(
  id serial primary key,
  nome text not null,
  email text null unique,
  endereco text not null, 
  telefone text not null unique
);

create table produtos
(
  id serial primary key,
  descricao text not null,
  quantidade_estoque integer not null,
  valor numeric not null
);

create table estoque 
(
  id serial primary key,
  descricao text not null,
  qtd_estoque int not null,
  valor numeric not null,
  
)
