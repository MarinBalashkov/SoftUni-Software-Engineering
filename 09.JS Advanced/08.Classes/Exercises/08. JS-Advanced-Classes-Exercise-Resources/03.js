function solve(arr, criteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.status = status;
            this.price = price
        }
    }
    function convertToTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status)
    }

    const sortTicketAlg = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a -b,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return arr
    .map(line => line.split('|'))
    .map(convertToTicket)
    .sort(sortTicketAlg[criteria])
}


console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))