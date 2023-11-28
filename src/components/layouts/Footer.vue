<template>
    <!-- footer -->
    <footer class="footer">
        <div class="footer-list container-lg pb-3 pt-4">
            <div class="row">
                <div class="text-center text-md-start col-12 col-md-3 mb-3">
                    <div class="footer-item">
                        <h5 class="footer-item__title">Chăm sóc khách hàng</h5>
                        <ul class="footer-item__list">
                            <li>
                                <a href="#" class="footer-item__link">
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer-item__link">
                                    Hướng Dẫn Mua Hàng
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer-item__link">
                                    Chăm Sóc Khách Hàng
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer-item__link">
                                    Vận Chuyển
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer-item__link">
                                    Chính Sách Bảo Hành
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="text-center text-md-start col-12 col-md-3 mb-3">
                    <div class="footer-item">
                        <h5 class="footer-item__title">Về Shop</h5>
                        <ul class="footer-item__list">
                            <li>
                                <a href="#" class="footer-item__link">
                                    Giới Thiệu Về Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer-item__link">
                                    Điều Khoản
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer-item__link">
                                    Chính Sách Bảo Mật
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer-item__link">
                                    Kên Người Bán
                                </a>
                            </li>
                            <li>
                                <a href="#" class="footer-item__link">
                                    Flash Sales
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-3 mb-3">
                    <div class="footer-item">
                        <h5 class="footer-item__title">Thanh Toán</h5>
                        <div class="footer-item__img">
                            <img
                                src="@/assets/img/thanhtoan.png"
                                alt=""
                                width="100%"
                            />
                        </div>

                        <h5 class="footer-item__title mt-3">
                            Đơn Vị Vận Chuyển
                        </h5>
                        <div class="footer-item__img">
                            <img
                                src="@/assets/img/vanchuyen.png"
                                alt=""
                                width="100%"
                            />
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-3 mb-3">
                    <div class="footer-item">
                        <h5 class="footer-item__title">
                            Theo dỗi chúng tôi trên
                        </h5>
                        <ul class="footer-item__list">
                            <li>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100008631608333"
                                    target="_blank"
                                    class="footer-item__link"
                                >
                                    <i class="fa-brands fa-facebook me-2"></i
                                    >Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/tungnts2551__/"
                                    class="footer-item__link"
                                    target="_blank"
                                >
                                    <i class="fa-brands fa-instagram me-2"></i
                                    >Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="footer-item__link"
                                    target="_blank"
                                >
                                    <i class="fa-brands fa-linkedin me-2"></i
                                    >Linked
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="footer-item__link"
                                    target="_blank"
                                >
                                    <i class="fa-brands fa-pinterest me-2"></i
                                    >Pinterest
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <span class="author"
                >copyright <i class="fa-regular fa-copyright"></i> 2023 |
                Powered by ThanhTungNguyen</span
            >
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer-component",
    data() {
        return {};
    },
};
</script>

<style scoped>
    @import url('@/assets/css/footer.css');
</style>
