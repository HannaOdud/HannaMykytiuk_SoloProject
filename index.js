let personaCardlDiv = document.getElementById('personal');
personaCardlDiv.style.opacity = 1;

/* Random images of Glasgow citycarousel*/
let images, current_image;

images = ['images/random1.jfif','images/random2.jfif' ,'images/random3.jfif']
let element_image = document.getElementById('carousel-image');
element_image.setAttribute("src", images[0]);
current_image = images[0];


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images.shift());
  current_image = images[0];
  let element_image2 = document.getElementById('carousel-image');
  element_image2.setAttribute("src", current_image);
});


document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.pop());
  current_image = images[0];
  let element_image3 = document.getElementById('carousel-image');
  element_image3.setAttribute("src", current_image);
});