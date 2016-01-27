var ImageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
  stores: [ImageStore],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});

if (Meteor.isServer) {
  Images.allow({
    insert: function(userId, doc) {
      return true;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function(userId, doc) {
      return true;
    },

    download: function(userId, fileObj) {
      return true;
    }
  });

  Images.deny({
    insert: function(userId, doc) {
      return false;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function(userId, doc) {
      return false;
    },
    download: function(userId, fileObj) {
      return false;
    }
  });
}
