Template.counter.helpers({
    goodCount: function() {
        return Bookmarks.find({status:true}).count();
    },
    badCount: function() {
        return Bookmarks.find({status:false}).count();
    },
    totalCount: function() {
        return Bookmarks.find().count();
    },
});

Template.counter.events({
    'click .verify': function(e) {
        Meteor.call('checkurls');
      }
});
