import { API_PRODUCTS } from "@/constant";
import axios from "axios";
import Swal from 'sweetalert2';

const actions = {
    async actsetProducts(context) {
        try {
            const { data } = await axios.get(API_PRODUCTS);
            context.commit("setProducts", data);
            console.log('reload :>> ');
        } catch (error) {
            console.error("Lỗi khi tải danh sách sản phẩm", error);
        }
    },

    addProductToCart(context, {product, quantity}) {
        context.commit('addToCart',{product,quantity})
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    },
    loginUser(context, user) {
        context.commit('setUser', user)
    },
    incQuantity(context, id) {
        context.commit('incQuantity', id)
    },
    decQuantity(context, id) {
        context.commit('decQuantity', id)
    },
    removeCart(context, id) {
        Swal.fire({
            title: 'Bạn muốn xóa?',
            text: "Sản phẩm sẽ bị xóa khỏi giỏ hàng của bạn!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    context.commit('removeCartItem', id)
                    Swal.fire(
                    'Đã xóa!',
                    'Sản phẩm đã được xóa khỏi giỏ hàng.',
                    'success'
                    )
                }
            })
    },
    removeCartAll(context){
        context.commit('removeCartAll')
    },

    changeFilterInput(context, value) {
        console.log('value :>> ', value);
        context.commit('setFilterInput', value);
    },
    changeSearchInput(context, value) {
        context.commit('setSearchInput', value);
    }


};
export default actions;
