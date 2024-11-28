const products = []; // Temporary in-memory data storage
let idCounter = 1;

const resolvers = {
  Query: {
    products: () => products,
  },
  Mutation: {
    addProduct: (_, { name, price, stock, category }) => {
      const product = { id: idCounter++, name, price, stock, category };
      products.push(product);
      return product;
    },
    updateProduct: (_, { id, stock }) => {
      const product = products.find((prod) => prod.id === parseInt(id));
      if (product) {
        product.stock = stock;
        return product;
      }
      throw new Error('Product not found');
    },
    deleteProduct: (_, { id }) => {
      const index = products.findIndex((prod) => prod.id === parseInt(id));
      if (index !== -1) {
        products.splice(index, 1);
        return "Product deleted successfully";
      }
      throw new Error('Product not found');
    },
  },
};

module.exports = resolvers;
