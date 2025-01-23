import { image } from './images.js'

function random_image() {
  let res = document.getElementById('res')
  let res2 = document.getElementById('res2')
  let box_image = document.getElementById('box-image')
  let box = document.getElementById('box')

  let random1 = Math.floor(Math.random() * image.length)
  let random2 = Math.floor(Math.random() * image.length)

  while (random2 === random1) {
    random2 = Math.floor(Math.random() * image.length)
  }

  let img1 = image[random1]
  let img2 = image[random2]

  res.innerHTML = img1.name
  res2.innerHTML = img2.name
  box_image.src = img1.src
  box.src = img2.src
}
random_image()

function clicked_image(click) {
	let res = document.getElementById('res');
	let res2 = document.getElementById('res2');
	let box_image = document.getElementById('box-image')
	let box = document.getElementById('box')
	let otra_image 

	if (click.id === 'box-image') {
		otra_image = box
	} else {
		otra_image = box_image
	}

	let indexx = parseInt(otra_image.dataset.index)
	let newImage = Math.floor(Math.random() * image.length)

	let pasint_index = parseInt(click.dataset.index)

	while (newImage === indexx || newImage === pasint_index) {
		newImage = Math.floor(Math.random() * image.length)
	}

	otra_image.src = image[newImage].src
	otra_image.dataset.index = newImage

	let box_image_index = parseInt(box_image.dataset.index)
	let box_index = parseInt(box.dataset.index)

	if (image[box_image_index] && image[box_image_index]) {
		res.innerHTML = image[box_image_index].name
		box_image.name =  image[box_image_index].name
	}

	if (image[box_index] && image[box_index].name) {
		res2.innerHTML = image[box_index].name
		box.name = image[box_index].name
	}

	if (image[pasint_index]) {
		image[pasint_index].cont++
	}
	win()
}

function win() {
	let max_click = 0
	let ganador = null
	let img = null
	let view = ""

	let modal = document.getElementById('modal')
	let win = document.getElementById('win')

	for (let i = 0; i < image.length; i++) {
    if (image[i].cont > max_click) {
      max_click = image[i].cont
      ganador = image[i].name
      img = image[i].src
    }
	}

	console.log(ganador, max_click)

	if (max_click === 5) {
		console.log(`ganador: ${ganador} ${max_click}`)
		modal.style.display = "flex"
		view += `<img id="image_modal" src="${img}"><br/> <b id="name_win">${ganador}</b>`
		win.innerHTML = view
	} 
}

function salir() {
	let modal = document.getElementById('modal')
	modal.style.display = "none"
	location.reload()
}

function data_index() {
	let rand_index = Math.floor(Math.random() * image.length)
	let box_image = document.getElementById('box-image')
	let box = document.getElementById('box')
	let res = document.getElementById('res');
	let res2 = document.getElementById('res2');
	let rand_index2 

	do {
		rand_index2 = Math.floor(Math.random() * image.length)
	} while (rand_index === rand_index2)

	box_image.dataset.index = rand_index
	box.dataset.index = rand_index2

	box_image.src = image[rand_index].src;
	box.src = image[rand_index2].src;

	res.innerHTML = image[rand_index].name
	res2.innerHTML = image[rand_index2].name
}
window.onload = data_index()

// ***** CAMBIAR IMAGEN CUANDO HACES CLICK *****

document.getElementById('box-image').addEventListener('click', function() {
	clicked_image(this);
});

document.getElementById('box').addEventListener('click', function() {
	clicked_image(this);
});

document.getElementById('btn_win').addEventListener('click', function() {
	salir()
});
