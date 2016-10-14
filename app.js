var app = angular.module('app', ['angularMoment', 'ngAnimate']);

app.controller('MainController', function($scope){
  // Set Initial Variables
  $scope.view = {};
  $scope.view.posts = [];
  $scope.view.viewSubmitPost = false;
  $scope.view.sort = 'votes';
  //Create initial dummy data
  $scope.view.posts[0] = {
    title: 'Aspen, CO',
    author: 'Author Here',
    image: 'http://www.aspenchamber.org/sites/default/files/images/AspenSeenFromRedMtn.JeremySwanson.Summer.jpg',
    description: 'Lorem ipsum dolor sit amet, vel id idque velit. Eu pri saepe putent, ad inani fierent quo. Graeco ocurreret consetetur sit et, an natum possit reprimique usu. Blandit insolens comprehensam eam ne, pri sonet laoreet eu.',
    date: Date.parse('Oct 13, 2016 8:00:00'),
    comments: [{
      comment_author: "Comment Author Here",
      comment: "Blah blah blah. "
    }, {
      comment_author: "Comment Author 2 Here",
      comment: "Blah Blah Blah."
    }],
    votes: -3,
    viewComments: false,
    viewSubmitComment: false
  };
  $scope.view.posts[1] = {
    title: 'Who Knows',
    author: 'Author Here',
    image: 'http://efdreams.com/data_images/dreams/mountain/mountain-07.jpg',
    description: 'Lorem ipsum dolor sit amet, vel id idque velit. Eu pri saepe putent, ad inani fierent quo. Graeco ocurreret consetetur sit et, an natum possit reprimique usu. Blandit insolens comprehensam eam ne, pri sonet laoreet eu.',
    date: Date.now(),
    comments: [{
      comment_author: "Comment Author Here",
      comment: "Blah blah blah. "
    }, {
      comment_author: "Comment Author 2 Here",
      comment: "Blah Blah Blah."
    }],
    votes: 2,
    viewComments: false,
    viewSubmitComment: false
  };
  $scope.view.posts[2] = {
    title: 'AAA',
    author: 'Author Here',
    image: 'http://efdreams.com/data_images/dreams/mountain/mountain-07.jpg',
    description: 'Lorem ipsum dolor sit amet, vel id idque velit. Eu pri saepe putent, ad inani fierent quo. Graeco ocurreret consetetur sit et, an natum possit reprimique usu. Blandit insolens comprehensam eam ne, pri sonet laoreet eu.',
    date: Date.parse('Oct 14, 2016 11:12:00'),
    comments: [{
      comment_author: "Comment Author Here",
      comment: "Blah blah blah. "
    }, {
      comment_author: "Comment Author 2 Here",
      comment: "Blah Blah Blah."
    }],
    votes: 5,
    viewComments: false,
    viewSubmitComment: false
  };

  // functions
  $scope.submitPost = function(form){
    $scope.view.posts.push({
      title: $scope.view.title,
      author: $scope.view.author,
      image: $scope.view.image,
      description: $scope.view.description,
      date: Date.now(),
      comments: [],
      votes: 0,
      viewComments: false,
      viewSubmitComment: false
    });
    $scope.toggleSubmitPost();
    form.$setPristine();
    $scope.view.title = '';
    $scope.view.author = '';
    $scope.view.image = '';
    $scope.view.description = '';
  };

  $scope.submitComment = function(post, form){
    post.comments.push({
      comment_author: $scope.view.commentAuthor,
      comment: $scope.view.comment
    });
    $scope.toggleSubmitComment(post);
    post.viewComments = true;
    form.$setPristine();
    $scope.view.commentAuthor = '';
    $scope.view.comment = '';
  };

  $scope.upVote = function(post){
    post.votes++;
  };

  $scope.downVote = function(post){
    post.votes--;
  };

  $scope.toggleSubmitPost = function(){
    $scope.view.viewSubmitPost = !$scope.view.viewSubmitPost;
  };

  $scope.toggleSubmitComment = function(post){
    post.viewSubmitComment = !post.viewSubmitComment;
  };

  $scope.toggleComments = function(post){
    post.viewComments = !post.viewComments;
  };

  $scope.reset = function(){
    $scope.view.viewSubmitPost = false;
    for (var i = 0; i < $scope.view.posts.length; i++) {
      $scope.view.posts[i].viewComments = false;
      $scope.view.posts[i].viewSubmitComment = false;
    }
  };

});
