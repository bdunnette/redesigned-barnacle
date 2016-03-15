Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('transactions', {
  name: 'transactions',
  controller: 'TransactionsController',
  where: 'client'
});

Router.route('transaction/:transactionId/edit', {
  name: 'transactionEdit',
  controller: 'TransactionEditController',
  where: 'client'
});
