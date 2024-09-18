// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// open details of product
let allproduct =[]


function openProduct(id){
	
	openwindow();
	productDelails(id);
}
//  change color of product

function openwindow(){
		window.open("product.html", "_self")
}

function productDelails(id){
	const activeProduct = allproduct[id]
 let containerOfProductPage = document.querySelector('#product');
containerOfProductPage.innerHTML = `
<div class="container">
<div class="images">
					<img src="img/shop/1.jpg" class="active">
					<div class="color-product">
						<img src="img/shop/1.jpg" onclick="changeColor(this.src)">
						<img src="img/shop/24.jpg" onclick="changeColor(this.src)">
						<img src="img/shop/25.jpg" onclick="changeColor(this.src)">
						<img src="img/shop/26.jpg" onclick="changeColor(this.src)">
					</div>
				</div>
				<div class="info">
					<span>Men / T-Shirt</span>
					<h3>Men's Fashion T-Shirt</h3>
					<span class="price">$139.00</span>
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
					<p>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq.
					yd, fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides
					unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless
					double- needle collar, and available in a range of colors,
					it offers it all in the ultimate head-tuming package.</p>
				</div>
				</div>`
}

let activeImage = document.querySelector('.product .images .active')

function changeColor(newImage){
	activeImage.src = newImage
}


