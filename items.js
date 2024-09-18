// product in webpage
function addproducts(fileName, locationOfProducts){
	fetch('allProducts.json')
			.then(response => response.json())
			.then(data => {
				if(data.fileName){
				const products = document.querySelector(locationOfProducts);
				allproduct =data;

				
				data.forEach( product => {
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
				})
			}else{
				console.log("erro")	
			}})
}
addproducts('featured', '.shop .content');
addproducts('featured', '.featured .content');
addproducts('featured', '.dresses-jumpsuits .content');
addproducts('featured', '.shoes .content');
addproducts('featured', '.our-product .content');	
