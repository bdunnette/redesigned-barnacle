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

Router.route('product', {
  name: 'product',
  controller: 'ProductController',
  where: 'client'
});

Router.route('products', {
  name: 'products',
  controller: 'ProductsController',
  where: 'client'
});


Router.route('taxes', {
  name: 'taxes',
  controller: 'TaxesController',
  where: 'client'
});

Router.route('transactions', {
  name: 'transactions',
  controller: 'TransactionsController',
  where: 'client'
});