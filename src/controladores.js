import { graphqlHTTP } from "express-graphql";
import schema from "./utils/schemaProductosGraph.js";
import {
  deleteProducto,
  updateProducto,
  createProducto,
  getProducto,
  getProductos,
} from "./negocio.js";
const graphql = graphqlHTTP({
  schema: schema,
  rootValue: {
    deleteProducto,
    updateProducto,
    createProducto,
    getProducto,
    getProductos,
  },
  graphiql: true,
});

export { graphql };
