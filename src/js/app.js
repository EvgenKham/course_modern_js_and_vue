import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import { validate } from './helpers/validate';
import { UIAuth, UIRegistr } from './config/ui.config';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify} from './views/notifications';
import { getNews } from './services/news.service';

// Login: denis.m.pcspace@gmail.com
// Password: dmgame12345
// Project Authentication/Registration

const navbar = document.querySelector('.navbar');
const tabPanel = document.querySelector('.tab-content');

const { formAuth, inputLoginEmail, inputLoginPassword } = UIAuth;
const inputsLogin = [inputLoginEmail, inputLoginPassword];
const { 
    formRegistr, 
    inputRegistrEmail, 
    inputRegistrPassword, 
    inputFirstName, 
    inputLastName, 
    inputNickname,
    inputPhone,
    inputGender,
    inputCity,
    inputCountry,
    inputBirthday
 } = UIRegistr;
const inputsRegistr = [
    inputRegistrEmail, 
    inputRegistrPassword, 
    inputFirstName, 
    inputLastName, 
    inputNickname,
    inputPhone,
    inputGender,
    inputCity,
    inputCountry,
    inputBirthday
];

// Events
navbar.addEventListener('click', onShowForm);

formAuth.addEventListener('submit', e => {
    e.preventDefault();
    onSubmitLogin(); 
});
inputsLogin.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

formRegistr.addEventListener('submit', e => {
    e.preventDefault();
    onSubmitRegistr();
});
inputsRegistr.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// Handlers
async function onSubmitLogin() {
    const isValidForm = inputsLogin.every(el => {
        const isValidInput = validate(el);
        if(!isValidInput){
            showInputError(el);
        }
        return isValidInput;
    });

    if(!isValidForm) return;

    try {
        await login(inputLoginEmail.value, inputLoginPassword.value);
        await getNews();
        formAuth.reset();
        notify({ msg: 'Login success', className: 'alert-success'});
    } catch(err) {
        notify({ msg: 'Login faild', className: 'alert-danger'})
    }
}

// Определяем кнопку в навигаторе, на которой произошло событие и делаем ее активной.
// Берем ее 'id', который совпадает с арибутом 'aria-labelledby' в табе и делаем его активным
function onShowForm({ target }) {
    const buttons = document.querySelectorAll('.nav-link');
    const currentButton = target.classList.contains('nav-link');
    let currentBtnId = null;

    if(currentButton) {
        buttons.forEach( btn => btn.classList.remove('active') );
        target.classList.add('active');
        currentBtnId = target.getAttribute('id');
    };

    [...tabPanel.children].forEach(tab => { 
        tab.classList.remove('show');
        tab.classList.remove('active');
        if(tab.getAttribute('aria-labelledby') === currentBtnId){
            tab.classList.add('show');
            tab.classList.add('active');
        }
    });
}

async function onSubmitRegistr () {
    const isValidForm = inputsRegistr.every( el => {
        const isValidInput = validate(el);
        if(!isValidInput){
            showInputError(el);
        }
        return isValidInput;
    });
}