import { image } from "./images.js";

var btn = document.getElementById('btn')
var exit = document.getElementById('exit')

function remove(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function search() {
  let input = document.getElementById('input').value
  let res = document.getElementById('res')
  let modal = document.getElementById('modal')
  let input_modify = remove(input.trim().toLocaleLowerCase())
  let add  = ""
  let detected 

  image.forEach(img => {
    let image_name = remove(img.name.trim().toLocaleLowerCase())
    if (input_modify == image_name) {
      add += `<h1>${image_name}</h1><br/<br/> <img id="image_res" src=${img.src}>`
      res.innerHTML = add
      detected = true
      modal.style.display = "flex"
    }
  })

  if (!detected) {
    alert("no hay")
  }
}

function salir() {
  let modal = document.getElementById('modal')
  let input = document.getElementById('input').value = ""
  modal.style.display = "none"
}

exit.addEventListener('click', salir)
btn.addEventListener('click', search)

document.getElementById('input').addEventListener('keypress', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode === 13) {
    search();
  }
});
