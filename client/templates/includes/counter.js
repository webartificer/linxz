Template.counter.helpers({
    goodCount: function() {
        return Bookmarks.find({status:true, userId:Meteor.userId()}).count();
    },
    badCount: function() {
        return Bookmarks.find({status:false, userId:Meteor.userId()}).count();
    },
    totalCount: function() {
        return Bookmarks.find({userId:Meteor.userId()}).count();
    },
});

Template.counter.events({
    'click .verify': function(e) {
        Meteor.call('checkurls');
      }
});
