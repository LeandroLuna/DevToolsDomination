const dogs = [{
        name: 'Snickers',
        age: 2
    },
    {
        name: 'Hugo',
        age: 8
    },
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a %s string', '😶‍🌫️');
const variavel = '😶‍🌫️'; // old method
console.log(`Hello. I am a ${variavel} string`);

// Styled
console.log(
    '%c I am a styled console text',
    'font-size: 50px; background: blue; text-shadow: 3px 3px 0 green'
);

// warning!
console.warn('OH NOOOO');

// Error :|
console.error('THATS AN ERROR');

// Info
console.info('A new information arrived!');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ough'), 'That is wrong!'); // Se a condição for falsa, exibirá a mensagem passada no 2o parametro.
p.classList.add('ough');
console.assert(p.classList.contains('ough'), 'That is wrong!'); // Não exibe nenhuma mensagem

// clearing
//console.clear();

// Viewing DOM Elements
console.log(p); // Elemento propriamente dito
console.dir(p); // Visualizar os métodos disponíveis

// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`); // Agrupar as informações no console.log (sem a palavra Collapsed, as informações viram expandidas)
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes'); // Conta quantas vezes uma mesma mensagem se repetiu
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');

// tables
console.table(dogs);

// timing
console.time('fetching data'); // Exibe quanto tempo para ser executada uma função
fetch('https://api.github.com/users/wesbos')
    .then((data) => data.json())
    .then((data) => {
        console.log(data);
        console.timeEnd('fetching data');
    });