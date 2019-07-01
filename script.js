var app = angular.module('app', ['ngVis']);

app.controller('MainCtrl', ['$scope', 'VisDataSet',

  function($scope, VisDataSet) {

    $scope.onSelect = function(items) {
      // debugger;
      alert('select');
    };

    $scope.onClick = function(props) {
      //debugger;
      alert('Click');
    };

    $scope.onDoubleClick = function(props) {
      // debugger;
      alert('DoubleClick');
    };

    $scope.rightClick = function(props) {
      alert('Right click!');
      props.event.preventDefault();
    };
    
    $scope.options = {
      autoResize: true,
      height: '800',
      width: '100%'
    };
    
    $scope.data = {};
  }
]);
