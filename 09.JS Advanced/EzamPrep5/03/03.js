class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const { firstName, lastName, personalId } = customer;//TODO validation
        if (this.allCustomers.some(x => x.firstName == firstName && x.lastName == lastName)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        customer.totalMoney = Number(0);
        customer.transactions = [];
        this.allCustomers.push(customer);
        return {firstName, lastName, personalId};//TODO check output format
    }

    depositMoney(personalId, amount) {//TODO input Type validation
        const customer = this._validateCustomer(personalId);

        customer.totalMoney += Number(amount);

        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        return `${customer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        const customer = this._validateCustomer(personalId);

        if (customer.totalMoney < Number(amount)) { // TODO check undefined validation
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= Number(amount);

        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        return `${customer.totalMoney}$`
    }

    customerInfo(personalId) {
        const customer = this._validateCustomer(personalId);

        const transactionInfoString = customer.transactions.map((x, i) => `${i +1}. ${x}`).reverse().join('\n')
        return `Bank name: ${this.bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${customer.personalId}\nTotal Money: ${customer.totalMoney}$\nTransactions:\n${transactionInfoString}`

    }

    _validateCustomer(personalId){
        const customer = this.allCustomers.find(x => x.personalId == personalId);
        if (customer == undefined) {
            throw new Error(`We have no customer with this ID!`);
        }

        return customer;
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
