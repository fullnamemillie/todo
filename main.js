const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

btn.addEventListener('click', () => {
    // result.innerHTML += `<li>${input.value}</li>`;
    if (input.value === '') {
        return;
    };
    createAndDeleteElements(input.value);
    input.value = '';

})

function createAndDeleteElements(value) {
    i++;
    console.log(value);

    const li = document.createElement('li');
    li.className = 'li'
    li.textContent = value;

    result.appendChild(li);


    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'add';

    btn.addEventListener('click', () => {
        i--;
        total.textContent = i;
        result.removeChild(li);
    })

    li.appendChild(btn);

    li.addEventListener('click', () => {
        li.classList.toggle('li-active');
    })

    total.textContent = i;
}