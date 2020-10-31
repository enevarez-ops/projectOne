$(document).ready(function(){
  var randomREl = document.getElementById("#randomR");
  var recipeEl = document.getElementById("#recipeCard")   
  $("#randomR").on("click", getRecipeRepos);
function getRecipeRepos() {
  console.log('inside getRecipeRepos')
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
     var randomEl = $("<div>").text(data.meals[0].strMeal + data.meals[0].strInstructions)
        $("#recipeCard").append(randomEl);
      
   })


}
   
  });
  

