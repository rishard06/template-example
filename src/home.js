export function Home() {
    const divContent = document.querySelector('#content');

    const description = document.createElement('div');
    description.classList.add('description');

    const para1 = document.createElement('p');
    para1.textContent = "Welcome to Filipino Restaurant, where we bring the heart of the Philippines to your plate! Our restaurant is a celebration of Filipino culture and cuisine, offering a wide variety of traditional dishes that capture the rich flavors and vibrant spirit of the Philippines. From savory adobo and crispy lechon to fresh lumpia and hearty sinigang, each dish is crafted with authentic ingredients and time-honored recipes. Whether you’re craving the comfort of classic Filipino favorites or exploring new culinary delights, our warm and inviting atmosphere makes Filipino Restaurant the perfect place to savor the taste of home. Join us and experience the warmth of Filipino hospitality in every bite!";
    const des1 = document.createElement('h2');
    des1.textContent = "Description"

    const para2 = document.createElement('p');
    para2.textContent = "We are open 24 hours a day, six days a week! Whether you're craving a hearty breakfast, a satisfying lunch, or a late-night feast, we're here to serve you with the rich flavors of the Philippines anytime you need.";
    const des2 = document.createElement('h2');
    des2.textContent = "Hours";

    const para3 = document.createElement('p');
    para3.textContent = "123 Forest Drive, Forestville, Maine";
    const des3 = document.createElement('h2');
    des3.textContent = "Location";

    description.appendChild(des1);
    description.appendChild(para1);
    description.appendChild(des2);
    description.appendChild(para2);
    description.appendChild(des3);
    description.appendChild(para3);
    divContent.appendChild(description);
}