let d = document;
let b = d.body;
let fontBtn = d.createElement('button');
let fClass = 'font-off';
fontBtn.id = 'font-toggle';

fontBtn.addEventListener('click', evt => {
  if (b.className.indexOf(fClass) > -1) {
    b.className.replace(fClass, '');
  } else {
    b.className = b.className + ' ' + fClass;
  }

  b.classList.toggle(fClass);
});

b.appendChild(fontBtn);