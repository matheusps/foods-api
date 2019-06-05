"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Food",
    embedded: false
  },
  {
    name: "ValidEstimate",
    embedded: false
  },
  {
    name: "Ingredient",
    embedded: false
  },
  {
    name: "Recipe",
    embedded: false
  },
  {
    name: "StoredFood",
    embedded: false
  },
  {
    name: "Space",
    embedded: false
  },
  {
    name: "StorageMethod",
    embedded: false
  },
  {
    name: "Measure",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/matheus-p-silva-14e241/foods-api/dev`
});
exports.prisma = new exports.Prisma();
