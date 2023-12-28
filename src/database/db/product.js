const knex = require("../../conection/conection");

module.exports = {
  buscaId: async (id) => {
    return await knex("produtos").first().where({ id });
  },

  buscaEmail: async (email) => {
    return await knex("produtos").first().where({ email });
  },

  buscaTelefone: async (telefone) => {
    return await knex("produtos").first().where({ telefone });
  },

  allUsers: async () => {
    return await knex.select("id", "nome", "email").from("produtos");
  },

  userCreate: async (user) => {
    return await knex("produtos").insert(user);
  },
};
