import { graphql } from "./controladores.js";
import { Router } from "express";
const apiProductos = new Router();

apiProductos.use("/", graphql);

export default apiProductos;
