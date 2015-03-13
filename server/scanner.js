Meteor.methods({
  checkurls: function () {
      Bookmarks.find().map(function(item){
          HTTP.get(item.url, function(err,result){
              if(err) {
                  Bookmarks.update(item._id, {$set:{status:false}});
              }
              else {
                  Bookmarks.update(item._id, {$set:{status:true}})
              }
          });
      });
  }
});
