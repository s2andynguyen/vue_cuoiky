<template>
  <div class="content">
    <!-- Carousel -->
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicators/dots -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <!-- The slideshow/carousel -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/img/slider/slider1.jpg"
            alt="slider1"
            class="d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/img/slider/slider2.jpg"
            alt="slider1"
            class="d-block w-100"
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/img/slider/slider3.jpg"
            alt="slider1"
            class="d-block w-100"
          />
        </div>
      </div>

      <!-- Left and right controls/icons -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <!-- service -->
    <div class="service container-lg">
      <div class="service-item">
        <div class="service-item__img">
          <img src="@/assets/img/icon/shipping.png" alt="" />
        </div>
        <div class="service-item__content">
          <p class="service-item__title">Free delivery</p>
          <span class="service-item__body">
            For all orders above 1,000,000đ
          </span>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__img">
          <img src="@/assets/img/icon/payment.png" alt="" />
        </div>
        <div class="service-item__content">
          <p class="service-item__title">Secure payments</p>
          <span class="service-item__body">
            Confidence on all your devices
          </span>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__img">
          <img src="@/assets/img/icon/support.png" alt="" />
        </div>
        <div class="service-item__content">
          <p class="service-item__title">Top-notch support</p>
          <span class="service-item__body"> sayhello&vapier.com </span>
        </div>
      </div>
      <div class="service-item">
        <div class="service-item__img">
          <img src="@/assets/img/icon/reload.png" alt="" />
        </div>
        <div class="service-item__content">
          <p class="service-item__title">180 Days Return</p>
          <span class="service-item__body"> 180 Days Return </span>
        </div>
      </div>
    </div>

    <!-- special -->
    <div class="special container-lg">
      <p class="special__mail">NEED A CLOSER LOOK? COME VISIT US IN STORE</p>
      <h3 class="special__title">YOUR SPECIALIST WATCH STORE</h3>
      <a href="#" class="btn special__btn">STORE LOCATOR</a>
    </div>

    <!-- Products area -->
    <div class="product-list container-lg">
      <h4 class="product-list__title">LATEST ARRIVALS</h4>
      <div class="home--filter">
        <span class="home--filter__label">Sắp xếp theo</span>
        <button class="btn home--filter__btn btn-moi-nhat btn--primary">
          Mới nhất
        </button>
        <button class="btn home--filter__btn">Bán Chạy</button>

        <div class="select-input">
          <div class="select-input__wrapper">
            <span class="select-input__label">Giá</span>
            <i class="select-input__icon fa-solid fa-angle-down"></i>
          </div>

          <ul class="select-input__list">
            <li class="select-input__item">
              <div class="btn select-input__link select-input__thap" @click="changeFilterInput('normal')">
                Mặc định
              </div>
            </li>
            <li class="select-input__item">
              <div class="btn select-input__link select-input__thap" @click="changeFilterInput('asc')">
                Giá: Thấp đến cao
              </div>
            </li>

            <li class="select-input__item">
              <div class="btn select-input__link select-input__cao" @click="changeFilterInput('desc')">
                Giá: Cao đến thấp
              </div>
            </li>
           
          </ul>
        </div>
         <div class="ms-3">
                <form  class="input-group" @submit.prevent="changeSearchInput(search)">
                <input type="text" class="form-control filter-search__input" v-model="search"
                 placeholder="Search" @change="changeSearchInput(search)"
                 >
                <button class="btn btn-search" type="submit">Search</button>
                </form>
            </div>
        <div class="home-filter__page">
          <span class="home-filter__page-num">
            <span class="home-filter__page-current">{{page}}</span>/ {{maxPage}}
          </span>
            <!-- home-filter__page-btn--disable -->
          <div class="home-filter__page-control">
            <a class="home-filter__page-btn" @click="prevPage()"
                :class="{'home-filter__page-btn--disable': page==1}"
            >
              <i class="home-filter__page-icon fa-solid fa-angle-left"></i>
            </a>
            <a class="home-filter__page-btn" @click="nextPage()"
                :class="{'home-filter__page-btn--disable': page==maxPage}"
            >
              <i class="home-filter__page-icon fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="product-list__wrapper">
        <div class="row">
          <Product
            v-for="(product, index) in getListProductPage(page)"
            :key="index"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Product from "./layouts/ProductCard.vue";

export default {
  name: "home-page",
  components: {
    Product,
  },
  data() {
    return {
      name: "HOME PAGE",
      page: 1,
        limit: 8,
        maxPage: 1,
        search: ''
    };
  },
  methods: {
    ...mapActions(["actsetProducts","changeFilterInput","changeSearchInput"]),
    nextPage() {
        if(this.page < this.maxPage){
            this.page++;
        }
    },
    prevPage() {
        if(this.page > 1){
            this.page--;
        }
    },
    getListProductPage(page){
        let start = page==1? 0 : this.limit*(page-1);
        let end = this.getProducts.length<page*this.limit? this.getProducts.length : this.limit*page
        return this.getProducts.slice(start, end)
    }
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(['getProducts'])
    
    
  },
  created() {
    this.actsetProducts()
    .then(() => {
        this.maxPage = Math.ceil(this.products.length/this.limit)
    }).catch((err) => {
        console.log('Lỗi reload :>> ', err);
    });
  },
};
</script>

<style scoped>
  @import url("@/assets/css/home.css");
.content {
  padding-bottom: 30px;
}
.carousel-item img {
  height: 550px;
  object-fit: cover;
}
</style>
