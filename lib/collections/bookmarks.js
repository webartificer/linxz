Bookmarks = new Mongo.Collection('bookmarks');

Bookmarks.allow({
  update: function(userId, bookmark) { return (userId, bookmark); },
  remove: function(userId, bookmark) { return (userId, bookmark); },
});

Bookmarks.deny({
  update: function(userId, bookmark, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title', 'status', 'tags').length > 0);
  }
});

Bookmarks.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
    return !! userId;

    },

});
