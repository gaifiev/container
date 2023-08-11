// ****** Задача необязательная для выполнения:

// Это расширенная версия задачи с банком, которую мы решлали на семинаре:

// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

class Bank {
  constructor(nameBank) {
    this.nameBank = nameBank;
    this.listClients = [];
    this.listAccount = [];
  }

  addNewClient(clientName) {
    this.listClients.push(clientName);
    this.listAccount.push([]);
  }

  openNewAccount(clientName, initialBalance) {
    const clientIndex = this.listClients.indexOf(clientName);
    const accountNumber = this.listAccount[clientIndex].length + 1;
    this.listAccount[clientIndex].push({ accountNumber, balance: initialBalance });
  }

  deposit(clientName, accountNumber, amount) {
    const clientIndex = this.listClients.indexOf(clientName);
    const account = this.listAccount[clientIndex][accountNumber - 1];
    account.balance += amount;
  }

  withdraw(clientName, accountNumber, amount) {
    const clientIndex = this.listClients.indexOf(clientName);
    const account = this.listAccount[clientIndex][accountNumber - 1];
    if (account.balance >= amount) {
      account.balance -= amount;
    } else {
      console.log("Insufficient funds in account!");
    }
  }

  checkBalance(clientName, accountNumber) {
    const clientIndex = this.listClients.indexOf(clientName);
    const account = this.listAccount[clientIndex][accountNumber - 1];
    return account.balance;

  }
}

// Пример использования класса "Банк"
const bank = new Bank("Мой банк");

bank.addNewClient("Vitaly");
bank.openNewAccount("Vitaly", 1000);
bank.deposit("Vitaly", 1, 500);
bank.withdraw("Vitaly", 1, 100);
console.log("Vitaly Balance:", bank.checkBalance("Vitaly", 1));

bank.addNewClient("Juli");
bank.openNewAccount("Juli", 1500);
bank.deposit("Juli", 1, 200);
bank.withdraw("Juli", 1, 13300);
console.log("Juli Balance:", bank.checkBalance("Juli", 1));