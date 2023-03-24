import express from "express";
import apiProductos from "./src/ruteo.js";
import DbMongo from "./src/utils/mongoDB.js";
DbMongo.getInstance();
const app = express();

class IniciarServer {
  constructor() {}
  static on() {
    const PORT = 8080;
    app.listen(PORT, () => {
      const msg = `SERVER ON http://localhost:${PORT}/graphql`;
      console.log(msg);
    });
  }
}
IniciarServer.on();
app.use("/graphql", apiProductos);
