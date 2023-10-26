class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios.");
      return;
    }

    if (this.products.some(product => product.code === code)) {
      console.log("El producto con el código ya existe.");
      return;
    }

    const newProduct = new Product(
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    );

    newProduct.id = this.productIdCounter++;
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      return product;
    } else {
      console.log("Producto no encontrado.");
    }
  }
}


//const productManager = new ProductManager();

//productManager.addProduct("Producto 1", "Descripción 1", 19.99, "imagen1.jpg", "P1", 10);
//productManager.addProduct("Producto 2", "Descripción 2", 29.99, "imagen2.jpg", "P2", 20);

//console.log(productManager.getProducts());
//console.log(productManager.getProductById(1));
//console.log(productManager.getProductById(3));


