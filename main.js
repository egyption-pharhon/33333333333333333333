// open list items @ media 767px
function openNavList() {
    let navlist = document.querySelector('nav');
    navlist.classList.toggle("show");
}

// open details of product
let allproduct = [];

function openProduct(id) {
    productDetails(id);
    // window.open("product.html", "_self");
}

// change color of product
let activeImage = document.querySelector('.product .images .active');

function changeColor(newImage) {
    if (activeImage) {
        activeImage.src = newImage;
    } else {
        console.error('Active image element not found');
    }
}

const activeOne = document.querySelector('.product .images .color-product #one');
const activeTwo = document.querySelector('.product .images .color-product #two');
const activeThree = document.querySelector('.product .images .color-product #three');
const activeFour = document.querySelector('.product .images .color-product #four');
const activeDetails = document.querySelector('.product .images .info p');

function productDetails(id) {
    const activeProduct = allproduct[id];
console.error(activeOne.src);
console.error(activeProduct.img);
console.error(activeTwo.src);
console.error(activeProduct.productColors[0]);
    if (activeProduct) {
        if (activeImage) {
            activeImage.src = activeProduct.img;
        }

        if (activeOne) {
            activeOne.src = activeProduct.productColors[0];
            
        }

        if (activeTwo) {
            activeTwo.src = activeProduct.productColors[1];
        }

        if (activeThree) {
            activeThree.src = activeProduct.productColors[2];
        }

        if (activeFour) {
            activeFour.src = activeProduct.productColors[3];
        }

        if (activeDetails) {
            activeDetails.textContent = activeProduct.ProductDetails; // استخدام textContent بدلاً من src
        } else {
            console.error('Active details element not found');
        }
    } else {
        console.error('Active product not found for ID:', id);
    }
}
