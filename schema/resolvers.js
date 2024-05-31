import _db from "../_db.js";

const resolvers = {
  Query: {
    games() {
      return _db.games
    },
    authors() {
      return _db.authors
    },
    reviews() {
      return _db.reviews
    },
    game(_, args) {
      return _db.games.find((game) => game.id === args.id)
    },
    review(_, args) {
      return _db.reviews.find((review) => review.id === args.id)
    },
    author(_, args) {
      return _db.authors.find((author) => author.id === args.id)
    }
  },
  Game: {
    reviews(parant) {
      return _db.reviews.filter((review) => review.game_id === parant.id)
    }
  },
  Author: {
    reviews(parant) {
      return _db.reviews.filter((review) => review.author_id === parant.id)
    }
  },
  Review: {
    author(parant) {
      return _db.authors.find((author) => author.id === parant.author_id)
    },
    game(parant) {
      return _db.games.find((game) => game.id === parant.game_id)
    }
  }

}
export { resolvers }