Blogs = new Mongo.Collection('blog');

if (Meteor.isClient) {
  Template.main.helpers({
    blogs: function(){
      return Blogs.find();
    }
  })
}

if (Meteor.isServer) {
}
