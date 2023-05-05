 // Store form data in Local Storage
 function storeFormData() {
  const name = document.querySelector('#name').value;
  const address = document.querySelector('#address').value;
  const email = document.querySelector('#email').value;
  const comments = document.querySelector('#comments').value;
  const data = {
    name: name,
    address: address,
    email: email,
    comments: comments,
  };
  localStorage.setItem('formData', JSON.stringify(data));
};

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  storeFormData();
  alert("Data has been saved to Local Storage.");
  form.reset();
});

//login
function login() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const data = {
    username: username,
    password: password
  };
  localStorage.setItem('formData', JSON.stringify(data));
  window.location.href="cv.html";
};






