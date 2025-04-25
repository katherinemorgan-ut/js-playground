console.log(window);

// // Single element 
// const form = document.getElementById('my-form');
// const querySelector = document.querySelector('h1');


// // Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';