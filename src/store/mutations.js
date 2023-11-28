import store from ".";

const mutations = {
    setProducts(state, products){
        state.products = products
    },
    setUser(state, user){
        state.user = user
    }
    ,
    setFilterInput(state, value) {
        state.filterInput = value;
    },
    setSearchInput(state, value) {
        state.searchInput = value;
    },

    addToCart(state, {product, quantity}) {
        var newData = {
            ...product,
            quantity,
        };
        var isCheck = state.cart.find((item) => {
            if (item.id == product.id) {
                item.quantity += quantity;
                return true;
            } else return false;
        });
        isCheck ? "" : state.cart.push(newData);
    },

    incQuantity(state, id) {
        const product = state.cart.find(item => item.id == id);
        product.quantity++;
    },
    decQuantity(state, id) {
        const product = state.cart.find(item => item.id == id);
        if(product.quantity <= 1){
            store.dispatch('removeCart', product.id)
        } else {
            product.quantity--;
        }
    },
    removeCartItem(state, id) {
        state.cart.forEach((item, index) => {
            if (item.id === id) {
                state.cart.splice(index, 1);
            }
        });
    },
    removeCartAll(state) {
        state.cart = []
    }
}
export default mutations;
