Template.bookmarksList.helpers({
    bookmarks: function() {
        return Bookmarks.find().fetch().reverse();
    },

    ownPost: function() {
      return this.userId === Meteor.userId();
    },
});


// Template.bookmarksList.helpers({
//   bookmarks: function() {
//     return BookmarkSearch.getData({
//       transform: function(matchText, regExp) {
//         return matchText.replace(regExp, "<b>$&</b>");
//       },
//       sort: {isoScore: -1}
//     });
//   }
// });
