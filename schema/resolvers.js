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
      console.log('parent', parant);
      return _db.games.find((game) => game.id === parant.game_id)
    }
  },
  Mutation: {
    deleteGame(_, args) {
      console.log('args', args);
      _db.games = _db.games.filter((game) => game.id !== args.id);
      return _db.games
    },
    addGame(_, args) {
      console.log('parant', _);
      console.log('args', args);

      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 1000).toString()
      }
      _db.games.push(game);
      return game
    },
    // updateAuthor(_, args) {
    //   _db.authors = _db.authors.map((author) => {
    //     console.log(' args', args.id,);
    //     console.log('author ', author.id,);
    //     if (author.id === args.id) {
    //       console.log({ ...author, ...args.author });
    //       return { ...author, ...args.author }
    //     }
    //   });
    //   return _db.authors.find((author) => author.id === args.id)
    // }
    updateAuthor(_, args) {
      _db.authors = _db.authors.map((author) => {
        console.log('args', args.id);
        console.log('author', author.id);
        if (author.id === args.id) {
          console.log({ ...author, ...args.author });
          return { ...author, ...args.author };
        }
        // Always return the author object, even if it's not the one being updated
        return author;
      });

      return _db.authors.find((author) => author.id === args.id);
    }

  }

}
export { resolvers }