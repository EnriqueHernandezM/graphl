//import inventario from "./persistencia.js";
import Inventario from "./persistencia.js";
const inventario = new Inventario();
import crypto from "crypto";
import moment from "moment";

const fecha = moment().format("lll");

async function getProductos({ campo, valor }) {
  const products = await inventario.allInventario();
  if (campo && valor) {
    let x = products.filter((el) => el[campo] == valor);
    return x;
  } else {
    return products;
  }
}

async function getProducto({ id }) {
  const inventarioI = await inventario.oneItemForId(id);
  if (!inventarioI) {
    throw new Error("Product not found.");
  }
  return inventarioI;
}

async function createProducto({ datos }) {
  const id = crypto.randomBytes(10).toString("hex");
  const nuevaRecordatorio = await inventario.createItem(id, fecha, datos);
  inventario[id] = nuevaRecordatorio;
  return nuevaRecordatorio;
}

async function updateProducto({ id, datos }) {
  const inventarioI = await inventario.oneItemForId(id);
  if (!inventarioI) {
    throw new Error("Product not found.");
  }
  return await inventario.modifElement(id, datos);
}

async function deleteProducto({ id }) {
  const inventarioI = await inventario.oneItemForId(id);
  if (!inventarioI) {
    throw new Error("Product not found.");
  }
  return await inventario.deleteOneItem(id);
}

export {
  deleteProducto,
  updateProducto,
  createProducto,
  getProducto,
  getProductos,
};
