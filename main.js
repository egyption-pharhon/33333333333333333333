// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// open details of product
let allproduct =[]


function openProduct(id){
	productDelails(id)

	window.open("product.html", "_self")
}
//  change color of product
let activeImage = document.querySelector('.product .images .active')

function changeColor(newImage){
	activeImage.src = newImage
}

function productDelails(id){
	const activeProduct = allproduct[id]

	document.querySelector('.product .images .active').src = activeProduct.img
	document.querySelector('.product .images .color-product #one').src = activeProduct.productColors[0]
	document.querySelector('.product .images .color-product #two').src = activeProduct.productColors[1]
	document.querySelector('.product .images .color-product #three').src = activeProduct.productColors[2]
	document.querySelector('.product .images .color-product #four').src = activeProduct.productColors[3]
	document.querySelector('.product .images .info p').src = activeProduct.ProductDetails
}













