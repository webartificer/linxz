Bookmarks = new Mongo.Collection('bookmarks');


Bookmarks.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
    return !! userId;

    },

});
