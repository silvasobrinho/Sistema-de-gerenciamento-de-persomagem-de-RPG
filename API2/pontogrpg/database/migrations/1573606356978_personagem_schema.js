'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemSchema extends Schema {
  up () {
    this.create('personagems', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nome_personagem').notNullable()
      table.string('nome_jogador').notNullable()
      table.string('raca').notNullable()
      table.string('idade').notNullable()
      table.string('classe').notNullable()
      table.string('sexo').notNullable()
      table.string('pv').notNullable()
      table.string('mana').notNullable()
      table.string('agi').notNullable()
      table.string('car').notNullable()
      table.string('con').notNullable()
      table.string('dex').notNullable()
      table.string('for').notNullable()
      table.string('int').notNullable()
      table.string('anotacoes')
      table.string('pericias')
      table.string('benignos')
      table.string('malignos')
      table.string('arma1')
      table.string('dano1')
      table.string('arma2')
      table.string('dano2')
      table.string('arma3')
      table.string('dano3')
      table.string('armadura1')
      table.string('protecao1')
      table.string('armadura2')
      table.string('protecao2')
      table.string('armadura3')
      table.string('protecao3')
      table.string('armadura4')
      table.string('protecao4')
      table.string('armadura5')
      table.string('protecao5')
      table.string('magia1')
      table.string('custo1')
      table.string('magia2')
      table.string('custo2')
      table.string('magia3')
      table.string('custo3')
      table.string('magia4')
      table.string('custo4')
      table.string('magia5')
      table.string('custo5')
      table.timestamps()
    })
  }

  down () {
    this.drop('personagems')
  }
}

module.exports = PersonagemSchema
