function ProductFactory() {
    class Product {
        constructor() {
            this.porduct_id = null;
            this.name = 'Product Name',
            this.year = new Date().getFullYear();
            this.key_count = 0;
        }
    }

    const get = () => {
        return new Product();
    }

    return {
        get: get
    }
}

export default ProductFactory;
