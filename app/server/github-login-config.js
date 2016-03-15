Meteor.startup(function() {
  // Get github client ID & secret from settings object - see http://docs.meteor.com/#/full/meteor_settings
  if (Meteor.settings && Meteor.settings.github) {
    ServiceConfiguration.configurations.upsert({
      service: "github"
    }, {
      $set: {
        clientId: Meteor.settings.github.clientId,
        loginStyle: "popup",
        secret: Meteor.settings.github.secret
      }
    });
  }
});
