Meteor.publish('product', function() {
  return Product.find();
});

Meteor.publish('products', function() {
  return Products.find();
});

Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish('userData', function() {
  return Meteor.users.find({}, {
    fields: {
      'profile': 1,
      'emails': 1,
      'roles': 1,
      'services.twitter.profile_image_url_https': 1,
      'services.facebook.id': 1,
      'services.google.picture': 1,
      'services.github.username': 1,
      'services.instagram.profile_picture': 1,
      'services.linkedin.pictureUrl': 1
    }
  });
});


Meteor.publish('taxes', function () {
  return Taxes.find();
});

Meteor.publish('transactions', function () {
  return Transactions.find();
});