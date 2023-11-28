<template>
    <!-- header -->
    <div class="header">
        <!-- header-offer -->
        <div class="header-offer">
            <span class="header-offer__content">
                BIGGEST OFFER ON -SMARTPHONE, SWATCH & EARPHONES
            </span>
        </div>

        <!-- header-info -->
        <div class="header-info container-lg hidden-on-mobile">
            <ul class="header-info__list">
                <li class="header-info__item">
                    <a href="#" class="header-info__link">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Store Location</span>
                    </a>
                </li>
                <li class="header-info__item">
                    <a href="#" class="header-info__link">
                        <i class="fa-solid fa-truck"></i>
                        <span>Strack Your Orther</span>
                    </a>
                </li>
                <li class="header-info__item">
                    <a href="#" class="header-info__link">
                        <i class="fa-solid fa-phone"></i>
                        <span>Call Us For Enquiry</span>
                    </a>
                </li>
                <li class="header-info__item d-none d-xl-inline-block">
                    <a href="#" class="header-info__link">
                        <i class="fa-solid fa-heart"></i>
                        <span
                            >Welcome to Elixi. We provides Best Electric
                            item</span
                        >
                    </a>
                </li>
            </ul>

            <div class="header-info__social">
                <a href="#" class="header-info__social__item">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="header-info__social__item">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#" class="header-info__social__item">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" class="header-info__social__item">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                    href="#"
                    v-if="user.name"
                    class="header-info__social__item header-info__social__user border-end"
                >
                    <span>Xin chào! {{ user.name }}</span>
                    <img
                        src="@/assets/img/avatar.jpg"
                        class="rounded-circle ms-2"
                        alt=""
                        width="30"
                    />
                </a>
                <a
                    v-if="user.name"
                    class="header-info__social__item"
                    @click="loginUser({})"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Log out!"
                >
                    <i class="fa-solid fa-right-from-bracket"></i>
                </a>
            </div>
        </div>

        <!-- header-search -->
        <div class="container-lg">
            <div class="header-search">
                <a href="#" class="header-search__logo me-3 my-3">
                    <img src="@/assets/img/logo-img.png" alt="logo" />
                </a>

                <div
                    class="header-search__box input-group mt-3 mb-3 hidden-on-mobile"
                >
                    <div class="header-search__filter">All Categories</div>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search For Product"
                    />
                    <button class="btn btn-primary" type="button">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div class="header-search__lang d-xl-flex d-none">
                    <div class="lang__item">
                        <a href="#">
                            VND
                            <i class="fa-solid fa-angle-down"></i>
                        </a>
                        <ul class="item__list">
                            <li><a href="#">VND</a></li>
                            <li><a href="#">USD</a></li>
                        </ul>
                    </div>
                    <div class="lang__item">
                        <a href="#">
                            VIETNAM
                            <i class="fa-solid fa-angle-down"></i>
                        </a>
                        <ul class="item__list">
                            <li><a href="#">VIETNAM</a></li>
                            <li><a href="#">ENGLISH</a></li>
                        </ul>
                    </div>
                </div>

                <div class="header-search__icons ms-3">
                    <div class="icon">
                        <a href="#" class="">
                            <i class="fa-regular fa-user"></i>
                        </a>
                    </div>
                    <div class="icon">
                        <a href="#" class="">
                            <i class="fa-regular fa-heart"></i>
                        </a>
                    </div>
                    <div class="icon">
                        <router-link to="/cart" class="">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </router-link>
                        <span class="cart-badge">{{ getCartCount }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- header on scroll -->
        <div class="onscroll header-navbar" ref="headerTop">
            <div class="container-lg">
                <div class="header-navbar__wrapper">
                    <div
                        class="header-navbar__icon-menu"
                        @click="showSidebar()"
                    >
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <ul class="my-navbar">
                        <li><router-link to="/">Home</router-link></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <!-- <div class="">
            Xin chào! Nguyễn thanh tùng
          </div> -->
                    <div v-if="!user.name" class="header-navbar__btn-login">
                        <button class="btn" @click="isFormShow = true">
                            Login/Sign Up
                        </button>
                    </div>
                    <div v-else class="header-navbar__btn-login">
                        <button class="btn">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- header-navbar -->
        <div class="header-navbar">
            <div class="container-lg">
                <div class="header-navbar__wrapper">
                    <div
                        class="header-navbar__icon-menu"
                        @click="showSidebar()"
                    >
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <ul class="my-navbar">
                        <li><router-link to="/">Home</router-link></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <div v-if="!user.name" class="header-navbar__btn-login">
                        <button class="btn" @click="isFormShow = true">
                            Login/Sign Up
                        </button>
                    </div>
                    <div v-else class="header-navbar__btn-login">
                        <button class="btn">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- sidebar -->
    <div class="sidebar" id="sidebar-js" :class="{ show: isSiderbarShow }">
        <div class="sidebar__logo">
            <img src="@/assets/img/logo-img.png" alt="" width="150" />
        </div>
        <div class="sidebar__close" id="sidebar-close" @click="showSidebar()">
            <i class="fa-solid fa-angle-left"></i>
        </div>
        <h5 class="sidebar__title">Danh Mục</h5>
        <ul class="sidebar__list">
            <li><a href="#" class="sidebar__item-link">Điện thoại</a></li>
            <li><a href="#" class="sidebar__item-link">Đồng hồ</a></li>
            <li><a href="#" class="sidebar__item-link">Phụ kiện</a></li>
            <li><a href="#" class="sidebar__item-link">Pin thay thế</a></li>
            <li><a href="#" class="sidebar__item-link">Like New</a></li>
        </ul>
    </div>
    <!-- modal -->

    <div
        class="my-modal"
        :class="{ open: isFormShow, register: isRegister }"
        @click="isFormShow = false"
    >
        <div class="modal-container" @click.stop>
            <div class="row">
                <div class="col-6">
                    <div class="modal-img">
                        <img src="@/assets/img/modal/loginbg.png" alt="" />
                    </div>
                </div>
                <!-- ================= form Đăng nhập ================= -->
                <div class="col-6 modal-login">
                    <!-- modal-close -->
                    <div class="my-modal-header">
                        <h5>Đăng Nhập</h5>
                    </div>
                    <div class="my-modal-body">
                        <form
                            action=""
                            class="modal-form"
                            @submit.prevent="submitLogin()"
                        >
                            <!-- số điện thoại -->
                            <div
                                class="form-group"
                                :class="{ invalid: errorLogin.phone }"
                            >
                                <input
                                    type="text"
                                    class="form-control2"
                                    placeholder="Số điện thoại"
                                    @input="this.errorLogin.phone = ''"
                                    v-model="userLogin.phone"
                                />
                                <span class="form-message">{{
                                    this.errorLogin.phone
                                }}</span>
                            </div>

                            <!-- số mật khẩu -->
                            <div
                                class="form-group"
                                :class="{ invalid: errorLogin.password }"
                            >
                                <input
                                    type="password"
                                    class="form-control2"
                                    placeholder="Mật khẩu"
                                    @input="this.errorLogin.password = ''"
                                    v-model="userLogin.password"
                                />
                                <span class="form-message">{{
                                    this.errorLogin.password
                                }}</span>
                            </div>
                            <p v-if="inCorrectLogin != ''" class="text-danger">
                                {{ inCorrectLogin }}
                            </p>
                            <button type="submit" class="btn modal-btn">
                                Đăng nhập
                            </button>
                        </form>
                        <!-- change -->
                        <div class="modal-bridge">
                            <div class="modal-bridge__col">
                                <div class="line-ngang"></div>
                            </div>
                            <div class="modal-bridge__col">
                                <div class="modal-bridge__context">
                                    Hoặc đăng ký bằng
                                </div>
                            </div>
                            <div class="modal-bridge__col">
                                <div class="line-ngang"></div>
                            </div>
                        </div>
                        <div class="modal-social">
                            <div class="modal-social__img">
                                <img
                                    src="@/assets/img/modal/googleicon.png"
                                    alt=""
                                />
                            </div>
                            <div class="modal-social__img">
                                <img
                                    src="@/assets/img/modal/faceicon.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="modal-social__having">
                            <p>Bạn chưa có tài khoản ?</p>
                            <a
                                id="btnChangetoRegister"
                                @click="isRegister = true"
                                >Đăng Ký tại đây</a
                            >
                        </div>
                    </div>
                    <!-- end modal-body -->
                </div>
                <!-- ================= form Đăng nhập end ================= -->

                <!-- ================= form Đăng ký ================= -->
                <div class="col col-6 modal-register">
                    <!-- modal-close -->
                    <div class="my-modal-header">
                        <h5>Đăng Ký</h5>
                    </div>
                    <div class="my-modal-body">
                        <div v-if="errorRegister.length">
                            <b>Please correct the following error(s):</b>
                            <ul class="text-danger">
                                <li
                                    v-for="(error, index) in errorRegister"
                                    :key="index"
                                >
                                    {{ error }}
                                </li>
                            </ul>
                        </div>
                        <form
                            action=""
                            class="modal-form"
                            @submit.prevent="submitRegister()"
                        >
                            <!-- họ tên khách -->
                            <div class="form-group">
                                <input
                                    type="text"
                                    required
                                    class="form-control2"
                                    placeholder="Họ và tên"
                                    v-model="userRegister.name"
                                />
                                <span class="form-message"></span>
                            </div>

                            <!-- số điện thoại -->
                            <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control2"
                                    v-model="userRegister.email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    required
                                    class="form-control2"
                                    placeholder="Số điện thoại"
                                    v-model="userRegister.phone"
                                />
                                <span class="form-message"></span>
                            </div>

                            <!-- password -->
                            <div class="form-group">
                                <input
                                    type="password"
                                    required
                                    class="form-control2"
                                    placeholder="Mật khẩu"
                                    v-model="userRegister.password"
                                    minlength="6"
                                />
                                <span class="form-message"></span>
                            </div>

                            <!-- confirm password  -->
                            <div class="form-group">
                                <input
                                    type="password"
                                    required
                                    class="form-control2"
                                    placeholder="Nhập lại mật khẩu"
                                    v-model="confirmPass"
                                />
                            </div>
                            <button type="submit" class="btn modal-btn">
                                Đăng ký
                            </button>
                        </form>
                        <!-- more -->
                        <div class="modal-bridge">
                            <div class="modal-bridge__col">
                                <div class="line-ngang"></div>
                            </div>
                            <div class="modal-bridge__col">
                                <div class="modal-bridge__context">
                                    Hoặc đăng ký bằng
                                </div>
                            </div>
                            <div class="modal-bridge__col">
                                <div class="line-ngang"></div>
                            </div>
                        </div>
                        <div class="modal-social">
                            <div class="modal-social__img">
                                <img
                                    src="@/assets/img/modal/googleicon.png"
                                    alt=""
                                />
                            </div>
                            <div class="modal-social__img">
                                <img
                                    src="@/assets/img/modal/faceicon.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="modal-social__having">
                            <p>Bạn đã có tài khoản ?</p>
                            <a id="btnChangetoLogin" @click="isRegister = false"
                                >Đăng nhập tại đây</a
                            >
                        </div>
                    </div>
                    <!-- end modal-body -->
                </div>
                <!-- ================= form Đăng ký end ================= -->
            </div>
        </div>
    </div>
    <!-- ================= Header Area End ================= -->
</template>

<script>
import md5 from "md5";
import axios from "axios";
import Swal from "sweetalert2";

import { mapActions, mapGetters, mapState } from "vuex";
import { checkPhone, userRegister } from "../admin/register.js";
import { API_USERS } from "@/constant.js";
const body = document.getElementById("bodyId");
export default {
    name: "header-component",

    data() {
        return {
            isSiderbarShow: false,
            headerTop: "",
            isFormShow: false,
            isRegister: false,
            inCorrectLogin: "",
            userLogin: {
                phone: "",
                password: "",
            },
            errorLogin: {
                phone: "",
                password: "",
            },
            confirmPass: "",
            userRegister,
            errorRegister: [],
        };
    },
    created() {
        window.addEventListener("scroll", this.showHeader);
    },
    mounted() {
        this.headerTop = this.$refs.headerTop;
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.showHeader);
    },
    methods: {
        ...mapActions(["loginUser"]),
        showSidebar() {
            this.isSiderbarShow = !this.isSiderbarShow;
            if (this.isSiderbarShow) {
                body.style.paddingLeft = "220px";
            } else {
                body.style.paddingLeft = "0";
            }
        },
        showHeader() {
            let currentScroll = window.scrollY;
            if (currentScroll > 310) {
                this.headerTop.classList.add("show-head");
            } else {
                this.headerTop.classList.remove("show-head");
            }
        },

        // formLogin
        validateForm() {
            this.errorLogin = {};
            let isValid = true;
            if (this.userLogin.phone === "") {
                this.errorLogin.phone = "Tên không được để trống.";
                isValid = false;
            }
            if (this.userLogin.password === "") {
                this.errorLogin.password = "Mật khẩu không được để trống.";
                isValid = false;
            }
            return isValid;
        },

        // formRegister
        validateRegister() {
            this.errorRegister = [];
            let isValid = true;
            if (this.userRegister.password !== this.confirmPass) {
                this.errorRegister.push("Mật khẩu nhập lại không chính xác");
                isValid = false;
            }
            return isValid;
        },
        async submitLogin() {
            this.inCorrectLogin = "";
            if (this.validateForm()) {
                let salt = "ntt26";
                let md5Pass = md5(salt + this.userLogin.password);
                await axios
                    .get(API_USERS)
                    .then((result) => {
                        let isPhone = false,
                            isPass = false;
                        result.data.forEach((user) => {
                            if (user.phone == this.userLogin.phone) {
                                isPhone = true;
                                if (user.password == md5Pass) {
                                    this.loginUser(user);

                                    isPass = true;
                                    this.userLogin = {};
                                    this.errorLogin = {};
                                    this.isFormShow = false;
                                    console.log("this.usser :>> ", this.user);
                                }
                            }
                        });
                        if (!isPhone) {
                            this.inCorrectLogin = "Số điện thoại không tồn tại";
                        } else {
                            if (!isPass)
                                this.inCorrectLogin =
                                    "Mật khẩu không chính xác";
                        }
                    })
                    .catch((err) => {
                        console.error("Lỗi khi tải userlisst", err);
                    });
                // this.userLogin

                console.log("this.userLogin :>> ", this.userLogin);
            }
        },
        async submitRegister() {
            this.errorRegister = {};
            if (this.validateRegister()) {
                const salt = "ntt26";
                let newPass = md5(salt + this.userRegister.password);
                // kiểm tra user có tồn tại không
                const isValid = await checkPhone(this.userRegister.phone);
                console.log("isValid register :>> ", isValid);
                if (isValid == "") {
                    console.log("tạo thành công :>> ");
                    this.postNewUser({
                        name: this.userRegister.name,
                        phone: this.userRegister.phone,
                        address: "null",
                        email: this.userRegister.email,
                        password: newPass,
                    })
                        .then((rs) => {
                            this.loginUser(rs);
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Tạo tài khoản thành công!",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.isFormShow = false;
                            this.confirmPass = "";
                            for (const key in this.userRegister) {
                                this.userRegister[key] = "";
                            }
                        })
                        .catch((err) => {
                            console.error("Lỗi khi tạo user mới sub", err);
                        });
                } else {
                    this.errorRegister.push(isValid);
                }
            } else {
                console.log("invalid :>> ");
            }
        },

        async postNewUser(user) {
            try {
                const { data } = await axios.post(API_USERS, user);
                return data;
            } catch (error) {
                console.error("Lỗi khi tạo user mới", error);
            }
        },
    },

    computed: {
        ...mapState(["user"]),
        ...mapGetters(["getCartCount"]),
    },
};
</script>

<style scoped>
@import url("@/assets/css/header-sidebar.css");
@import url("@/assets/css/modal.css");
</style>
