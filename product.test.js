const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');


describe('addProduct', () => {

    beforeEach(() => {
        resetProducts();
    });
   
    it('should throw an error if name or price is undefined', () =>{
        expect(() => addProduct()).toThrow('name and price should be defined')
    })
    
    it('should add a product', () => {
        expect(addProduct('blusa', 25)).toEqual({
            id: 1,
            name:'blusa',
            price: 25
        });
    })
    it('should throw error if product exits', () => {
        addProduct('blusa', 25)
        expect(() => addProduct('blusa', 25)).toThrow('this product is repeated')
    })
})


describe('eliminar producto', () =>{

    beforeEach(() => {
        resetProducts();
    });

    it('should throw error if product not exits', () => {
        expect(() => removeProduct(5)).toThrow('this product not exists')
    });
  
    it('should remove product if it exists', () => {
        addProduct('blusa', 25);
        removeProduct(1);
        const productos = getProducts();
        const productRemoved = productos.find(product => product.id === 1);
        expect(productRemoved).toBeUndefined()
    }) 
    
})


describe('getproduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should throw error if product not exists', () => {
        expect(() => getProduct(3)).toThrow('this product not exists')
    })
    
    it('debe mostrar un objeto con los datos del producto', () => {
        addProduct('blusa', 25);
        expect(getProduct(1)).toEqual({
            id: 1,
            name:'blusa',
            price: 25
        })
    }) 
});

describe('update product', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should throw error if product not exists', () =>{
        expect(() => updateProduct(3)).toThrow('this product not exists')
    });
    it('should update a product', () => {
        addProduct('blusa', 25);
        updateProduct(1, 'falda', 20);
        expect(getProduct(1)).toEqual({
            id: 1,
            name:'falda',
            price: 20
        }) 
    })
    it('should only update the price', () => {
        addProduct('blusa',30);
        updateProduct(1, 'blusa', 25);
        expect(getProduct(1)).toEqual({
            id: 1,
            name:'blusa',
            price: 25
        }) 
    })
    it('should only update name', () => {
        addProduct('blusa', 30);
        updateProduct(1, 'falda', 30);
        expect(getProduct(1)).toEqual({
            id: 1,
            name:'falda',
            price: 30
        }) 
    })
})
