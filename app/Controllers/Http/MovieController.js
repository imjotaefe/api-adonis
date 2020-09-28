'use strict'

const Movie = use('App/Models/Movie');
const Database = use('Database');

class MovieController {
  async create({ request, response }) {
    try {
      const data = request.only(["name", "description", "year", "genre"])

      const movie = await Movie.create(data)
      return movie

    } catch (err) {
      return response.status(501).send({ error: `Erro: ${err}` })
    }
  }
  async list() {
    const movies = await Movie.all()
    const count = await Database.from('movies').count()                                         // returns array

    const total = count[0]['count(*)']


    const data = { total: total, data: movies }
    return data
  }
  async show({ response, params }) {
    const movie = await Movie.query().where('id', params.id).first()

    if (!movie) {
      return response.status(401).send({ message: 'Movie not found' })
    }

    return movie
  }

  async update({ request, response, params }) {
    const { name, description, year, genre } = request.all()

    const movie = await Movie.query().where('id', params.id).first()

    if (!movie) {
      return response.status(401).send({ message: 'Movie not found' })
    }

    movie.name = name
    movie.description = description
    movie.year = year
    movie.genre - genre

    await movie.save()

    return movie
  }

  async delete({params, response, auth}){
    const movie = await Movie.query().where('id', params.id).first()
    if (!movie) {
      return response.status(401).send({ message: 'Movie not found' })
    }
    await movie.delete()
    return response.status(200).send({message: 'The movie was deleted'})
  }
}

module.exports = MovieController
