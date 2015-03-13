Meteor.publish('bookmarks', function() {
  return Bookmarks.find();
});

SearchSource.defineSource('bookmarks', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};

  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {name: regExp, url: regExp};
    return Bookmarks.find(selector, options).fetch();
  } else {
    return Bookmarks.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is dumb implementation
  var parts = searchText.trim().split(' ');
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
