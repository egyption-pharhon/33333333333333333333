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

let activeOne = document.querySelector('#farag .container .images .color-product #one');
let activeTwo = document.querySelector('#farag .container .images .color-product #two');
let activeThree = document.querySelector('#farag .container .images .color-product #three');
let activeFour = document.querySelector('#farag .container .images .color-product #four');
let activeDetails = document.querySelector('#farag .container .images .info p');

function productDetails(id) {
    const activeProduct = allproduct[id];
console.log(activeOne);
console.log(activeProduct);
console.log(activeTwo);
console.log(activeProduct);
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
