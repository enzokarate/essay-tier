window.onload = function() {
  document.querySelector('#greeting').innerText =
    'Hello, World! It is ' + new Date();
  document.querySelector('#greeting2').innerText = ' Boo!' + Math.random();
};
