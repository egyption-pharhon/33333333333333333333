// فتح قائمة العناصر عند حجم الشاشة 767 بكسل
function openNavList() {
    const navlist = document.querySelector('nav');
    navlist.classList.toggle("show");
}

// مصفوفة لتخزين جميع المنتجات
let allProduct = [];

// فتح تفاصيل المنتج


// تغيير لون المنتج



// عناصر الألوان
let activeOne = document.querySelector('#farag .container .images .color-product #one');
let activeTwo = document.querySelector('#farag .container .images .color-product #two');
let activeThree = document.querySelector('#farag .container .images .color-product #three');
let activeFour = document.querySelector('#farag .container .images .color-product #four');
let activeDetails = document.querySelector('#farag .container .images .info p');
let activeProductDetails = document.querySelector('.contentOfPage');

let activeImage = document.querySelector('.product .images .active');

function changeColor(newImage) {
    if (activeImage) {
        activeImage.src = newImage;
    } else {
        console.error('عنصر الصورة النشط غير موجود');
    }
}
