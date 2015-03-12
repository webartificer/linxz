Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('bookmarks'); }
});

Router.route('/', {name: 'bookmarksList'});
Router.route('/bookmarks/:_id', {
  name: 'bookmarkPage',
  data: function() { return Bookmarks.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'bookmarkPage'});
