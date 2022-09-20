console.log('hello');

let title = document.getElementById('title');

let message = 'Welcome to Shinobi world';

console.log(title.innerText);
title.innerText = 'Naruto';

title.innerHTML = `<p>${message}</p>`;

title.style.color = 'orange';