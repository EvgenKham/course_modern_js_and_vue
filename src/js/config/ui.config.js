export const UIAuth = {
    formAuth: document.forms['loginForm'],
    inputLoginEmail: document.getElementById('email'),
    inputLoginPassword: document.getElementById('password'),
};

export const UIRegistr = {
    formRegistr: document.forms['registrForm'],
    inputRegistrEmail: document.getElementById('registr-email'),
    inputRegistrPassword: document.getElementById('registr-password'),
    inputNickname: document.getElementById('nickname'),
    inputFirstName: document.getElementById('first-name'),
    inputLastName: document.getElementById('last-name'),
    inputPhone: document.getElementById('phone'),
    inputGender: document.getElementsByName('gender-orientation'),
    inputCity: document.getElementById('city'),
    inputCountry: document.getElementById('country'),
    inputBirthday: document.getElementById('data-of-birthday'),
};