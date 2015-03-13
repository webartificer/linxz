Template.bookmarkSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var bookmark = {
        url: $(e.target).find('[name=url]').val(),
        title: $(e.target).find('[name=title]').val(),
        tags: $('input.tagPicker:checkbox:checked').map(function() {
            return this.value;
        }).get(),
        timestamp: new Date()
    };


        bookmark._id = Bookmarks.insert(bookmark);
        Router.go('bookmarksList', bookmark);
    }




});
