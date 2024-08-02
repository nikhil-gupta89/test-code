import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'car-feature';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'car-image';
  const img = document.createElement('img');
  img.src = '[IMAGE URL]'; // Replace [IMAGE URL] with actual path
  img.alt = 'Nissan Qashqai on the road';
  const optimizedImage = createOptimizedPicture(img.src, img.alt);
  imageContainer.appendChild(optimizedImage);

  const textContainer = document.createElement('div');
  textContainer.className = 'car-text';

  const heading = document.createElement('h1');
  heading.textContent = 'Qashqai';
  textContainer.appendChild(heading);

  const price = document.createElement('p');
  price.textContent = '£24,398';
  price.className = 'car-price';
  textContainer.appendChild(price);

  const description = document.createElement('p');
  description.textContent = 'With its striking style, unmatched versatility, and dependable performance, it\'s not just an SUV - it\'s a dynamic adventure waiting to happen';
  textContainer.appendChild(description);

  const features = document.createElement('ul');
  features.className = 'car-features';
  const featuresData = ['160 Horsepower', '35 Miles per gallon', '5-7 Seats'];
  featuresData.forEach(feature => {
    let li = document.createElement('li');
    li.textContent = feature;
    features.appendChild(li);
  });
  textContainer.appendChild(features);

  const button = document.createElement('button');
  button.textContent = 'BOOK A TEST DRIVE';
  button.className = 'cta-button';
  textContainer.appendChild(button);

  container.appendChild(imageContainer);
  container.appendChild(textContainer);

  block.textContent = ''; // Clear the content block before appending
  block.appendChild(container);
}
