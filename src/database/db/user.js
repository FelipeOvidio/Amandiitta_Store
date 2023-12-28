const knex = require("../../conection/conection");

module.exports = {
  buscaId: async (id) => {
    return await knex("clientes").first().where({ id });
  },

  buscaEmail: async (email) => {
    return await knex("clientes").first().where({ email });
  },

  buscaTelefone: async (telefone) => {
    return await knex("clientes").first().where({ telefone });
  },

  allUsers: async () => {
    return await knex.select("id", "nome", "email").from("usuarios");
  },

  userCreate: async (user) => {
    return await knex("usuarios").insert(user);
  },
};
