// فتح قائمة العناصر عند حجم الشاشة 767 بكسل
function openNavList() {
    const navlist = document.querySelector('nav');
    navlist.classList.toggle("show");
}

// مصفوفة لتخزين جميع المنتجات
let allProduct = [];

// فتح تفاصيل المنتج
function openProduct(id) {
            productDetails(id);
      
}

// تغيير لون المنتج
let activeImage = document.querySelector('.product .images .active');

function changeColor(newImage) {
    if (activeImage) {
        activeImage.src = newImage;
    } else {
        console.error('عنصر الصورة النشط غير موجود');
    }
}

// عناصر الألوان
let activeOne = document.querySelector('#farag .container .images .color-product #one');
let activeTwo = document.querySelector('#farag .container .images .color-product #two');
let activeThree = document.querySelector('#farag .container .images .color-product #three');
let activeFour = document.querySelector('#farag .container .images .color-product #four');
let activeDetails = document.querySelector('#farag .container .images .info p');
let activeProductDetails = document.querySelector('body');
	console.log( allProduct[id])
function productDetails(id) {
    

 activeProductDetails.innerHTML =`
		<!-- ======================start header====================== -->
		<header>
			<div class="container">
				<a href="index.html" class="logo"><img src="img/logo1.png"></a>
				<nav>
					<a href="index.html">Home</a>
					<a href="shop.html" class="active">Shop</a>
					<a href="blog.html">Blog</a>
					<a href="#">About</a>
					<a href="#">Contact Us</a>
					<div class="icons">
						<i class="fas fa-search"></i>
						<a href="cart.html">
							<i class="fa-solid fa-bag-shopping"></i>
						</a>
					</div>
				</nav>
				<i class="fas fa-bars" onclick="openNavList()"></i>
			</div>
		</header>
		<!-- ======================end header====================== -->
		<!-- ======================start product====================== -->
		<div class="product">
			<div class="container">
				<div class="images">
					<img src="${ allProduct[id].productColors[0]}" class="active">
					<div class="color-product">
						<img src="${ allProduct[id].productColors[0]}" onclick="changeColor(this.src)" id ="one">
						<img src="${ allProduct[id].productColors[1]}" onclick="changeColor(this.src)" id ="two">
						<img src="${ allProduct[id].productColors[2]}" onclick="changeColor(this.src)" id ="three">
						<img src="${ allProduct[id].productColors[3]}" onclick="changeColor(this.src)" id ="four">
					</div>
				</div>
				<div class="info">
					<span>${ allProduct[id].category}</span>
					<h3>${ allProduct[id].name}</h3>
					<span class="price">${activeProduct.price}</span>
					<select>
						<option>Select Size</option>
						<option>XL</option>
						<option>XXL</option>
						<option>Small</option>
						<option>Large</option>
					</select>
					<input type="number" value="1">
					<button>Add to Cart</button>
					<h4>Product Details</h4>
					<p>${ allProduct[id].ProductDetails}</p>
				</div>
			</div>
		</div>
		<!-- ======================end product====================== -->
		<!-- ======================start other products====================== -->
		<div class="products our-product">
			<div class="container">
				<div class="header">
					<h3>Related Products</h3>
				</div>
				<div class="content">
				</div>
			</div>
		</div>
		<!-- ======================end other products====================== -->
		<!-- ======================start footer====================== -->
		<footer>
			<div class="container">
				<div class="info">
					<img src="img/logo2.png">
					<p>Fringilla urna porttitor rhoncus dolor purus luctus venenatis
					lectus mogna fringilla diam maecenas ultricies mieget mauris.</p>
				</div>
				<ul>
					<h3>Featured</h3>
					<li><a href="#">Men</a></li>
					<li><a href="#">Women</a></li>
					<li><a href="#">Boys</a></li>
					<li><a href="#">Girls</a></li>
					<li><a href="#">New Arrivals</a></li>
					<li><a href="#">Shoes</a></li>
					<li><a href="#">cloths</a></li>
				</ul>
				<ul class="contact">
					<h3>Contact Us</h3>
					<li><span>Address</span><p>123 Street Name City,Us</p></li>
					<li><span>Phone</span><p>+20 100-000-0000</p></li>
					<li><span>Email</span><p>aaaaaaa@example.com</p></li>
				</ul>
				<div class="images">
					<h3>Instagram</h3>
					<img src="img/insta/1.jpg">
					<img src="img/insta/2.jpg">
					<img src="img/insta/3.jpg">
					<img src="img/insta/4.jpg">
					<img src="img/insta/5.jpg">
					<img src="img/insta/6.jpg">
				</div>
			</div>
			<div class="footer">
				<a href="#"><img src="img/payment.png"></a>
				<p>rymo eCommerce &copy 2021 All Rights Reserved</p>
				<div class="icons">
					<a href="#">
						<i class="fa-brands fa-facebook"></i>
					</a>
					<a href="#">
						<i class="fa-brands fa-twitter"></i>
					</a>
					<a href="#">
						<i class="fa-brands fa-linkedin"></i>
					</a>
				</div>
			</div>
		</footer>
		<!-- ======================end footer====================== -->
		<script src="main.js"></script>
		<script src="items.js"></script>
`;
    // تحديث تفاصيل المنتج
    // activeImage.src = activeProduct.img;

    // activeOne.src = activeProduct.productColors[0];
    // activeTwo.src = activeProduct.productColors[1];
    // activeThree.src = activeProduct.productColors[2];
    // activeFour.src = activeProduct.productColors[3];
    // activeDetails.textContent = activeProduct.ProductDetails; // استخدام textContent
}

// دالة إضافية لفتح شيء آخر
function openw() {
    // إضافة أي كود ترغب فيه هنا
    // window.open("product.html", "_self");
}
