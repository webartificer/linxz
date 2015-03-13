Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('bookmarks'); }
});

Router.route('/', {name: 'bookmarksList'});


// VIEW ROUTE
Router.route('/bookmarks/:_id', {
    name: 'bookmarkPage',
    data: function() { return Bookmarks.findOne(this.params._id); }
});

// EDIT ROUTE
Router.route('/bookmarks/:_id/edit', {
  name: 'bookmarkEdit',
  data: function() { return Bookmarks.findOne(this.params._id); }
});

Router.route('/submit', {name: 'bookmarkSubmit'});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            // this.render('accessDenied');
            this.render('landingPage');
        }
    } else {
    this.next();
    }
};

Router.onBeforeAction('dataNotFound', {only: 'bookmarkPage'});
Router.onBeforeAction(requireLogin, {except: ['landingpage']});
// Router.onBeforeAction(requireLogin, {only: 'bookmarkSubmit'});
