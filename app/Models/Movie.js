'use strict'

const MovieFilter = use('App/ModelFilters/MovieFilter')
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Movie extends Model {
  static boot () {
    super.boot()
    this.addTrait('@provider:Filterable', MovieFilter)
  }
}

module.exports = Movie
