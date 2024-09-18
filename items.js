// product in webpage
function addproducts(fileName, locationOfProducts){
	fetch('product.json')
			.then(response => response.json())
			.then(data => {
				const products = document.querySelector(locationOfProducts);
				allproduct =data;

				
				data.forEach( product => {
					if(product.category === fileName){
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
addproducts("Men / T-Shirt", '.featured .content');
addproducts('dress', '.dresses-jumpsuits .content');
addproducts('shoes', '.shoes .content');
addproducts("Men / T-Shirt", '.our-product .content');	
