'use strict'

const ModelFilter = use('ModelFilter')

class MovieFilter extends ModelFilter {
  id(id) {
    return this.where("id", id);
  }
  name(name) {
    const moviename = name.split(",");
    return this.whereIn("name", moviename);
  }
  genre(genre) {
    const moviegenre = genre.split(",");
    return this.whereIn("genre", moviegenre);
  }
  year(year) {
    return this.where("year", year);
  }
}

module.exports = MovieFilter
