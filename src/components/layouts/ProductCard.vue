<template>
    <div class="col-6 col-md-4 col-lg-3 mb-3">
        <router-link :to="{name:'ProductDetail', params:{id: product.id}}" class="product-item">
            <div class="card" style="width: 100%">
                <div class="product-item__img">
                    <img
                        class="card-img-top"
                        :src="formatImage(product.image)"
                        alt="Card image"
                    />
                    <!-- <img class="card-img-top" src="@/assets/img/product/casio/dongho-casio-3.jpg" alt=""> -->
                </div>
                    <div class="card-body">
                        <h4 class="card-title">{{ product.name }}#{{product.id}}</h4>
                        <p class="card-text product-item__price">{{ formatPrice(product.price) }}<sup>đ</sup>
                        </p>
                        <div v-if="!product.instock" class="product-item__out">Sold Out</div>
                        <!-- <a href="#" class="btn btn-primary">See Profile</a> -->
                    </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'product-card',
    props: {
        product: Object
    },
    data() {
        return {
            productImage:'',
        };
    },
    methods: {
        formatPrice(number) {
            if(number)
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        formatImage(img) {
            return require(`@/${img}`)
        }
    },
    
};
</script>

<style scoped>
.product-item {
    /* display: inline-block; */
    text-decoration: none;
    color: #666;
    position: relative;
}
.product-item__out {
    font-size: 20px;
    font-weight: 800;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
    position: absolute;
    color: var(--primary-color);
    padding: 5px 0;
    top: 58%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    background-color: rgba(221, 221, 221, 0.6);

}
.product-item:hover img{
    scale: 1.03 ;
}

.product-item:hover .card {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0,0,0.2);
}
.product-item__img {
    overflow: hidden;
}
.product-item__img img {
    transition: all ease 0.2s;
}
.product-item__price {
    font-size: 24px;
    color: red;
    font-weight: 600;
}
.card {
    transition: all ease 0.2s;
    height: 430px;

}
.card-title {
    height: 60px;
    line-height: 30px;
    overflow: hidden;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
