export const typeDefs = `#graphql
type Game{
  id:ID!
  title:String!
  platfroms:[String!]!

}
type Review{
  id:ID!
  ratings:Int!
  content:String!
}
type Author{
  id:ID!
  name:String!
  verified:Boolean!
}
type Query{
  review:[Review]
  games:[Game],
  author:[Author]
}
`