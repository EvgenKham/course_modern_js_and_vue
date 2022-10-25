class Favorites {
    constructor(){
        this.allFavoritesTickets = [];
    }

    getFavoritesTickets() {
        return this.allFavoritesTickets;
    }

    setFavoriteTicket(ticket) {
        //Если такой билет уже есть, не добавляет его в избранные билеты
        const data = this.serializeFavotiteTicket(ticket);
        if(this.isUnique(data)){
            this.allFavoritesTickets.push(data);
        }
    }

    isUnique(ticket){
        let unique = true;

        this.allFavoritesTickets.forEach(currentTicket => {
            if(JSON.stringify(currentTicket) === JSON.stringify(ticket)){               
                unique = false;      
            } 
        })
        return unique;
    }

    serializeFavotiteTicket(ticket){  
        return {
            origin_name: ticket.currentTicket.origin_name,
            destination_name: ticket.currentTicket.destination_name,
            airline_logo: ticket.currentTicket.airline_logo,
            departure_at: ticket.currentTicket.departure_at,
            return_at: ticket.currentTicket.return_at,
            currency: ticket.currency,
            price: ticket.currentTicket.price,
            transfers: ticket.currentTicket.transfers,
            flight_number: ticket.currentTicket.flight_number,
        };
    }

    deleteTicket(id) {
        this.allFavoritesTickets.splice(id, 1);
    }
}

const favorites = new Favorites();

export default favorites;
