Meteor.publish('products', function() {
  return Products.find();
});

Meteor.publish('taxes', function () {
  return Taxes.find();
});

Meteor.publish('transactions', function () {
  return Transactions.find();
});

Meteor.publish('transaction', function (transactionId) {
  check(transactionId, String);
  return [Transactions.find({_id: transactionId}), Taxes.find(), People.find()];
});

Meteor.publish('people', function () {
  return People.find();
});
