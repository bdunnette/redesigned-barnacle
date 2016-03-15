Transactions = new Mongo.Collection('transactions');

TransactionSchema = new SimpleSchema({
  date: {
    type: Date,
    defaultValue: new Date()
  },
  customerId: {
    type: String,
    optional: true,
    autoform: {
      options: function() {
        return People.find().map(function(person) {
          return {
            label: person.name,
            value: person._id
          };
        });
      }
    }
  },
  description: {
    type: String,
    optional: true
  }
});

Transactions.attachSchema(TransactionSchema);

Transactions.helpers({
  customer() {
    return People.findOne(this.customerId);
  }
});

if (Meteor.isServer) {
  Transactions.allow({
    insert: function(userId, doc) {
      return true;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function(userId, doc) {
      return true;
    }
  });

  Transactions.deny({
    insert: function(userId, doc) {
      return false;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function(userId, doc) {
      return false;
    }
  });
}
