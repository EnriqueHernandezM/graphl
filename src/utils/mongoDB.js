import mongoose from "mongoose";

export default class DbMongo {
  static instance = null;
  constructor() {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(
        "mongodb+srv://enriquehm:0h47RMcEkqCLHjTP@cluster0.ckqspop.mongodb.net/ecommerce?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("✅ DB ON");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  static getInstance() {
    if (!DbMongo.instance) {
      DbMongo.instance = new DbMongo();
    }
    return DbMongo.instance;
  }
}
