var bookmarksData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    tags: 'example',
    timestamp: Date.now()
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com',
    tags: 'example',
    timestamp: Date.now()
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    tags: 'example',
    timestamp: Date.now()
  }
];
Template.bookmarksList.helpers({
  bookmarks: bookmarksData
});
