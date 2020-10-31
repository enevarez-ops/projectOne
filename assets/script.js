
<<<<<<< HEAD
$(document).ready(function () {




});
=======
$(document).ready(function(){
 var randomREl = document.getElementById("#randomR");
    
function getRecipeRepos() {
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
     var randomBtn = $("<button>").text(data.strMeal + data.strInstructions)
       $("#recipeCard").append(randomBtn);
      
   })


}
  
  });
  $("#randomR").on("click", getRecipeRepos);
>>>>>>> 60165a0e9f3f527956fabf0ea1b0459be2e529b8
