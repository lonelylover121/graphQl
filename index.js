import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDef.js";
import { resolvers } from "./schema/resolvers.js";
import _db from "./_db.js";

// const resolvers = {
//   Query: {
//     games() {
//       return _db.games
//     },
//     authors() {
//       return _db.authors
//     },
//     reviews() {
//       return _db.reviews
//     }
//   }
// }
const server = new ApolloServer({
  typeDefs,
  resolvers
})
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})
console.log(`🚀  Server ready at: ${url}`);
