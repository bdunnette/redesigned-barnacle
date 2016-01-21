


Meteor.publish('volunteers', function () {
  return Volunteers.find();
});

Meteor.publish('product', function () {
  return Product.find();
});

Meteor.publish('products', function () {
  return Products.find();
});