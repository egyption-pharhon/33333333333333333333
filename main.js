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
	const activeOne = document.querySelector('.product .images .color-product #one')
	const activeTwo = document.querySelector('.product .images .color-product #two')
const activeThree = document.querySelector('.product .images .color-product #three')
	const activeFour = document.querySelector('.product .images .color-product #four')
	const activeDetails = document.querySelector('.product .images .info p')
function productDelails(id){
	const activeProduct = allproduct[id]

	activeImage.src = activeProduct.img

	activeOne.src = activeProduct.productColors[0]

	activeTwo.src = activeProduct.productColors[1]
	
	activeThree.src = activeProduct.productColors[2]

	activeFour.src = activeProduct.productColors[3]

	activeDetails.src = activeProduct.ProductDetails
}













