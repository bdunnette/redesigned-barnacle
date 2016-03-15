/*****************************************************************************/
/* Transactions: Event Handlers */
/*****************************************************************************/
Template.Transactions.events({
  'click .new-transaction': function(event, template) {
    Transactions.insert({}, function(error, transactionId) {
      Router.go('/transaction/' + transactionId + '/edit')
    });
  }
});

/*****************************************************************************/
/* Transactions: Helpers */
/*****************************************************************************/
Template.Transactions.helpers({
  tableSettings: function() {
    return {
      collection: Transactions,
      rowsPerPage: 20,
      showFilter: true,
      fields: [{
        key: 'date',
        label: 'Date',
        tmpl: Template.transactionDate,
        sortOrder: 1,
        sortDirection: -1
      }, {
        key: 'description',
        label: 'Description'
      }, {
        key: 'customer',
        label: 'Customer'
      }]
    };
  }
});

/*****************************************************************************/
/* Transactions: Lifecycle Hooks */
/*****************************************************************************/
Template.Transactions.onCreated(function() {});

Template.Transactions.onRendered(function() {});

Template.Transactions.onDestroyed(function() {});
