$(document).ready(function(){
  var randomREl = document.getElementById("#randomR");
  var recipeEl = document.getElementById("#recipeChoice");   
  var musicEl = document.getElementById("#musicChoice");
  
  $("#randomR").on("click", callFunction);
  
  function callFunction() {
    
    getRandomMusic();
    getRecipeRepos();
   
  };

  function getRecipeRepos() {
  
    var requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
        var randomEl = $("<a>").text("YouTube: " + data.meals[0].strYoutube);
        var recipeImg = $("<img>").attr("src", data.meals[0].strMealThumb);
        var recipeSrc = $("<a>").text("" + data.meals[0].strMeal).attr("href", data.meals[0].strSource).attr("target", "_blank");
        var recipeCat = $("<h3>").text("Category: " + data.meals[0].strCategory).attr("header", data.meals[0].strCategory);
        localStorage.setItem("recipe", data.meals[0].strMeal);
        recipeSrc.attr("target", "_blank");
        $("#recipeVid").empty();
        $("#recipeVid").append(randomEl);
        $("#recipeCat").empty();
        $("#recipeCat").append(recipeCat);
        $("#recipeLink").empty();
        $("#recipeLink").append(recipeSrc);
        $("#recipePic").append(recipeImg);
      
      
   }) 

  };

  function getRandomMusic() {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://deezerdevs-deezer.p.rapidapi.com/playlist/908622995",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "2d25421a49msh9521948ccae11a9p147deejsnab4c9aa7d4f2",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
      }
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
    $.ajax(settings).done(function (response) {
      console.log(response.tracks.data[Math.floor(Math.random(40))]);
      var newObj = response.tracks.data[Math.floor(Math.random() * 10)];
      console.log('album', newObj)
      // var title = newObj.title;
      var albumtitle = newObj.album.title
      var artistName = newObj.artist.name
      var link = $('<a>').attr('href', newObj.link).attr('title', 'album link').text(newObj.album.title);
      // var button = $('<div>').val(newObj.album.title)
      var newDiv = $("<div>").addClass("musicDisplay");
      newDiv.append("Album: " + albumtitle);
      $("#musicChoice").empty();
      $("#musicChoice").append(newDiv);
      $("#musicTitle").empty();
      $("#musicTitle").append(link);
      $("#musicArtist").empty();
      $("#musicArtist").append(artistName);

    });
  }


  $('#musicChoice').on('click', 'button', function (e) {
    e.preventDefault()

    var songs = JSON.parse(window.localStorage.getItem("songs")) || [];

    var value = $('#saveBtn').val()
    console.log(value)
    var newSong = {
      value
    }
    songs.push(newSong)
    localStorage.setItem('songs', JSON.stringify(songs))
  })

});

