// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// open details of product
let allproduct =[]

let activeImage;
let featureProduct;
let activeProductDetails = document.querySelector('.contentOfPage')

	function openProduct(id) {
		activeProductDetails.innerHTML =`
			 <!-- ======================start product====================== -->
			 <div class="product">
				 <div class="container">
					 <div class="images">
						 <img src="${ allproduct[id].img}" class="active">
						 <div class="color-product">
							 <img src="${ allproduct[id].productColors[0]}" onclick="changeColor(this.src)" id ="one">
							 <img src="${ allproduct[id].productColors[1]}" onclick="changeColor(this.src)" id ="two">
							 <img src="${ allproduct[id].productColors[2]}" onclick="changeColor(this.src)" id ="three">
							 <img src="${ allproduct[id].productColors[3]}" onclick="changeColor(this.src)" id ="four">
						 </div>
					 </div>
					 <div class="info">
						 <span>${ allproduct[id].category}</span>
						 <h3>${ allproduct[id].name}</h3>
						 <span class="price">${allproduct[id].price}</span>
						 <select>
							 <option>Select Size</option>
							 <option>XL</option>
							 <option>XXL</option>
							 <option>Small</option>
							 <option>Large</option>
						 </select>
						 <input type="number" value="1">
						 <button onclick="addToCart(${allproduct[id].id})">Add to Cart</button>
						 <h4>Product Details</h4>
						 <p>${ allproduct[id].ProductDetails}</p>
					 </div>
				 </div>
			 </div>
			 <!-- ======================end product====================== -->
			 <!-- ======================start other products====================== -->
			 <div class="products our-product" id="product">
				 <div class="container">
					 <div class="header">
						 <h3>Related Products</h3>
					 </div>
					 <div class="content">
                    
					 </div>
				 </div>
			 </div>
			 <!-- ======================end other products====================== -->
	 `; 
	 activeImage = document.querySelector('.product .images .active')
	setTimeout(() => {
		featureProduct = document.querySelector('#product .container .content')
		fetch('product.json')
				.then(response => response.json())
				.then(data => {
					featureProduct
					allproduct =data;
					data.forEach( product => {
						if(product.section === "Featured"){
							featureProduct.innerHTML += `
								<div class="box">
									<div class="image">
										<img src="${product.img}">
									</div>
									<div class="stars">
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
									</div>
									<p onclick="openProduct(${product.id})" product-id="${product.id}">${product.name}</p>
									<span>$${product.price}</span>
									<button onclick="addToCart(${product.id})">Add Cart</button>
								</div>`
						}
					})
				})
	}, 100);
}

//  change color of product
 
function changeColor(newImage){
	activeImage.src = newImage
}


document.addEventListener('DOMContentLoaded', function() {
    function addToCart(id) {
        fetch('cart.html')
            .then(response => response.text())
            .then(data => {
                const elementInCart = document.querySelector('.cart table tbody');
                console.log(elementInCart); // تحقق مما إذا كان العنصر موجودًا

                if (elementInCart) {
                    elementInCart.innerHTML += `
                        <tr>
                            <td>
                                <i class="fa-regular fa-trash-can"></i>
                            </td>
                            <td>
                                <img src="img/shop/1.jpg">
                            </td>
                            <td>
                                <h4>Men's Fashion T-Shirt</h4>
                            </td>
                            <td>
                                <h4>$92.00</h4>
                            </td>
                            <td>
                                <input type="number" value="1">
                            </td>
                            <td>
                                <h4>$92.00</h4>
                            </td>
                        </tr>`;
                } else {
                    console.error('العنصر .cart table tbody غير موجود في الصفحة.');
                }
            })
            .catch(error => console.error('خطأ:', error));
    }
    
    // أضف حدث الزر
    document.getElementById('addToCartButton').addEventListener('click', function() {
        addToCart(1);
    });
});
