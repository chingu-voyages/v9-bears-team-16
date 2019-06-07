"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Theme",
    embedded: false
  },
  {
    name: "Colors",
    embedded: false
  },
  {
    name: "Fonts",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/chris-czach-da7404/chingu-v9/dev`
});
exports.prisma = new exports.Prisma();
