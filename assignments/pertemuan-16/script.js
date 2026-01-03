const calculator = document.querySelector('.calculator');

calculator.addEventListener('submit', (event) => {
  event.preventDefault();

  const angka1 = Number(document.querySelector('#angka1').value);
  const angka2 = Number(document.querySelector('#angka2').value);
  const operator = document.querySelector('#operator').value;

  const operasi = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const hasilLama = calculator.querySelector('.hasil');
  if (hasilLama) {
    hasilLama.remove();
  }

  const hasil = operasi[operator](angka1, angka2);

  const elementHasil = document.createElement('p');
  elementHasil.className = 'hasil';
  elementHasil.textContent = `Hasil: ${hasil}`;

  calculator.appendChild(elementHasil);
});
