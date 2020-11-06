$(document).ready(function(){
  var randomREl = document.getElementById("#randomR");
  var recipeEl = document.getElementById("#recipeChoice");   
  var musicEl = document.getElementById("#musicChoice");
  
  $("#randomR").on("click", callFunction);
  
  function callFunction() {
    //console.log("inside callFunction");
    getRandomMusic();
    getRecipeRepos();
   
  }

  function getRecipeRepos() {
  //console.log('inside getRecipeRepos')
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
     var randomEl = $("<a>").text("YouTube: " + data.meals[0].strYoutube);
        $("#recipeChoice").append(randomEl);
        var recipeImg = $("<img>").attr("src", data.meals[0].strMealThumb);
        var recipeSrc = $("<a>").text("" + data.meals[0].strMeal).attr("href", data.meals[0].strSource).attr("target", "_blank");
        var recipeCat = $("<h3>").text("Category: " + data.meals[0].strCategory).attr("header", data.meals[0].strCategory);
        //targeting a new page with link
         recipeSrc.attr("target", "_blank");
        $("#recipePic").append(recipeImg);
        $("#recipeLink").append(recipeSrc);
        $("#recipeCat").append(recipeCat);
        // $("#recipePic").empty();
        // $("#recipeLink").empty();
        // $("#recipeChoice").empty();
      
   }) //add category and ingredients to .then 

  }

//var songArry = ["lose yourself", "other song"]
//function getsRandomSong() {s
  // get a random song title from Song array

  //then call call getRandomMusic("Lose Yourself")




  function getRandomMusic() {
fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist//us/playlist/1363560485", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "748a15681fmshbba4031511d91cep19839fjsnbcb11ed54479"
}})
.then(response => {
  console.log(response);

  return response.json();
  
})
.then(function(data) {
  // console.log(data.data[Math.floor(Math.random() * 10)]);
  // var newObj = data.data[Math.floor(Math.random() * 10)];
  // var title = newObj.title;
  // var artist = newObj.artist.name;
  // var img = $("<img>").attr("src", newObj.album.cover);
  // var newDiv = $("<div>").addClass("musicDisplay");
  // newDiv.append(title, artist, img);
  // $("#musicChoice").append(newDiv);
})
}

});
  
  
  
  
  // for (i = 0; i <  data.length; i++){
  // var randomMusicEl = $("<div>").text("Your song: " + data[i].artist.name + " " + data[i].link);
  // $("#musicChoice").append(randomMusicEl);
//}


//music button appending
// var musicList = ["https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", "https://deezerdevs-deezer.p.rapidapi.com/search?q=shakira", "https://deezerdevs-deezer.p.rapidapi.com/search?q=jurrasicfive"];
// for (var i = 0; i< musicList.length; i++) {
//   var artistList = musicList[i];
//   console.log(musicList[i]);
//   artistList.text(musicList[i]);
//   $("#musicButton").append(artistList);
// }

//try catch then error if it does not hit the api
// .catch(err => {
// 	console.log(err);

      // var randomMusicEl = $("<div>").text("Your song: " + data[0].artist.name + " " + data[0].link);
      // $("musicChoice").append(randomMusicEl);
    // });
