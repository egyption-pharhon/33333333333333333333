// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// open details of product
let allproduct =[]


function openProduct(id){
	productDelails(id);
	openwindow();
}
//  change color of product
let activeImage = document.querySelector('.product .images .active')

function changeColor(newImage){
	activeImage.src = newImage
}
function openwindow(){
		// window.open("product.html", "_self")
}

const containerOfProductPage = document.querySelector('.product-details')

function productDelails(id){
	const activeProduct = allproduct[id]

console.log(containerOfProductPage)
}




