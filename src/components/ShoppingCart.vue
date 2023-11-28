<template>
    <div class="container py-4 shopping-cart">
        <h3 class="text-center shopping-cart__title">Shopping Cart</h3>
        <router-link to="/" class="shopping-cart__back"><i class="fa-solid fa-angles-left"></i>Tiếp tục mua sắm</router-link>
        <div v-if="getCartCount > 0" class="row" style="min-height: 320px">
            <div class="col-8">
                <div class="shopping-cart__table">
                    <h3 class="shopping-cart__table__titlte">
                        <span class="shopping-cart__table__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><g clip-path="url(#cart_svg__a)"><path fill="#BE1E2D" d="M22.896 1.334v5.238c0 .23-.186.416-.416.416h-1.517a.417.417 0 0 1-.416-.416v-.707a2.113 2.113 0 0 0-2.113-2.113h-1.17a.42.42 0 0 1-.413-.36 2.107 2.107 0 0 0-2.085-1.798h-.552a.418.418 0 0 1-.406-.51c.157-.703.65-1.03 1.227-1.03h6.581c.707 0 1.28.573 1.28 1.28Zm-6.975 1.83a1.27 1.27 0 0 0-1.155-.736h-4.532a1.28 1.28 0 0 0-1.28 1.28v2.864c0 .23.187.416.417.416h2.595c.23 0 .417-.186.417-.416v-.707c0-1.167.946-2.113 2.113-2.113h1.045a.416.416 0 0 0 .38-.588Zm2.513 1.421h-3.938a1.28 1.28 0 0 0-1.28 1.28v.707c0 .23.187.416.417.416h5.664c.23 0 .416-.186.416-.416v-.707a1.28 1.28 0 0 0-1.28-1.28ZM7.618 19.767h13.25c.792 0 1.476-.537 1.663-1.307l2.457-10.123a.417.417 0 0 0-.405-.515H6.901l-.1-.774a1.715 1.715 0 0 0-1.697-1.492h-3.42C.756 5.556 0 6.312 0 7.24c0 .93.756 1.685 1.684 1.685h1.474c.92 0 1.667-.748 1.667-1.667V6.39h.28c.44 0 .814.33.87.766l1.52 11.782a2.227 2.227 0 0 0-2.1 2.22c0 1.227.997 2.224 2.223 2.224h.356a1.984 1.984 0 0 0 1.937 1.565c.949 0 1.744-.672 1.936-1.565h6.916a1.984 1.984 0 0 0 1.936 1.565 1.983 1.983 0 0 0 1.981-1.981 1.983 1.983 0 0 0-1.98-1.981c-.95 0-1.745.671-1.937 1.564h-6.916a1.984 1.984 0 0 0-1.936-1.564c-.95 0-1.745.671-1.937 1.564h-.356c-.767 0-1.39-.624-1.39-1.39 0-.767.623-1.39 1.39-1.39Z"></path></g><defs><clipPath id="cart_svg__a"><path fill="#fff" d="M0 0h25v25H0z"></path></clipPath></defs></svg>
                        </span>
                        <span>
                            Giỏ hàng (1 sản phẩm)
                        </span>
                        </h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th class="text-center">Price</th>
                                <th colspan="2" style="width: 120px">
                                    Quantity
                                </th>
                                <th class="text-center">Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cart" :key="item.id">
                                <td class="text-start">
                                    <img
                                        :src="formatImage(item.image)"
                                        alt=""
                                        width="100"
                                    />
                                    {{ item.name }}
                                </td>
                                <td>
                                    {{ formatPrice(item.price) }} <sup>đ</sup>
                                </td>
                                <td colspan="2" style="width: 120px">
                                    <div class="cart-quantity__group">
                                        <button
                                            class="cart-quantity__dec"
                                            @click="decQuantity(item.id)"
                                            >-</button
                                        >
                                        <input
                                            readonly
                                            type="text"
                                            v-model="item.quantity"
                                            class="cart-quantity__input"
                                        />
                                        <button :disabled="item.quantity==item.instock??false"
                                            class="cart-quantity__inc"
                                            @click="incQuantity(item.id)"
                                            >+</button
                                        >
                                    </div>
                                </td>
                                <td>
                                    {{ formatPrice(getTotal(item.id)) }}
                                    <sup>đ</sup>
                                </td>
                                <td>
                                    <button
                                        class="btn btn-danger"
                                        @click="removeCart(item.id)"
                                    >
                                        x
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-4">
                <div class="cart-total__wrapper">
                    <h3 class="cart-total__title">
                        <span class="cart-total__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path fill="#BE1E2D" d="M16.943 8.887c-4.442 0-8.056 3.614-8.056 8.056C8.887 21.386 12.5 25 16.943 25 21.386 25 25 21.386 25 16.943c0-4.442-3.614-8.056-8.057-8.056Zm0 7.324a2.2 2.2 0 0 1 2.198 2.197c0 .954-.614 1.76-1.465 2.063v1.6H16.21v-1.6a2.194 2.194 0 0 1-1.465-2.063h1.465a.733.733 0 1 0 .732-.732 2.2 2.2 0 0 1-2.197-2.197c0-.954.614-1.76 1.465-2.063v-1.6h1.465v1.6a2.194 2.194 0 0 1 1.465 2.063h-1.465a.733.733 0 1 0-.733.732ZM8.154 8.887c4.518 0 8.057-1.93 8.057-4.395C16.21 2.028 12.67 0 8.154 0S0 2.028 0 4.492s3.637 4.395 8.154 4.395ZM0 16.482v1.194c0 2.464 3.637 4.394 8.154 4.394.257 0 .505-.023.757-.036a9.461 9.461 0 0 1-1.227-2.911c-3.267-.09-6.104-1.094-7.684-2.64ZM7.457 17.639c-.017-.23-.035-.461-.035-.696 0-.763.1-1.502.27-2.214-3.27-.089-6.11-1.093-7.692-2.641v1.193c0 2.334 3.284 4.167 7.457 4.357ZM8.154 13.281h.003a9.553 9.553 0 0 1 2.057-3.067c-.662.083-1.345.138-2.06.138-3.477 0-6.497-1.037-8.154-2.659v1.194c0 2.464 3.637 4.394 8.154 4.394Z"></path></svg>
                        </span>
                        <span>
                            Tạm tính

                        </span>
                        </h3>
                    <div class="cart-total__all">
                        <p>Tổng cộng</p>
                        <span class="cart-total__num">{{ formatPrice(getTotalAll) }} <sup>đ</sup></span>
                    </div>
                    <div class="cart-total__checkout">
                        <router-link to="/checkout" class="cart-total__checkout__btn">Đặt hàng</router-link>
                    </div>


                </div>

            </div>
        </div>
        <div v-else class="bg-cart-null">
            <img src="@/assets/img/cart-empty.png" alt="" />
            <h4>Giỏ hàng của bạn hiện đang trống!</h4>
            <router-link to="/" class="shopping-cart__back-btn">Tiếp tục mua sắm</router-link>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
        };
    },
    computed: {
        ...mapState(["cart"]),
        ...mapGetters(["getTotal", "getTotalAll", "getCartCount"]),
    },
    methods: {
        ...mapActions(["incQuantity", "decQuantity", "removeCart"]),
        formatImage(pathImg) {
            return require(`@/${pathImg}`);
        },
        formatPrice(number) {
            if (number)
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
};
</script>
<style scoped>
    @import url('@/assets/css/shopping-cart.css');
</style>
