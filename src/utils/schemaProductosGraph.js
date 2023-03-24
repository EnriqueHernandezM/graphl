import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Inventario {
    id: ID!
    product:String,   
    typeOfLiquor:String,
    price: Float,
    image:String,
    description:String,
    stockItems: Int,
    codeItem: Float,
    data:Float


  }
  input ProductoInput {
    product:String,
    typeOfLiquor:String,
    price: Float,
    image:String,
    description:String,
    stockItems: Int,
    codeItem: Float,
  }
  type Query {
    getProducto(id: ID!): Inventario,
    getProductos(campo: String, valor: String): [Inventario],
  }
  type Mutation {
    createProducto(datos: ProductoInput): Inventario
    updateProducto(id: ID!, datos: ProductoInput): Inventario,
    deleteProducto(id: ID!): Inventario,
  }
`);
export default schema;
/* http://localhost:8080/graphql?query=mutation%20updateUno%20%7B%0A%20%20updateProducto(id%3A%20%2290257fc8a5f6ca6d9df1%22%2C%20datos%3A%20%7B%20product%3A%20%22Absolut%20Vodka%22%2C%20typeOfLiquor%3A%20%22Vodka%22%2C%20price%3A%2015%2C%20image%3A%20%22http%3A%2F%2Fcdn.shopify.com%2F%22%2C%20description%3A%20%22Producto%20de%20prueba%22%2C%20stockItems%3A%202%2C%20codeItem%3A%202%7D)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A%0Amutation%20crear%20%7B%0A%20%20createProducto(datos%3A%20%7Bproduct%3A%20%22Absolut%20Vodka%22%2C%20typeOfLiquor%3A%20%22Vodka%22%2C%20price%3A%2015%2C%20image%3A%20%22http%3A%2F%2Fcdn.shopify.com%2F%22%2C%20description%3A%20%22Producto%20de%20prueba%22%2C%20stockItems%3A%202%2C%20codeItem%3A%202%7D)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A%0Aquery%20getUno%20%7B%0A%20%20getProducto(id%3A%20%2290257fc8a5f6ca6d9df1%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20product%0A%20%20%20%20price%0A%20%20%20%20stockItems%0A%20%20%7D%0A%7D%0A%0Aquery%20todos%20%7B%0A%20%20getProductos%20%7B%0A%20%20%20%20product%0A%20%20%20%20id%0A%20%20%20%20price%0A%20%20%20%20typeOfLiquor%0A%20%20%20%20description%0A%20%20%20%20image%0A%20%20%20%20data%0A%20%20%20%20stockItems%0A%20%20%7D%0A%7D%0A%0Amutation%20deleteUno%20%7B%0A%20%20deleteProducto(id%3A%20%22c73012c1c2384ac4rf2%22)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A%0Aquery%20filtros%20%7B%0A%20%20getProductos(campo%3A%20%22product%22%2C%20valor%3A%20%22Nuvo%22)%20%7B%0A%20%20%20%20product%0A%20%20%7D%0A%7D%0A&operationName=todos */
