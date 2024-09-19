// فتح قائمة العناصر عند حجم الشاشة 767 بكسل
function openNavList() {
    const navlist = document.querySelector('nav');
    navlist.classList.toggle("show");
}

// مصفوفة لتخزين جميع المنتجات
let allProduct = [];

// فتح تفاصيل المنتج


// تغيير لون المنتج
let activeImage = document.querySelector('.product .images .active');

function changeColor(newImage) {
    if (activeImage) {
        activeImage.src = newImage;
    } else {
        console.error('عنصر الصورة النشط غير موجود');
    }
}
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
					<button>Add to Cart</button>
					<h4>Product Details</h4>
					<p>${ allproduct[id].ProductDetails}</p>
				</div>
			</div>
		</div>
		<!-- ======================end product====================== -->
		
`;
console.log(id)
console.log(allproduct[id])
}

// عناصر الألوان
let activeOne = document.querySelector('#farag .container .images .color-product #one');
let activeTwo = document.querySelector('#farag .container .images .color-product #two');
let activeThree = document.querySelector('#farag .container .images .color-product #three');
let activeFour = document.querySelector('#farag .container .images .color-product #four');
let activeDetails = document.querySelector('#farag .container .images .info p');
let activeProductDetails = document.querySelector('.contentOfPage');

