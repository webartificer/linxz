Template.bookmarksList.helpers({
    bookmarks: function() {
        return Bookmarks.find().fetch();
    },

    ownPost: function() {
      return this.userId === Meteor.userId();
    },
});
