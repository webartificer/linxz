Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});


var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['name', 'url'];

BookmarkSearch = new SearchSource('bookmarks', fields, options);
