Template.header.events({
//   'click .searchPrimary': function () {
//     EasySearch
//       .getComponentInstance({ index: 'bookmarks' })
//       .search(Session.get('_id'))
//     //   .search("primary")
//     ;
// },

'change .filter-select': function(e) {
      var instance = EasySearch.getComponentInstance({
        index: 'bookmarks',
      });

      EasySearch.changeProperty('bookmarks', 'filteredCategory', $(e.target).val());
      instance.triggerSearch();
    },


});
