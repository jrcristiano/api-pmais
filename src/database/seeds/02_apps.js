const tableName = 'apps';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();
  await knex(tableName).insert([
    {id: 1, name: 'AVA', url: 'https://pmais.ava.com', cover: 'ava.png'},
    {id: 2, name: 'Avaliacoes', url: 'https://pmais.avaliacoes.com', cover: 'avaliacoes.png'},
    {id: 3, name: 'Banco de questões', url: 'https://pmais.bancodequestoes.com', cover: 'banco-de-questoes.png'},
    {id: 4, name: 'Cat learning', url: 'https://pmais.catlearning.com', cover: 'cat-learning.png'},
    {id: 5, name: 'Envio de cartões', url: 'https://pmais.enviodecartoes.com', cover: 'envio-de-cartoes.png'},
    {id: 6, name: 'Erratas', url: 'https://pmais.erratas.com', cover: 'erratas.png'},
    {id: 7, name: 'Eventos', url: 'https://pmais.eventos.com', cover: 'eventos.png'},
    {id: 8, name: 'Itinerários formativos', url: 'https://pmais.itinerariosformativos.com', cover: 'itinerarios-formativos.png'},
    {id: 9, name: 'Livro digital', url: 'https://pmais.livrodigital.com', cover: 'livro-digital.png'},
    {id: 10, name: 'Matriz BNCC', url: 'https://pmais.matrizbncc.com', cover: 'matriz-bncc.png'},
    {id: 11, name: 'MKT 365', url: 'https://pmais.mkt365.com', cover: 'mkt-365.png'},
    {id: 12, name: 'Portal Edros', url: 'https://pmais.portaledros.com', cover: 'portal-edros.png'},
    {id: 13, name: 'Minhas avaliações', url: 'https://pmais.minhasavaliacoes.com', cover: 'minhas-avaliacoes.png'},
    {id: 14, name: 'P+ redação', url: 'https://pmais.redacao.com', cover: 'redacao.png'},
  ]);
};
