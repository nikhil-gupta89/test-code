import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  
  const pictureWrap = document.createElement('div');
  pictureWrap.className = 'cards-card-image';
  const imgSrc = 'path_to_your_image.jpg'; // Replace this path with the actual image source path
  const optimizedPic = createOptimizedPicture(imgSrc, 'Dynamic image of Nissan Qashqai', true, [{ width: '750' }]);
  pictureWrap.append(optimizedPic);

  const bodyWrap = document.createElement('div');
  bodyWrap.className = 'cards-card-body';
  
  const modelName = document.createElement('h2');
  modelName.textContent = 'Qashqai';
  
  const description = document.createElement('p');
  description.textContent = 'With its striking style, unmatched versatility, and dependable performance, it\'s not just an SUV - it\'s a dynamic adventure waiting to happen';
  
  const price = document.createElement('p');
  price.textContent = '£24,398 Starting price';
  
  const horsepower = document.createElement('p');
  horsepower.textContent = '160 Horsepower';
  
  const mileage = document.createElement('p');
  mileage.textContent = '35 Miles per gallon';
  
  const seats = document.createElement('p');
  seats.textContent = '5-7 Seats';
  
  const button = document.createElement('button');
  button.textContent = 'BOOK A TEST DRIVE';
  button.className = 'test-drive-button';
  
  bodyWrap.appendChild(modelName);
  bodyWrap.appendChild(description);
  bodyWrap.appendChild(price);
  bodyWrap.appendChild(horsepower);
  bodyWrap.appendChild(mileage);
  bodyWrap.appendChild(seats);
  bodyWrap.appendChild(button);

  li.appendChild(pictureWrap);
  li.appendChild(bodyWrap);
  ul.appendChild(li);

  block.textContent = ''; // Clear existing content
  block.append(ul);
}
