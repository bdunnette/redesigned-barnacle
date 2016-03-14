var defaultTax = {
  startDate: "2010-01-01",
  endDate: "2020-12-31",
  amount: 0.0775
};

var defaultProducts = [{
  name: "Desktop",
  listPrice: 40
}, {
  name: "Laptop",
  listPrice: 80
}];

Meteor.startup(function() {
  if (Taxes.find().count() === 0) {
    Taxes.insert(defaultTax);
  }
  if (Products.find().count() === 0) {
    defaultProducts.forEach(function(product) {
      Products.insert(product);
    });
  }
});
