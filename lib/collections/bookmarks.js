Bookmarks = new Mongo.Collection('bookmarks');
Bookmarks.initEasySearch(['title', 'url','tags'], {
    'limit' : 200,
    'use' : 'minimongo',
    'sort': function() {
        return { 'timestamp': -1};
    },
    'query' : function (searchString, opts) {
    // Default query that is used for searching
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    // this contains all the configuration specified above
    query.userId = Meteor.userId();
    console.log(query);
    return query;
  }

});


Bookmarks.allow({
  update: function(userId, bookmark) { return (userId, bookmark); },
  remove: function(userId, bookmark) { return (userId, bookmark); },
});

Bookmarks.deny({
  update: function(userId, bookmark, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title', 'status', 'tags', 'blue').length > 0);
  }
});

Bookmarks.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
    return !! userId;

    },

});
