import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
//typeDefs
import { typeDefs } from "./shema";
//db connect
import _db from "./_db";

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
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers
})
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})