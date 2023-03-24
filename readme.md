npm i --force
npm start
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
mutation updateUno {
updateProducto(id: "641c9bee2e5b92697cf5a77d", datos: {product: "Absolut Vodka", typeOfLiquor: "Vodka", price: 550, image: "http://cdn.shopify.com/", description: "Producto de prueba", stockItems: 1, codeItem: 2,}) {
id
price
}
}

mutation crear {
createProducto(datos: {product: "Absolut Vodka", typeOfLiquor: "Vodka", price: 15, image: "http://cdn.shopify.com/", description: "Producto de prueba", stockItems: 2, codeItem: 2}) {
id
}
}

query getUno {
getProducto(id: "641c9bee2e5b92697cf5a77d") {
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
deleteProducto(id: "641d00e7554448918458ae37e") {
id
}
}

query filtros {
getProductos(campo: "product", valor: "Absolut Vodka") {
product
id
}
}
