/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  'click .capture': function() {
    MeteorCamera.getPicture({
      width: 192,
      height: 192
    }, function(error, data) {
      console.log(data);
      Session.set('photo', data);
    });
  },

  'click .save-profile-photo': function() {
    console.log(Session.get('photo'));
    var user = Meteor.users.findOne({
      "emails.address": "brian@dunnette.us"
    });
    console.log(user);
    var newFile = new FS.File(Session.get('photo'));
    newFile.metadata = {
      user: user._id
    };
    Images.insert(newFile, function(err, fileObj) {
      //If !err, we have inserted new doc with ID fileObj._id, and
      //kicked off the data upload using HTTP
      console.log(err);
      console.log(fileObj);
    });
  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  'photo': function() {
    return Session.get('photo');
  },
  'userPhoto': function(userId){
    var userPhoto = Images.findOne({"metadata.user":userId});
    console.log(userPhoto);
    return userPhoto.url();
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function() {});

Template.Home.onRendered(function() {});

Template.Home.onDestroyed(function() {});
