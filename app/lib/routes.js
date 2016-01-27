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
