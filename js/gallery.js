const flowers = [
  { name: 'pink', alt: 'Pink Flower' },
  { name: 'purple', alt: 'Purple Flower' },
  { name: 'red', alt: 'Red Flower' },
  { name: 'white', alt: 'White Flower' },
  { name: 'yellow', alt: 'Yellow Flower' },
  { name: 'blue', alt: 'Blue Flower' },
  { name: 'green', alt: 'Green Flower' },
  { name: 'orange', alt: 'Orange Flower' }
];

const figcaption = document.querySelector('figcaption');
function selectedFlower(flower, caption){
  const img = document.querySelector('.displayImage');
  img.src = `images/flowers-${flower}.jpg`;
  figcaption.innerText = caption;
}

const thumbnails = document.querySelector('.thumbnails');
flowers.forEach(e => {
  let li = document.createElement('li');
  li.innerHTML = `<img onclick="selectedFlower('${e.name}', '${e.alt}')" src="images/flowers-${e.name}.jpg" alt="${e.alt}" width="240" height="160" />`;
  thumbnails.appendChild(li);
});