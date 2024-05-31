export const typeDefs = `#graphql
type Game{
  id:ID!
  title:String!
  platforms:[String!]!
  reviews:[Review!]!

}
type Review{
  id:ID!
  ratings:Int!
  content:String!
  author:Author!
  game:Game!
}
type Author{
  id:ID!
  name:String!
  verified:Boolean!
  reviews:[Review!]!
}
# enpoints 
type Query{
  reviews:[Review],
  review(id:ID!):Review,
  games:[Game],
  game(id:ID!):Game,
  authors:[Author],
  author(id:ID!):Author
}
`