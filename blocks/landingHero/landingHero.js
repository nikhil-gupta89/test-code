export default function decorate(block) {
    const imgSrc = 'path_to_your_image.jpg'; // Path to the car image
    const imgAlt = 'Qashqai'; // Alt text for the image
    const container = document.createElement('div');
    container.className = 'car-block';
  
    const picture = createOptimizedPicture(imgSrc, imgAlt, true, [{ width: '1024' }]);
    container.appendChild(picture);
  
    const content = document.createElement('div');
    content.className = 'car-content';
  
    const title = document.createElement('h1');
    title.innerText = 'Qashqai';
    content.appendChild(title);
  
    const description = document.createElement('p');
    description.innerText = 'With its striking style, unmatched versatility, and dependable performance, it\'s not just an SUV - it\'s a dynamic adventure waiting to happen';
    content.appendChild(description);
  
    const price = document.createElement('p');
    price.innerText = '£24,398 - Starting price';
    content.appendChild(price);
  
    const horsepower = document.createElement('p');
    horsepower.innerText = '160 Horsepower';
    content.appendChild(horsepower);
  
    const efficiency = document.createElement('p');
    efficiency.innerText = '35 Miles per gallon';
    content.appendChild(efficiency);
  
    const seating = document.createElement('p');
    seating.innerText = 'Seats 5-7';
    content.appendChild(seating);
  
    const button = document.createElement('button');
    button.innerText = 'Book a Test Drive';
    button.className = 'cta-button';
    content.appendChild(button);
  
    container.appendChild(content);
    block.appendChild(container);
  }