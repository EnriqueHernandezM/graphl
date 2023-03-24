npm i --force
npm start
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
mutation updateUno {
updateProducto(id: "7582db493608dcfa3870", datos: { product: "Absolut Vodka", typeOfLiquor: "Vodka", price: 1500, image: "http://cdn.shopify.com/", description: "Producto de prueba", stockItems: 1, codeItem: 2}) {
id
}
}

mutation crear {
createProducto(datos: {product: "Absolut Vodka", typeOfLiquor: "Vodka", price: 15, image: "http://cdn.shopify.com/", description: "Producto de prueba", stockItems: 2, codeItem: 2}) {
id
}
}

query getUno {
getProducto(id: "7582db493608dcfa3870") {
id
product
price
stockItems
}
}

query todos {
getProductos {
product
id
price
typeOfLiquor
description
image
data
stockItems
}
}

mutation deleteUno {
deleteProducto(id: "7582db493608dcfa3870") {
id
}
}

query filtros {
getProductos(campo: "product", valor: "Nuvo") {
product
}
}
