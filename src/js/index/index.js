let d = document;
let b = d.body;
let mC = d.createElement('header');
mC.id = 'menu';
let fB = d.createElement('button');
let fClass = 'font-off';
fB.id = 'font-toggle';
fB.addEventListener('click', evt => {
  b.classList.toggle(fClass);
});
mC.appendChild(fB);
b.appendChild(mC);