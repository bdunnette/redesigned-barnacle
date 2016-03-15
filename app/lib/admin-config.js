AdminConfig = {
  collections: {
    People: {
      icon: 'user',
      color:'blue'
    },
    Products: {
      icon: 'laptop',
      // omitFields: ['updatedAt'],
      tableColumns: [{
          label: 'Name',
          name: 'name'
        }, {
          label: 'List Price',
          name: 'listPrice'
        }, {
          label: 'Taxable',
          name: 'taxable'
        }],
        // showEditColumn: true, // Set to false to hide the edit button. True by default.
        // showDelColumn: true, // Set to false to hide the edit button. True by default.
        // showWidget: true,
        color: 'red'
    },
    Transactions: {
      icon: 'shopping-basket',
      tableColumns: [{
        label: 'Date',
        name: 'date'
      }],
      color:'green'
    },
    Taxes: {
      icon: 'bank',
      tableColumns: [{
        label: 'Start Date',
        name: 'startDate'
      }, {
        label: 'End Date',
        name: 'endDate'
      }, {
        label: 'Amount',
        name: 'amount'
      }],
      color: 'yellow'
    }
  }
};

if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    if (!user.emails) {
      user.emails = [];
    }

    Object.keys(user.services).forEach(function(key) {
      switch (key) {
        case 'github':
          // Copy emails from github profile to user.emails
          user.services.github.emails.forEach(function(email) {
            user.emails.push({
              address: email.email,
              verified: email.verified,
              primary: email.primary
            })
          });
          break;
        default:
          user.services[key].emails.forEach(function(email) {
            user.emails.push(email)
          });
      }
    })
    return user;
  });
}
