$(function () {
  $.ajax({
    url: "https://dummyjson.com/products",
    success: function (res) {
      const products = res.products;

      for (let i = 0; i < products.length; i++) {
        $(".row-data").append(`
            <div class="product">
            <img src="${products[i].thumbnail}" alt="${products[i].title}" width="100" height="100">
              <h3>${products[i].title}</h3>
              <p>Price: $${products[i].price}</p>
              <P>${products[i].description}</p>
            </div>
          `);
      }
    },
  });
});
