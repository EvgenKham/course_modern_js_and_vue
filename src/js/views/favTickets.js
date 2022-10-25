import currencyUI from './currency';

class FavotitesUI {
    constructor(currency) {
        this.container = document.querySelector('.dropdown-content');
        this.currency = currency;
    }

    getСontainer() {
      return this.container;
   }
    
    renderFavotites(tickets) {
      this.clearContainer();

      if(!tickets.length) {
        this.showEmptyMsg();
        return;
      }
      
      let idTicket = 0;
      let fragment = '';

      tickets.forEach(ticket => {
        const currency = this.currency.getSymbolByCurrency(ticket.currency);
        const template = FavotitesUI.favoriteTemplate(ticket, currency, idTicket);
        fragment += template;
        idTicket++;
      });

      this.container.insertAdjacentHTML('afterbegin', fragment);
    }

    clearContainer() {
      this.container.innerHTML = '';
  }

    showEmptyMsg() {
        const template = FavotitesUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML('afterbegin', template);
    }

    static emptyMsgTemplate() {
        return `
          <div class="favorites-empty-msg">
            У вас нет избранных билетов!
          </div>
        `;
    }

    static favoriteTemplate(ticket, currency, id) {
        return `
            <div class="favorite-item  d-flex align-items-start">
                <img
                  src="${ticket.airline_logo}"
                  class="favorite-item-airline-img"
                />
                <div class="favorite-item-info d-flex flex-column">
                  <div
                    class="favorite-item-destination d-flex align-items-center"
                  >
                    <div class="d-flex align-items-center mr-auto">
                      <span class="favorite-item-city">${ticket.origin_name}</span>
                      <i class="medium material-icons">flight_takeoff</i>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="medium material-icons">flight_land</i>
                      <span class="favorite-item-city">${ticket.destination_name}</span>
                    </div>
                  </div>
                  <div class="ticket-time-price d-flex align-items-center">
                    <span class="ticket-time-departure">${ticket.departure_at}</span>
                    <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
                  </div>
                  <div class="ticket-additional-info">
                    <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
                    <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
                  </div>
                  <a
                    class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto"
                    data-objid="${id}"
                    >Delete</a
                  >
                </div>
              </div>
        `;
    }
}

const favUI = new FavotitesUI(currencyUI);

export default favUI;
