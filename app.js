var app = angular.module('app', []);

app.controller('MainController', function($scope){
  $scope.view = {};
  $scope.view.name = "Jaimie";
  $scope.view.posts = [];
  $scope.view.posts[0] = {
    title: 'Aspen, CO',
    author: 'Author Here',
    image: 'http://www.aspenchamber.org/sites/default/files/images/AspenSeenFromRedMtn.JeremySwanson.Summer.jpg',
    description: 'Lorem ipsum dolor sit amet, vel id idque velit. Eu pri saepe putent, ad inani fierent quo. Graeco ocurreret consetetur sit et, an natum possit reprimique usu. Blandit insolens comprehensam eam ne, pri sonet laoreet eu.',
    time: Date.now(),
    comments: [{
      comment_author: "Comment Author Here",
      comment: "Blah blah blah. "
    }, {
      comment_author: "Comment Author 2 Here",
      comment: "Blah Blah Blah."
    }],
    votes: 0
  };
    $scope.submitPost = function(){
    $scope.view.posts.push({
      title: $scope.view.title,
      author: $scope.view.author,
      image: $scope.view.image,
      description: $scope.view.description,
      time: Date.now(),
      comments: [],
      votes: 0
    });
  };

  // functions
  $scope.upVote = function(index){
    $scope.view.posts[index].votes++;
  };

  $scope.downVote = function(index){
    $scope.view.posts[index].votes--;
  };
});
