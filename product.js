let products = []; 
let id = 0;

function resetProducts(){
    products = []; 
    id = 0;
}

function addProduct(name, price){
    if(name == undefined || price == undefined){
        throw new Error('name and price should be defined')
    }

    const existeProducto = products.find(producto => producto.name === name);
    if(existeProducto){
        throw new Error('this product is repeated');
    }
    const newProduct = {
        id: ++id,
        name: name,
        price: price
    }
    products.push(newProduct);
    return newProduct;
};

function removeProduct(id){ 
     const existeProducto = products.findIndex(producto => producto.id === id);
     if (existeProducto === -1) {
        throw new Error('this product not exists')
    }
    products.splice(existeProducto, 1)
}
function getProducts(){
    return products;
}
function getProduct(id){
    const IdProduct = products.findIndex(producto => producto.id === id);
    if(IdProduct === -1){
       throw new Error('this product not exists');
    }
    return products[IdProduct];
}

function updateProduct(id, name, price){
    const index = products.findIndex(producto => producto.id === id);
    if(index === -1){
        throw new Error('this product not exists');
    }
    const updateP = {
        id: id,
        name: name !== undefined ? name : products[index].name,
        price: price !== undefined ? price : products[index].price
    }
    products[index] = updateP;
}

module.exports = {products, id, resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct}