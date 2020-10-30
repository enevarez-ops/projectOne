$(document).ready(function(){
 var randomREl = document.getElementById("#randomR");
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
var randomRecipe = function getRecipeRepos(){
   url: requestUrl
   method: GET 
   .then(function(data){
       console.log(data); 
       var randomBtn = $("<button>")
       randomBtn.addClass("")
   })


}
  
  });