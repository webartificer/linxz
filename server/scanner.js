Meteor.methods({
  checkurls: function () {
      Bookmarks.find({userId:Meteor.userId()}).map(function(item){
          console.log(item.url);
          try{
          HTTP.get(item.url, {
              headers: {
                  "User-Agent": "Meteor/1.0"
              }
          },function(error,result){

              if(!error) {
                  Bookmarks.update(item._id, {$set:{status:true}});
              }
              else {
                  console.log(item.url,error);
                  Bookmarks.update(item._id, {$set:{status:false}});
              }
          });}catch(e){
              Bookmarks.update(item._id, {$set:{status:false}});
          }
      });
  }

});
