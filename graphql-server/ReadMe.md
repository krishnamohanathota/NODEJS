## GraphQL

### Installing dependencies

https://www.apollographql.com/docs/apollo-server/getting-started


### Running the server

```bash
nodemon index.js
```

#### Schema

Schema is used to define the data structure.


#### Queries

Query is used to read data.

```graphql

query AuthorQuery($authorId: ID!) {
  author(id: $authorId) {
    name
    verified
  }
}

query AuthorQuery($authorId: ID!) {
  author(id: $authorId) {
    name
    verified
    reviews {
      rating
      content
    }
  }
}

query GamesQuery{
  games{
    id
    title
    platform
  }
}

query GamesQuery($gameId: ID!){
  game(id: $gameId) {
    title
    platform
  }
}

query GamesQuery($gameId: ID!){
  game(id: $gameId) {
    title
    platform
    reviews {
      rating
      content
    }
  }
}

query ReviewsQuery($reviewId: ID!){
  review(id: $reviewId) {
    rating
    content
  }
}

query ReviewsQuery($reviewId: ID!){
  review(id: $reviewId) {
    rating
    content
    author {
      name
      verified
      id
    }
    game {
      title
      platform
      id
    }
  }
}

query ReviewsQuery($reviewId: ID!){
  review(id: $reviewId) {
    id
    rating
    content
    author {
      name
      verified
      id
    }
    game {
      title
      platform
      id
      reviews {
        rating
        content
      }
    }
  }
}

```

#### Mutations

Mutation is used to create, update and delete data. 

```graphql
mutation DeleteGame($deleteGameId: ID!){
  deleteGame(id: $deleteGameId) {
    id
    title
    platform
  }
}

mutation AddGame($game: AddGameInput!){
  addGame(game: $game) {
    id
    title
    platform
  }
}

mutation UpdateGame($updateGameId: ID!, $edits: EditGameInput!){
  updateGame(id: $updateGameId, edits: $edits) {
    id
    title
    platform
  }
}

{
  "updateGameId" : "1",
  "edits" : {
    "title" : "KM1 Zelda, Tears of the Kingdom"
  }
}
```