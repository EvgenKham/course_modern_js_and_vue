import '../css/style.css';
import './plugins';
import locations from "./store/locations";
import favotites from "./store/favorites";
import formUI from './views/form';
import ticketsUI from './views/tickets';
import favUI from './views/favTickets';
import currencyUI from './views/currency';
import favorites from './store/favorites';

// const serchedTickets = [];

document.addEventListener('DOMContentLoaded', () => { 
    const form = formUI.form;
    const container = document.querySelector('.tickets-sections .row');
    let favorite = document.querySelector('.dropdown-content');

    // Events
    initApp();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    container.addEventListener('click', addToFavorite);

    favorite.addEventListener('click', deleteFavoriteTicket);

    // Handlers
    async function initApp() {
        await locations.init();
        formUI.setAutocompleteData(locations.shortCities);
    }

    async function onFormSubmit() {
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue;

        await locations.fetchTickets({
            origin, 
            destination, 
            depart_date, 
            return_date,
            currency,
        });

        ticketsUI.renderTickets(locations.lastSearch);
    }

    function addToFavorite({target}) {
        if(target.classList.contains('add-favorite')){
           const objId = target.dataset.objid;
            const currentTicket = locations.lastSearch[objId];
            const currency = currencyUI.currencyValue;
            favotites.setFavoriteTicket({currentTicket, currency});

            favUI.renderFavotites(favotites.getFavoritesTickets()); 
        }
    }

    function deleteFavoriteTicket({target}) {
        if(target.classList.contains('delete-favorite')){
            const deleteId = target.dataset.objid
            favorites.deleteTicket(deleteId);

            favUI.renderFavotites(favotites.getFavoritesTickets());
        }
    }
})
/**
 *  Домашнее задание по проекту Avia Tickets.
    Реализовать функционал добавления билетов в избранные. У вас должно быть отдельное хранилище (store) для избранных билетов. При клике на кнопу "Add to favorites" объект билета нужно добавлять в хранилище. В шапке есть дропдаун в котором нужно выводить все избранные билеты
 */