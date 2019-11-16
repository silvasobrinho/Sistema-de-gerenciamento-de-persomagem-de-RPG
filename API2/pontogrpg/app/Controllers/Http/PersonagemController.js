'use strict'

const Personagem = use('App/models/Personagem')

/** @typedef {import('@adonisjs/framework/src/Request',} Request */
/** @typedef {import('@adonisjs/framework/src/Response',} Response */
/** @typedef {import('@adonisjs/framework/src/View',} View */

/**
 * Resourceful controller for interacting with personagems
 */
class PersonagemController {
  /**
   * Show a list of all personagems.
   * GET personagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const personagens = Personagem.all()

    return personagens
  }

  /**
   * Create/save a new personagem.
   * POST personagems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {

    const { id } = auth.user

    const data = request.only([
      'nome_personagem',
      'nome_jogador',
      'raca',
      'idade',
      'classe',
      'sexo',
      'pv',
      'mana',
      'agi',
      'car',
      'con',
      'dex',
      'for',
      'int',
      'anotacoes',
      'pericias',
      'benignos',
      'malignos',
      'arma1',
      'dano1',
      'arma2',
      'dano2',
      'arma3',
      'dano3',
      'armadura1',
      'protecao1',
      'armadura2',
      'protecao2',
      'armadura3',
      'protecao3',
      'armadura4',
      'protecao4',
      'armadura5',
      'protecao5',
      'magia1',
      'custo1',
      'magia2',
      'custo2',
      'magia3',
      'custo3',
      'magia4',
      'custo4',
      'magia5',
      'custo5'

    ])
      const personagem = await Personagem.create({ ...data,user_id:id })
  
      return personagem
  }

  /**
   * Display a single personagem.
   * GET personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    
    const personagem = await Personagem.query().where('user_id', params.id).fetch();

  
    return personagem
  }

  /**
   * Update personagem details.
   * PUT or PATCH personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params,auth, request, response }) {

    const personagem = await Personagem.findOrFail(params.id)

    if (personagem.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Não autorizado'})}

    const data = request.only([
      'nome_personagem',
      'nome_jogador',
      'raca',
      'idade',
      'classe',
      'sexo',
      'pv',
      'mana',
      'agi',
      'car',
      'con',
      'dex',
      'for',
      'int',
      'anotacoes',
      'pericias',
      'benignos',
      'malignos',
      'arma1',
      'dano1',
      'arma2',
      'dano2',
      'arma3',
      'dano3',
      'armadura1',
      'protecao1',
      'armadura2',
      'protecao2',
      'armadura3',
      'protecao3',
      'armadura4',
      'protecao4',
      'armadura5',
      'protecao5',
      'magia1',
      'custo1',
      'magia2',
      'custo2',
      'magia3',
      'custo3',
      'magia4',
      'custo4',
      'magia5',
      'custo5'

    ])

    personagem.merge(data)

    await personagem.save()

    return personagem
  }

  /**
   * Delete a personagem with id.
   * DELETE personagems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {

    const personagem = await Personagem.findOrFail(params.id)


    if (personagem.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Não autorizado'})

    }
    await personagem.delete()
  }
}

module.exports = PersonagemController
