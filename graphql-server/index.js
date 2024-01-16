import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";

import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => parent.id === review.game_id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => parent.id === review.author_id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => parent.author_id === author.id);
    },
    game(parent) {
      return db.games.find((game) => parent.game_id === game.id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((games) => games.id != args.id);

      return db.games;
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };

      db.games.push(game);

      return game;
    },

    updateGame(_, args) {
      db.games = db.games.map((game) => {
        if (game.id === args.id) {
          return { ...game, ...args.edits };
        }
        return game;
      });

      return db.games.find((game) => game.id === args.id);
    },
  },
};

//Server Setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4111 },
});

console.log("Server started on port", 4111);
