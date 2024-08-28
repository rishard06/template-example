export function About() {
    const divContent = document.querySelector('#content');

    const description = document.createElement('div');
    description.classList.add('description');

    const des1 = document.createElement('h2');
    des1.textContent = "Contact Us"
    
    const para1 = document.createElement('p');
    para1.textContent = `Chef:  555-555-5554 totallyRealEmail@notFake.com`;

    const para2 = document.createElement('p');
    para2.textContent = `Manager 555-555-5555 perfectlyRealEmail@notFake.com`;

    const para3 = document.createElement('p');
    para3.textContent = `Waiter 555-555-5556 totallyRealEmail@notFake.com`;

    description.appendChild(des1);
    description.appendChild(para1);
    description.appendChild(para2);
    description.appendChild(para3);
    divContent.appendChild(description);
}