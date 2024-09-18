// product in webpage
function addproducts(fileName, locationOfProducts){
	fetch('product.json')
			.then(response => response.json())
			.then(data => {
				const products = document.querySelector('.shop .content');
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
							<p onclick="openProduct()">${product.name}</p>
							<span>$${product.price}</span>
							<button>Add Cart</button>
						</div>`
				})
			})
}
addproducts('product.json', '.shop .content');
addproducts('featured.json', '.featured .content');
addproducts('dresses&jumpsuits.json', '.dresses-jumpsuits .content');
addproducts('shoes.json', '.shoes .content');
addproducts('featured.json', '.our-product .content');	
