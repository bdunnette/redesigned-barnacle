AdminConfig = {
  collections: {
    Products: {}
  }
};

if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    if (!user.emails) {
      user.emails = []
    };
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
