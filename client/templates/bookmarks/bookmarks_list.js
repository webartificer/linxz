Template.bookmarksList.helpers({
    bookmarks: function() {
        return Bookmarks.find({userId:Meteor.userId()}).fetch();
    },

    ownPost: function() {
      return this.userId === Meteor.userId();
    },
});
