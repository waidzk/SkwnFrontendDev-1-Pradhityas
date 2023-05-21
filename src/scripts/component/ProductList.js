import $ from "jquery";

function ProductList(data) {
  data.forEach((product) => {
    $(".swiper-wrapper").append(`
    <div class="swiper-slide">
        <img src="${product.image}" alt="product" />
        <div class="detail-product">
            <span class="price-tag">$${product.price}</span>
            <span class="product-name">${product.name}</span>
        </div>
    </div>
    `);
  });
}

export default ProductList;
