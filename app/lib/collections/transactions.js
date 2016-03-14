Transactions = new Mongo.Collection('transactions');

TransactionSchema = new SimpleSchema({
  date: {
    type: Date,
    defaultValue: new Date()
  },
  description: {
    type: String,
    optional: true
  }
});

Transactions.attachSchema(TransactionSchema);

if (Meteor.isServer) {
  Transactions.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  Transactions.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}
