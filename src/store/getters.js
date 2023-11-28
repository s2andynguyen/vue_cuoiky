const getters = {
    getProducts(state) {
        let searchInput = state.searchInput ? state.searchInput : '' ;
        let productList = [...state.products];
        let result = [];
        switch(state.filterInput) {
            case 'normal':
                result =  productList;
                break
            case 'asc':
                result =  productList.sort((a,b) => (a.price - b.price));
                break
            case 'desc':
                result =  productList.sort((a,b) => (b.price - a.price));
                break
        }
        function formatSearch(str) {
            return str.normalize("NFD")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        }
        if(searchInput) {
            searchInput = formatSearch(searchInput).toLowerCase();

            let productNameList = result.filter(product => {
                let productName = formatSearch(product.name.toLowerCase())
                return productName.includes(searchInput);
            })
            if(productNameList.length == 0) {
                return result
            }
            return productNameList
        }

        return result;
    },
    getCart(state){
        return state.cart;
    },
    getCartCount(state) {
        return state.cart.length;
    },
    getTotal: (state) => (id) => {
        let product = state.cart.find(item => {return item.id === id})
        return product.quantity * product.price;
    },
    getTotalAll(state){
        let result = state.cart.reduce((total,cur) => {
            return total + cur.quantity * cur.price;
        },0)
        return result;
    }
    
}

export default getters;
