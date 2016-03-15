// Global API configuration
var Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

// Generates: GET, POST on /api/products and GET, PUT, DELETE on
// /api/products/:id for the Products collection
Api.addCollection(Products, {
  endpoints: ['get', 'getAll']
});

Api.addCollection(People, {
  endpoints: ['get', 'getAll']
});

Api.addCollection(Transactions, {
  endpoints: ['get', 'getAll']
});
