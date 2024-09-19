let allproduct = []; // تأكد من تعريف المتغير
let activeImage; // تعريف متغير الصورة النشطة

// وظيفة لإضافة المنتجات إلى الصفحة
function addproducts(fileName, locationOfProducts) {
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            const products = document.querySelector(locationOfProducts);
            allproduct = data;

            data.forEach(product => {
                if (product.section === fileName) {
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
                        </div>`;
                } else {
                    console.log("error: section mismatch");
                }
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

// إضافة المنتجات في الأقسام المختلفة
addproducts('shop', '.shop .content');
addproducts('Featured', '.featured .content');
addproducts('Dresses', '.dresses-jumpsuits .content');
addproducts('Shoes', '.shoes .content');
addproducts('Featured', '.our-product .content');

// وظيفة لفتح تفاصيل المنتج
function openProduct(id) {
    const product = allproduct.find(p => p.id === id);
    if (product) {
        activeProductDetails.innerHTML = `
            <div class="product">
                <div class="container">
                    <div class="images">
                        <img src="${product.img}" class="active">
                        <div class="color-product">
                            ${product.productColors.map((color, index) => `
                                <img src="${color}" onclick="changeColor('${color}')" id="color-${index + 1}">
                            `).join('')}
                        </div>
                    </div>
                    <div class="info">
                        <span>${product.category}</span>
                        <h3>${product.name}</h3>
                        <span class="price">$${product.price}</span>
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
        `;
        activeImage = document.querySelector('.product .images .active'); // إعادة تعيين activeImage
    } else {
        console.error('Product not found:', id);
    }
}

// وظيفة لتغيير لون الصورة النشطة
function changeColor(newImage) {
    if (activeImage) {
        activeImage.src = newImage;
    } else {
        console.error('عنصر الصورة النشط غير موجود:', activeImage);
    }
}
