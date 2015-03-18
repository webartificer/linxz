Template.bookmarkEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentBookmarkId = this._id;

    var bookmarkProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      tags: $('input.tagPicker:checkbox:checked').map(function() {
          return this.value;
        }).get(),

  };

    Bookmarks.update(currentBookmarkId, {$set: bookmarkProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('bookmarksList', {_id: currentBookmarkId});
        Meteor.call('checkurls');
      }
    });
  },


  'click .delete': function(e) {
    e.preventDefault();
    if (confirm("Delete this Bookmark?")) {
      var currentBookmarkId = this._id;
      Bookmarks.remove(currentBookmarkId);
      Router.go('bookmarksList');
    }
},





});
