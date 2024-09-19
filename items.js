// product in webpage
function addproducts(fileName, locationOfProducts){
	fetch('product.json')
			.then(response => response.json())
			.then(data => {
				const products = document.querySelector(locationOfProducts);
				allproduct =data;

				
				data.forEach( product => {
					if(product.section === fileName){
					products.innerHTML += `
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
							<button>Add Cart</button>
						</div>`
				}else{
				console.log("erro")	
			}})
			})
}
addproducts('shop', '.shop .content');
addproducts('Featured', '.featured .content');
addproducts('Dresses', '.dresses-jumpsuits .content');
addproducts('Shoes', '.shoes .content');
addproducts('Featured', '.our-product .content');	



function openProduct(id) {
   activeProductDetails.innerHTML =`
		<!-- ======================start product====================== -->
		<div class="product">
			<div class="container">
				<div class="images">
					<img src="${ allproduct[id].img}" class="active">
					<div class="color-product">
						<img src="${ allproduct[id].productColors[0]}" onclick="changeColor(${ allproduct[id].productColors[0]})" id ="one">
						<img src="${ allproduct[id].productColors[1]}" onclick="changeColor(${ allproduct[id].productColors[1]})" id ="two">
						<img src="${ allproduct[id].productColors[2]}" onclick="changeColor(${ allproduct[id].productColors[2]})" id ="three">
						<img src="${ allproduct[id].productColors[3]}" onclick="changeColor(${ allproduct[id].productColors[3]})" id ="four">
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
}

let activeImage = document.querySelector('.product .images .active');

function changeColor(newImage) {
    if (activeImage) {
        activeImage.src = newImage;
    } else {
        console.error('عنصر الصورة النشط غير موجود');
    }
}

