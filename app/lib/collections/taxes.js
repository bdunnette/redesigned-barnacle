Taxes = new Mongo.Collection('taxes');

TaxSchema = new SimpleSchema({
  startDate: {
    type: Date
  },
  endDate: {
    type: Date,
    optional: true
  },
  amount:{
    type: Number,
    decimal: true,
    // defaultValue: 0.0775,
    // Ensure that tax percentage is greater than 0
    min: 0,
    exclusiveMin: true
  },
  description: {
    type: String,
    optional: true
  }
});

Taxes.attachSchema(TaxSchema);

if (Meteor.isServer) {
  Taxes.allow({
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

  Taxes.deny({
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
}
