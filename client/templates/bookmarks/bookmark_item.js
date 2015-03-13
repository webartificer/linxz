Template.bookmarkItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    ownBookmark: function() {
      return this.userId === Meteor.userId();
    },



});
Template.bookmarkItem.events({
    'click .bookmarkDelete': function(e) {
        var currentBookmarkId = this._id;
        Bookmarks.remove(currentBookmarkId);
        Router.go('bookmarksList');
      }
})
