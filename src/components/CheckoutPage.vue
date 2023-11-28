<template>
    <section class="checkout">
        <div class="container">
            <div class="checkout__form">
                <h4>Thông tin Khách hàng</h4>
                <div v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul class="text-danger">
                        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                    </ul>
                </div>
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="checkout__input">
                                <p>Họ và tên khách<span>*</span></p>
                                <input v-if="user.name" type="text" v-model="user.name" :readonly="user.name??''" required>
                                 <input v-else type="text" v-model="userRegister.name"  required>
                            </div>
                            <div class="checkout__input">
                                <p>Địa chỉ<span>*</span></p>
                                <input v-if="user.name" type="text" v-model="user.address"  required>
                                 <input v-else type="text" v-model="userRegister.address"  required>
                            </div>
                            
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Phone<span>*</span></p>
                                        <input v-if="user.name" type="text" v-model="user.phone" :readonly="user.phone??''" required>
                                         <input v-else type="text" v-model="userRegister.phone"  required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input v-if="user.name" type="text" v-model="user.email" :readonly="user.email??''" required>
                                         <input v-else type="email" v-model="userRegister.email"  required>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!user.name" class="checkout__input__checkbox">
                                <div class="row">
                                    <div class="col-6">
                                        <label for="acc" class="mb-3" style="user-select: none">
                                                Tạo tài khoản mới?
                                                <input type="checkbox" id="acc" v-model="createAcc">
                                                <span class="checkmark"></span>
                                            </label>
                                        <p>Tạo tài khoản mới với thông tin trên.</p>
                                    </div>
                                    <div class="col-6">
                                        <div v-if="!user.name && createAcc" class="checkout__input">
                                            <p>Password<span>*</span></p>
                                            <input type="password" v-model="userRegister.password"  required>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div class="checkout__input">
                                <p>Ghi chú<span>*</span></p>
                                <input type="text" v-model="noteBill"
                                placeholder="Notes about your order, e.g. special notes for delivery.">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="checkout__order">
                                <h4>Hóa đơn của bạn</h4>
                                <div class="checkout__order__products">Products <span>Total</span></div>
                                <ul>
                                    <li v-for="item in cart" :key="item.id">
                                        <div class="checkout__order__wrapper">
                                            <p class="checkout__order__name">{{ item.name }}</p> <span>{{ formatPrice(getTotal(item.id)) }}<sup>đ</sup></span>
                                        </div>
                                    </li>
                                </ul>
                                <div class="checkout__order__subtotal">Subtotal <span>{{ formatPrice(getTotalAll) }}<sup>đ</sup></span></div>
                                <div class="checkout__order__total">Total <span>{{ formatPrice(getTotalAll) }}<sup>đ</sup></span></div>
                                
                                <div class="checkout__input__checkbox">
                                    <label for="payment">
                                        Check Payment
                                        <input type="checkbox" id="payment">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <div class="checkout__input__checkbox">
                                    <label for="paypal">
                                        Paypal
                                        <input type="checkbox" id="paypal">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                                <button v-if="user.name" type="button" class="site-btn" @click="validateUserBuy()">Thanh Toán</button>
                                <button v-else type="button" class="site-btn" @click="validateBuy()">Thanh Toán</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div v-if="isModal" class="modal-checkout" @click="hoadonClose()">
            <div class="modal-container" @click.stop>
                <!-- <h3 class="modal-title">Hóa đơn thanh toán</h3> -->
                 <div class="modal-header">
                    <h4 class="modal-title">Thanh toán hóa đơn thành công!</h4>
                    <button type="button" class="btn-close" @click="hoadonClose()"></button>
                </div>
                <div class="modal-body">
                    <div class="output-form mb-1">
                        <label for="" class="output-label">Họ và tên khách:</label>
                        <p class="output-out">{{ hoadon.name }}</p>
                    </div>
                     <div class="output-form mb-1">
                        <label for="" class="output-label">Địa chỉ giao hàng:</label>
                        <p class="output-out">{{ hoadon.address }}</p>
                    </div>
                     <div class="output-form mb-1">
                        <label for="" class="output-label">Số điện thoại:</label>
                        <p class="output-out">{{ hoadon.phone }}</p>
                    </div>
                     <div class="output-form mb-1">
                        <label for="" class="output-label">Email:</label>
                        <p class="output-out">{{ hoadon.email }}</p>
                    </div>
                    <div v-if="order.note" class="output-form mb-1">
                        <label for="" class="output-label">Ghi chú:</label>
                        <p class="output-out">{{ hoadon.note }}</p>
                    </div>
                    
                    <h3 class="" style="font-size: 19px;">Sản phẩm gồm:</h3>
                    <div class="checkout-modal__table__wrapper">
                        <table v-if="hoadonProduct.length" class="table table-bordered mx-auto">
                            <thead>
                                <th>Product</th>
                                <th class="text-center">Price</th>
                                <th style="width: 120px">
                                    Quantity
                                </th>
                                <th class="text-center">Total</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in hoadonProduct" :key="index">
                                    <td class="text-start">
                                        <img
                                            :src="formatImage(item.image)"
                                            alt=""
                                            width="70"
                                        />
                                        {{ item.name }}
                                    </td>
                                    <td>
                                        {{ formatPrice(item.price) }} <sup>đ</sup>
                                    </td>
                                    <td>
                                        {{ item.quantity }}
                                    </td>
                                    <td>
                                        {{formatPrice(item.quantity * item.price)}} <sup>đ</sup>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="output-form mb-1">
                        <label for="" class="output-label">Tiền hóa đơn thanh toán:</label>
                        <p class="output-out">{{formatPrice(hoadon.total)}}<sup>đ</sup></p>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn-checkout-cancel" @click="hoadonClose()">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import { mapActions, mapGetters, mapState } from 'vuex'
import {   checkAddress, checkPhone } from "./admin/register.js";
import { API_ORDER, API_PRODUCTS, API_USERS } from '@/constant.js';
import md5 from 'md5';

export default {
    name:'checkout-page',
    data() {
        return {
            isModal: false,
            createAcc:false,
            errors:[],
            order: {},
            noteBill: '',
            userRegister : {},
            hoadon: {},
            hoadonProduct: [],
        }
    },
    computed: {
        ...mapState(['cart', 'user', 'products']),
        ...mapGetters(['getTotal','getTotalAll']),
        
    },
    created() {
        if(!this.cart.length) this.$router.push('/');
    }
    ,
    methods: {
        ...mapActions(['removeCartAll', 'loginUser','actsetProducts']),
        formatPrice(number) {
            if (number)
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        formatImage(pathImg) {
            return require(`@/${pathImg}`);
        },
        validateUserBuy() {
            this.errors = []
            // khi người dùng đã đăng nhập
            if(this.user.address == 'null' || this.user.address == '') {
                this.errors.push('Vui lòng nhập địa chỉ')
            } else {
                let isCheck;
                checkAddress(this.user.id).then(rs => { isCheck=rs; console.log('checkAddress :>> ', rs);
                    if(!isCheck) {
                        this.updateAddress(this.user.address);
                    }
                    //  thanhtoan(data) 
                    this.thanhToan(this.user);
                })
            }
        },
        async validateBuy() {
            this.errors = []
            if(this.createAcc){
                // check form đăng khí mới
                if(!this.userRegister.name || !this.userRegister.phone || !this.userRegister.password
                || !this.userRegister.email || !this.userRegister.address) {
                    this.errors.push('Vui lòng không để trống');
                } else {

                    try {
                        const isPhone = await checkPhone(this.userRegister.phone)
                            console.log('checkPhone :>> ', isPhone);
                            if(isPhone == '') {
                                let salt = 'ntt26';
                                let hashPass = md5(salt+this.userRegister.password);
                                const { data } = await axios.post(API_USERS, {
                                    ...this.userRegister,
                                    password: hashPass
                                })
                                console.log('Đăng kí thành công :>> ', data);
                                this.thanhToan(this.userRegister);
                                this.loginUser(data);
                                
                                this.userRegister = {};
                            } else {
                                this.errors.push(isPhone);
                            }
                        
                    } catch (error) {
                        console.error("Lỗi khi tạo user mới", error);
                    }
                        
                } 
            } else {
                if(!this.userRegister.name || !this.userRegister.phone
                || !this.userRegister.email || !this.userRegister.address) {
                    this.errors.push('Vui lòng không để trống');
                } else {
                    delete this.userRegister.password;
                    this.thanhToan(this.userRegister);
                    this.userRegister = {};

                }
            }
        },
        hoadonClose() {
            this.isModal = false;
            this.hoadon = {};
            this.hoadonProduct = [];
            this.noteBill = '';
            if(this.userRegister.name != '') {
                this.userRegister = {}
            }
            this.$router.push('/');
            
        },
        
        async updateAddress(address) {
            let newData = {
                ...this.user,
                address
            }
            await axios.put(API_USERS+'/'+this.user.id,newData)
        },
        async updateInstock(product, newInstock) {
            const { quantity , ...rest } = product;
            let newData = {
                ...rest,
                instock: newInstock
            }
            const { data } = await axios.put(API_PRODUCTS+'/'+product.id,newData)
            console.log('neww Instock: id- ',product.id +'>>>', data.instock );
            console.log('neww quantity: ',quantity );
        },
        thanhToan(data) {
            for (const key in data) {
                if(key!='id' && key!='password')
                this.order[key] = data[key]
            }
            this.order.note = this.noteBill;
            this.order.product = this.cart.map(product => {
                return {
                    masp: product.id,
                    quantity: product.quantity
                }
            })
            this.order.total = this.getTotalAll;

            this.cart.forEach(product => {
                let newInstock = product.instock - product.quantity;
                this.updateInstock(product, newInstock)
            })
            // post
            this.postOrder(this.order).then((result) => {
                this.hoadon = result
                console.log('thanh toán thành công :>> ');
                this.hoadonProduct = [...this.cart]
                this.isModal = true;
                this.removeCartAll();
                this.actsetProducts();
            }).catch((err) => {
                console.log('Lỗi thanh toán :>> ', err);
            });
        },
        async postOrder(order) {
            const { data } = await axios.post(API_ORDER, order)
            return data
        }
    }
}
</script>
<style scoped>
    @import url('@/assets/css/checkout.css');
.modal-checkout.open {
    display: flex;
}
.modal-checkout {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    /* display: none; */
}
.modal-container {
    width: 900px;
    max-width: calc(100% - 60px);
    padding: 20px 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
/* .modal-title {
    border-bottom: 1px solid #e3e3e3;
} */
.output-form {
    font-size: 22px;
    display: flex; 
    align-items: baseline;
    
}
.output-label {
    color: #6f6f6f;
    font-size: 16px;
}

.output-out {
    padding-left: 12px;
    font-size: 18px ;
}
.checkout-modal__table__wrapper {
    max-height: 390px;
    overflow-y: auto;
}
</style>