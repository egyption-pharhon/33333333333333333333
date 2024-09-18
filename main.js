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

const active = document.querySelector('.product .images .active')
	active.src = activeProduct.img
	const activeOne = document.querySelector('.product .images .color-product #one')
	activeOne.src = activeProduct.productColors[0]
	const activeTwo = document.querySelector('.product .images .color-product #two')
	activeTwo.src = activeProduct.productColors[1]
	const activeThree = document.querySelector('.product .images .color-product #three')
	activeThree.src = activeProduct.productColors[2]
	const activeFour = document.querySelector('.product .images .color-product #four')
	activeFour.src = activeProduct.productColors[3]
	const activeDetails = document.querySelector('.product .images .info p')
	activeDetails.src = activeProduct.ProductDetails
}













