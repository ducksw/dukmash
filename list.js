import { image } from './images.js'

var box = document.getElementById('box')
var all = document.getElementById('box')

all.innerHTML = `<b>Total: </b> ${image.length}`
image.reverse()
for (let i = 0; i < image.length; i++) {
  box.innerHTML += `
    <table>
      <tr>
        <td><b>${image[i].name}</b></td>
        <td><img class="image" id="image" src="${image[i].src}"></td>
      </tr>
    </table>
  `
}

window.onload = function() {
  let img = document.getElementsByClassName('image');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
      openImage(this.src)
    });
  }
};

function openImage(src) {
  window.open(src, "_self");
}