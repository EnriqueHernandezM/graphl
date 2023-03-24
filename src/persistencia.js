import { Schema, model } from "mongoose";

const ProductoSchema = new Schema({
  product: { type: String, required: true, max: 100 },
  typeOfLiquor: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  image: { type: String, required: true, max: 100 },
  description: { type: String, required: true },
  stockItems: { type: Number, required: true },
  codeItem: { type: Number, required: true },
  data: Date,
});
const Productos = model("inventario2", ProductoSchema);
class Inventario {
  constructor() {}

  async createItem(id, data, inf) {
    try {
      inf.id = id;
      inf.data = data;
      const newItem = Productos(inf);
      return await newItem.save().then((data) => {
        console.log(data);
        return data;
      });
    } catch (err) {
      console.log(err);
    }
  }

  async allInventario() {
    try {
      return await Productos.find({});
    } catch (err) {
      console.log(err);
      return { error: err };
    }
  }
  async oneItemForId(idB) {
    try {
      const items = await Productos.find({});
      return items.find((el) => el.id == idB);
    } catch (err) {
      console.log(err);
    }
  }
  async modifElement(idAmod, inf) {
    try {
      console.log(idAmod);
      const modificElement = await Productos.updateOne(
        { _id: idAmod },
        {
          $set: {
            product: inf.product,
            typeOfLiquor: inf.typeOfLiquor,
            price: inf.price,
            image: inf.image,
            description: inf.description,
            stockItems: inf.stockItems,
            codeItem: inf.codeItem,
          },
        }
      );
      if (modificElement.modifiedCount > 0) {
      }
      return await this.oneItemForId(idAmod);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteOneItem(idAb) {
    try {
      Productos.deleteOne({ _id: idAb }).then(function () {
        console.log("Producto Eliminado");
      });
      return { id: idAb };
    } catch (err) {
      console.log(err);
    }
  }
}

export default Inventario;
