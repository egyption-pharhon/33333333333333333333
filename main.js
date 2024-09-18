// فتح قائمة العناصر عند حجم الشاشة 767 بكسل
function openNavList() {
    const navlist = document.querySelector('nav');
    navlist.classList.toggle("show");
}

// مصفوفة لتخزين جميع المنتجات
let allProduct = [];

// فتح تفاصيل المنتج
function openProduct(id) {
      setTimeout(function() {
            
            productDetails(id);
        }, 2000);
        openw()
      
}

// تغيير لون المنتج
let activeImage = document.querySelector('.product .images .active');

function changeColor(newImage) {
    if (activeImage) {
        activeImage.src = newImage;
    } else {
        console.error('عنصر الصورة النشط غير موجود');
    }
}

// عناصر الألوان
let activeOne = document.querySelector('#farag .container .images .color-product #one');
let activeTwo = document.querySelector('#farag .container .images .color-product #two');
let activeThree = document.querySelector('#farag .container .images .color-product #three');
let activeFour = document.querySelector('#farag .container .images .color-product #four');
let activeDetails = document.querySelector('#farag .container .images .info p');

function productDetails(id) {
    const activeProduct = allProduct[id];
    if (!activeProduct) {
        console.error('المنتج غير موجود');
        return;
    }

    // تحديث تفاصيل المنتج
    activeImage.src = activeProduct.img;

    activeOne.src = activeProduct.productColors[0];
    activeTwo.src = activeProduct.productColors[1];
    activeThree.src = activeProduct.productColors[2];
    activeFour.src = activeProduct.productColors[3];
    activeDetails.textContent = activeProduct.ProductDetails; // استخدام textContent
}

// دالة إضافية لفتح شيء آخر
function openw() {
    // إضافة أي كود ترغب فيه هنا
    window.open("product.html", "_self");
}
