var app = angular.module("myApp", []);

app.controller("FrameController", function($scope){
  
  $scope.highlight = function(text){
    //var reg = /^[text.toLowerCase()]/;
    var reg = new RegExp('('+text.toLowerCase()+')');
    node.each(function(d,i){
      d3.select(this).style({"stroke": function(d){return d.isCompany ? "none" : "white"}, "stroke-width": "1px", "stroke-opacity": "1"});
      if (d.isCompany && reg.test(d.name.toLowerCase()) && text !== ""){
        d3.select(this).style({"stroke": "red","stroke-width":"8px", "stroke-opacity": ".5"});
      }
    });
  }

});

