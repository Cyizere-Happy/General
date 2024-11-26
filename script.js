const container = document.querySelector('.container');
const RegisterBtn = document.querySelector('.register-btn');
const LoginBtn = document.querySelector('.login-btn');
 
RegisterBtn.addEventListener('click', () => {
    container.classList.add('active');
})
LoginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})