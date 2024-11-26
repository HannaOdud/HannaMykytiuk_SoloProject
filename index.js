let personaCardlDiv = document.getElementById('personal');
personaCardlDiv.style.opacity = 1;

/* Random images of Glasgow citycarousel*/
let images, current_image;

images = ['images/random1.jfif','images/random2.jfif' ,'images/random3.jfif']
let element_image = document.getElementById('carousel-image');
element_image.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  current_image = images.shift();
  images.push(current_image);
  let element_image2 = document.getElementById('carousel-image');
  element_image2.setAttribute("src", images[0]);
});


document.getElementById('previous').addEventListener('click', (event) => {
  current_image = images.pop();
  images.unshift(current_image);
  let element_image3 = document.getElementById('carousel-image');
  element_image3.setAttribute("src", images.slice(-1)[0]);
});