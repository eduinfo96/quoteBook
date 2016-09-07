angular.module( 'myApp' ).controller( 'myController', function($scope, myService){

$scope.quotes = myService.getData();

$scope.deleteMe = function(textToDelete){
  myService.removeData(textToDelete);
}

$scope.addQuote = function(text, author){
  var newQuote = {
    text: text,
    author: author
  }

  if(myService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}
} )
