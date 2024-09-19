// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// open details of product
let allproduct =[]

let activeImage;
let featureProduct;
let elementInCart;
let amountOfProduct;
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
						 <button onclick="addToCart(${ allproduct[id].id})">>Add to Cart</button>
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
									<button onclick="addToCart(${product.id})">>Add Cart</button>
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


function addToCart(id) {
    fetch('cart.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const elementInCart = doc.querySelector('.cart table tbody');

            // Add product to the UI
            const newRow = createCartRow(allproduct[id]);
            elementInCart.innerHTML += newRow;

            // Save to localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(allproduct[id]);
            localStorage.setItem('cart', JSON.stringify(cart));
        })
        .catch(error => {
            console.error('Error fetching cart:', error);
        });
}

function createCartRow(product) {
    return `
        <tr id="product-${product.id}">
            <td>
                <i class="fa-regular fa-trash-can" data-id="${product.id}"></i>
            </td>
            <td>
                <img src="${product.img}">
            </td>
            <td>
                <h4>${product.name}</h4>
            </td>
            <td>
                <h4>$${product.price}</h4>
            </td>
            <td>
                <input type="number" value="1" min="1" class="amount-input" data-id="${product.id}">
            </td>
            <td>
                <h4 class="total-price">$${product.price}</h4>
            </td>
        </tr>`;
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tbody = document.querySelector('.cart table tbody');

    cart.forEach(product => {
        const newRow = createCartRow(product);
        tbody.innerHTML += newRow;
    });

    // Add event listeners for delete icons and input changes
    attachEventListeners();
	
	  document.querySelectorAll('.amount-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            updateTotalPrice(id);
        });
    });
}

function attachEventListeners() {
    document.querySelectorAll('.fa-trash-can').forEach(icon => {
        icon.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            deleteFromCart(id);
        });
    });

  
}

function updateTotalPrice(id) {
    const input = document.querySelector(`.amount-input[data-id="${id}"]`);
    const price = allproduct.find(product => product.id === id).price;
    const totalPriceElement = document.querySelector(`#product-${id} .total-price`);
    totalPriceElement.innerText = `$${(input.value * price).toFixed(2)}`;
}

function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));

    const row = document.getElementById(`product-${id}`);
    if (row) {
        row.remove();
    }
}

window.onload = loadCart;

