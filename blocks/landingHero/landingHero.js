import { createOptimizedPicture } from '../../scripts/aem.js'; 
import { moveInstrumentation } from '../../scripts/scripts.js'; 

export default function decorate(block) { 
    const ul = document.createElement('ul'); 
    const li = document.createElement('li'); 
    ul.appendChild(li);

    // Image handling
    const img = new Image();
    img.src = 'path_to_your_image.jpg'; // Link to the car image
    img.alt = 'Qashqai';
    const optimizedPic = createOptimizedPicture(img.src, img.alt, true, [{ width: '1024' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    const imgWrapper = document.createElement('div');
    imgWrapper.appendChild(optimizedPic);
    imgWrapper.className = 'cards-card-image';

    // Title
    const title = document.createElement('h1');
    title.textContent = 'Qashqai';
    title.className = 'cards-card-title';

    // Pricing and details
    const price = document.createElement('div');
    price.textContent = '£24,398 Starting price';
    const horsepower = document.createElement('div');
    horsepower.textContent = '160 Horsepower';

    // Additional info
    const additionalInfo = document.createElement('div');
    additionalInfo.textContent = 'With its striking style, unmatched versatility...';

    // Characteristics
    const characteristics = document.createElement('div');
    characteristics.innerHTML = '<strong>440-800 Miles per gallon</strong> | <strong>35</strong> | <strong>5-7 Seats</strong>';
    characteristics.className = 'cards-card-attributes';

    // Button
    const button = document.createElement('button');
    button.textContent = 'BOOK A TEST DRIVE';
    button.type = 'button';
    button.className = 'cards-card-button';

    // Append all to li
    li.append(imgWrapper, title, price, horsepower, additionalInfo, characteristics, button);

    block.textContent = ''; // Clear initial content
    block.append(ul); // Append list to the block
}
