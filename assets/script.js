$(document).ready(function(){
  var randomREl = document.getElementById("#randomR");
  var recipeEl = document.getElementById("#recipeChoice");   
  var musicEl = document.getElementById("#musicChoice");
  
  $("#randomR").on("click", callFunction);
  
  function callFunction() {
    console.log("inside callFunction");
    getRandomMusic();
    getRecipeRepos();
  }

  function getRecipeRepos() {
  console.log('inside getRecipeRepos')
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
     var randomEl = $("<div>").text(data.meals[0].strMeal + data.meals[0].strInstructions + data.meals[0].strSource)
        $("#recipeChoice").append(randomEl);
      
   })

  }

//var songArry = ["lose yourself", "other song"]
//function getsRandomSong() {s
  // get a random song title from Song array

  //then call call getRandomMusic("Lose Yourself")

function getRandomMusic() {
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "748a15681fmshbba4031511d91cep19839fjsnbcb11ed54479"
}})
.then(response => {
	return response.json()
})
.then(function(data) {
  console.log(data)
})
.catch(err => {
	console.log(err);

      var randomMusicEl = text("Your song: " + data[0].title + " " + data[0].link);
      $("#musicChoice").append(randomMusicEl);
    });
  }

  });

//   $("#randomR").on("click", callFunction);

