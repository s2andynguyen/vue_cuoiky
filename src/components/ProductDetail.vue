<template lang="">
    <div class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img
                                class="product__details__pic__item--large"
                                :src="productImage"
                                alt=""
                            />
                        </div>
                        <div
                            class="product__details__pic__slider owl-carousel owl-loaded owl-drag"
                        ></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>{{ product.name }}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div class="product__details__price">
                            {{ formatPrice(product.price) }}<sup>đ</sup>
                        </div>
                        <div
                            v-if="!product.instock"
                            class="product__details__sold__out"
                        >
                            Đã Hết Hàng
                        </div>
                        <p>
                            {{ product.description }}
                        </p>
                        <div
                            class="product__details__quantity"
                            v-if="product.instock"
                        >
                            <div class="quantity">
                                <div class="pro-qty">
                                    <span
                                        class="dec qtybtn"
                                        @click="decQuantity()"
                                        >-</span
                                    >
                                    <input
                                        type="text"
                                        readonly
                                        v-model="quantity"
                                        class="detail-quantity__input"
                                    />
                                    <span
                                        class="inc qtybtn"
                                        :class="{ 'btn-disable': outStock() }"
                                        @click="incQuantity()"
                                        >+</span
                                    >
                                </div>
                            </div>
                        </div>
                        <button
                            v-if="product.instock"
                            class="btn-addtocart"
                            @click="addCart()" :disabled="quantity > currentStock"
                            >ADD TO CARD</button
                        >
                        <button
                            class="heart-icon"
                            :class="{ 'red-color': isLike }"
                            @click="isLike = !isLike"
                        >
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        <ul>
                            <li><b>Availability</b> <span>In Stock</span></li>
                            <li>
                                <b>Shipping</b>
                                <span
                                    >01 day shipping.
                                    <samp>Free pickup today</samp></span
                                >
                            </li>
                            <li><b>Weight</b> <span>0.2 kg</span></li>
                            <li>
                                <b>Share on</b>
                                <div class="share">
                                    <a href="#"
                                        ><i class="fa fa-facebook"></i
                                    ></a>
                                    <a href="#"
                                        ><i class="fa fa-twitter"></i
                                    ></a>
                                    <a href="#"
                                        ><i class="fa fa-instagram"></i
                                    ></a>
                                    <a href="#"
                                        ><i class="fa fa-pinterest"></i
                                    ></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="product__details__tab">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active">Description</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div
                                class="tab-pane active"
                                id="tabs-1"
                                role="tabpanel"
                            >
                                <div class="product__details__tab__desc">
                                    <h6>Products Infomation</h6>
                                    <p>
                                        {{ product.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import { API_PRODUCTS } from "@/constant";
export default {
    props: {
        id: String,
    },
    data() {
        return {
            isLike: false,
            product: {},
            productImage: "",
            quantity: 1,
            isOutStock: false,
            currentStock: 0,
        };
    },
    computed: {
        ...mapState(["products", 'cart'])
    },
    methods: {
        ...mapActions(["actsetProducts", "addProductToCart"]),
        formatPrice(number) {
            if (number)
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        addCart() {
            let pro = {
                product: this.product,
                quantity: this.quantity
            }
            this.addProductToCart(pro);
            this.quantity = 1;
            this.getMaxInc();
        },
        incQuantity() {
            if (this.currentStock > this.quantity) this.quantity += 1;
        },
        decQuantity() {
            if (this.quantity > 1) {
                this.quantity -= 1;
            }
        },
        outStock() {
            if (this.quantity >= this.currentStock) {
                this.isOutStock = true;
            } else {
                this.isOutStock = false;
            }
            return this.isOutStock;
        },
        async getProductDetail(id) {
            try {
                const { data } = await axios.get(API_PRODUCTS + "/" + id);
                return data;
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm detail", error);
            }
        },
        getMaxInc() {
            let proInCart
            if(this.cart.length)
            proInCart = this.cart.find(item => item.id == this.id);
            if(proInCart){
                this.currentStock = proInCart.instock-proInCart.quantity;
            } else this.currentStock = this.product.instock
        }
    },
    created() {
        let id = this.id;
        if (!this.products.length) {
            this.getProductDetail(id)
                .then((res) => {
                    this.product = res;
                    this.productImage = require(`@/${this.product.image}`);
                    
                    this.getMaxInc();
                    
                })
                .catch((err) => {
                    console.log("Lỗi :>> ", err);
                });
        } else {
            this.product = this.products.find((item) => item.id == id);
            this.productImage = require(`@/${this.product.image}`);

            this.getMaxInc();

        }
    },
};
</script>
<style scoped>
@import url("@/assets/css/shop-detail.css");
</style>
