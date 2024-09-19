// Open navigation list at media 767px
function openNavList() {
    const navlist = document.querySelector('nav');
    navlist.classList.toggle("show");
}

// Global variables
let allproduct = [];
let activeImage;
let featureProduct;
const activeProductDetails = document.querySelector('.contentOfPage');

// Open product details
function openProduct(id) {
    const product = allproduct[id];
    activeProductDetails.innerHTML = `
        <div class="product">
            <div class="container">
                <div class="images">
                    <img src="${product.img}" class="active">
                    <div class="color-product">
                        ${product.productColors.map((color, index) => `
                            <img src="${color}" onclick="changeColor(this.src)" id="color-${index + 1}">
                        `).join('')}
                    </div>
                </div>
                <div class="info">
                    <span>${product.category}</span>
                    <h3>${product.name}</h3>
                    <span class="price">${product.price}</span>
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
                    <p>${product.ProductDetails}</p>
                </div>
            </div>
        </div>
        <div class="products our-product">
            <div class="container">
                <div class="header">
                    <h3>Related Products</h3>
                </div>
                <div class="content"></div>
            </div>
        </div>
    `;
    activeImage = document.querySelector('.product .images .active');
    featureProduct = document.querySelector('.our-product .container .content');
}

// Change product color
function changeColor(newImage) {
    activeImage.src = newImage;
}

// Add products to webpage
function addProducts(fileName, locationOfProducts) {
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            allproduct = data;
            const products = document.querySelector(locationOfProducts);
            const filteredProducts = data.filter(product => product.section === fileName);

            if (filteredProducts.length) {
                filteredProducts.forEach(product => {
                    products.innerHTML += `
                        <div class="box">
                            <div class="image">
                                <img src="${product.img}">
                            </div>
                            <div class="stars">
                                ${'<i class="fas fa-star"></i>'.repeat(5)}
                            </div>
                            <p onclick="openProduct(${product.id})" product-id="${product.id}">${product.name}</p>
                            <span>$${product.price}</span>
                            <button>Add to Cart</button>
                        </div>
                    `;
                });
            } else {
                console.log("No products found in this section.");
            }
        })
        .catch(error => console.error('Error fetching product data:', error));
}

// Load products into sections
['shop', 'Featured', 'Dresses', 'Shoes'].forEach(section => {
    addProducts(section, `.${section.toLowerCase()} .content`);
});
