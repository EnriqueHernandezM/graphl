/* let inventario = [
  {
    id: "c73012c1c2384ac4rf21",
    product: "Don Pedro",
    typeOfLiquor: "Brandy",
    price: 350,
    image:
      "https://cdn.shopify.com/s/files/1/0402/2475/1766/products/BRANDYDONPEDRO1000MLSHOPIFY_700x.jpg?v=1637864473",
    description: "Brandy Don Pedro Reserva Especial 750 ml a un súper precio",
    stockItems: 9,
    codeItem: 111,
    data: "2023-03-03T09:35:13.475Z",
  },
  {
    id: "c73012c1c2384ac4af28",
    product: "Moet Chandom",
    typeOfLiquor: "Champagne",
    price: 980,
    image:
      "https://www.sampieri.com.mx/wp-content/uploads/2018/07/CHAMPAGNE-MOET-CHANDON-BRUT-EST-MADERA.jpg",
    description:
      "Fundada en 1743, Moët & Chandon celebra los momentos memorables de la vida con una gama de champagnes únicos para cada ocasión.",
    stockItems: 4,
    codeItem: 122,
    data: "2023-03-03T09:36:30.012Z",
  },
  {
    id: "c73012c1c1354ac5af21",
    product: "Nuvo",
    typeOfLiquor: "Vodka",
    price: 820,
    image: "https://ss388.liverpool.com.mx/xl/1064210455.jpg",
    description:
      "Nuvo es una bebida innovadora que mezcla vodka premium con vinos franceses",
    stockItems: 5,
    codeItem: 144,
    data: "2023-03-03T09:40:16.268Z",
  },
];

export default inventario; */
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
