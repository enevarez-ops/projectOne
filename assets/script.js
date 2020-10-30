    $(document).ready(function () {


        var getRandomRec = function () {
            var requestURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
            $.ajax({
                url: requestURL,
                method: "GET",
              }).then(function (data) {



                console.log(requestURL)
               });
  