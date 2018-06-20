function KeyFactory() {
    class Key {
        constructor() {
            this.product_key_id = null;
            this.product_id = null;
            this.key = 'Product Key',
            this.language = null;
            this.user = null;
            this.windows_10 = null;
        }
    }

    const get = () => {
        return new Key();
    }

    return {
        get: get
    }
}

export default KeyFactory;
