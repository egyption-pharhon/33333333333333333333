// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

let allproduct ={}


function openProduct(id){
	console.log(id)
	console.log(allproduct)
	// window.open("product.html", "_self")
}
//  change color of product
let activeImage = document.querySelector('.product .images .active')

function changeColor(newImage){
	activeImage.src = newImage
}















