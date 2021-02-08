// materialize functions for drop downs and card accordian. 
$(".dropdown-trigger").dropdown({
    coverTrigger: false,
    closeOnClick: false,
    //   inDuration: 300,
    //   outDuration: 225,
    //   constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    //   alignment: 'right', // Displays dropdown with edge aligned to the left of button
    //   stopPropagation: false // Stops event propagation
});


$(document).ready(function () {

$('.collapsible').collapsible();

  document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, options);
  });

    //vh get api to display NFL team when user hover over "NFL" on nav bar
    function nflDisplay() {

        //vh create var from api link 
        var requestNflUrl = "https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=c92709fa7d9a4261bf1ee17785767b5b";

        //vh fetch data to use
        fetch(requestNflUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (nflData) {
                console.log(nflData);

                //vh loop data to generate all team info group 1
                for (var i = 1; i < 9; i++) {
                    //vh03
                    // if (i === 0 || i === 25 || i === 36 ) break;
                    //vh create a div to hold team name btn and img with class to check img size in css 
                    // var nflDiv = $("<div>").attr("id", "nflDiv")

                    //vh03
                    var nflDiv = $("<li>").addClass("collection-item avatar").attr("id", "nflItem")


                    //vh generate img url from api
                    var imgUrl = nflData[i].WikipediaLogoUrl

                    //vh create img tag to hold url 
                    var teamImg = $("<img>").attr({ "id": "teamImg", "src": imgUrl }).addClass("circle")

                    //vh create team btn and attach name to button // gary change: added key as well
                    var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name).attr("keyId", nflData[i].Key) //var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name)

                    //vh attach img to nflDiv
                    nflDiv.append(teamImg)
                    //vh attach btn to nflDiv
                    nflDiv.append(teamSpan)

                    //vh attach nflDiv to li-nfl
                    // $("#NFL").append(nflDiv)

                    //vh03
                    $(".group1").append(nflDiv)


                }

                // vh020621 group 2
                for (var i = 9; i < 17; i++) {
                    //vh03
                    // if (i === 0 || i === 25 || i === 36 ) break;
                    //vh create a div to hold team name btn and img with class to check img size in css 
                    // var nflDiv = $("<div>").attr("id", "nflDiv")

                    //vh03
                    var nflDiv = $("<li>").addClass("collection-item avatar").attr("id", "nflItem")


                    //vh generate img url from api
                    var imgUrl = nflData[i].WikipediaLogoUrl

                    //vh create img tag to hold url 
                    var teamImg = $("<img>").attr({ "id": "teamImg", "src": imgUrl }).addClass("circle")

                    //vh create team btn and attach name to button // gary change: added key as well
                    var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name).attr("keyId", nflData[i].Key) //var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name)

                    //vh attach img to nflDiv
                    nflDiv.append(teamImg)
                    //vh attach btn to nflDiv
                    nflDiv.append(teamSpan)

                    //vh attach nflDiv to li-nfl
                    // $("#NFL").append(nflDiv)

                    //vh03
                    $(".group2").append(nflDiv)
                }

                // vh020621 group 3
                for (var i = 17; i < 28; i++) {
                    //vh03
                    if (i === 19 || i === 20 || i === 25) { continue };
                    //vh create a div to hold team name btn and img with class to check img size in css 
                    // var nflDiv = $("<div>").attr("id", "nflDiv")

                    //vh03
                    var nflDiv = $("<li>").addClass("collection-item avatar").attr("id", "nflItem")


                    //vh generate img url from api
                    var imgUrl = nflData[i].WikipediaLogoUrl

                    //vh create img tag to hold url 
                    var teamImg = $("<img>").attr({ "id": "teamImg", "src": imgUrl }).addClass("circle")

                    //vh create team btn and attach name to button // gary change: added key as well
                    var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name).attr("keyId", nflData[i].Key) //var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name)


                    //vh attach img to nflDiv
                    nflDiv.append(teamImg)
                    //vh attach btn to nflDiv
                    nflDiv.append(teamSpan)

                    //vh attach nflDiv to li-nfl
                    // $("#NFL").append(nflDiv)

                    //vh03
                    $(".group3").append(nflDiv)
                }

                // vh020621 group 4
                for (var i = 28; i < 37; i++) {
                    //vh03
                    if (i === 30) { continue; }
                    //vh create a div to hold team name btn and img with class to check img size in css 
                    // var nflDiv = $("<div>").attr("id", "nflDiv")

                    //vh03
                    var nflDiv = $("<li>").addClass("collection-item avatar").attr("id", "nflItem")


                    //vh generate img url from api
                    var imgUrl = nflData[i].WikipediaLogoUrl

                    //vh create img tag to hold url 
                    var teamImg = $("<img>").attr({ "id": "teamImg", "src": imgUrl }).addClass("circle")

                    //vh create team btn and attach name to button // gary change: added key as well
                    var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name).attr("keyId", nflData[i].Key) //var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name)

                    //vh attach img to nflDiv
                    nflDiv.append(teamImg)
                    //vh attach btn to nflDiv
                    nflDiv.append(teamSpan)

                    //vh attach nflDiv to li-nfl
                    // $("#NFL").append(nflDiv)

                    //vh03
                    $(".group4").append(nflDiv)
                }
            })



    }

    nflDisplay();

    // vh020621 get api to display NBA team when user hover over NBA on navbar 

//    function nbaDisplay() {

//         //vh create var from api link 
//         var requestNflUrl = "https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=ae840c1a34fe4e84bd31aefb540743c6";

//         //vh fetch data to use
//         fetch(requestNflUrl)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (nflData) {
//                 console.log(nflData);


//                 //vh loop data to generate all team info group 1
//                 for (var i = 1; i < 9; i++) {
//                     //vh03
//                     // if (i === 0 || i === 25 || i === 36 ) break;
//                     //vh create a div to hold team name btn and img with class to check img size in css 
//                     // var nflDiv = $("<div>").attr("id", "nflDiv")

//                     //vh03
//                     var nflDiv = $("<li>").addClass("collection-item avatar").attr("id", "nflItem")


//                     //vh generate img url from api
//                     var imgUrl = nflData[i].WikipediaLogoUrl

//                     //vh create img tag to hold url 
//                     var teamImg = $("<img>").attr({ "id": "teamImg", "src": imgUrl }).addClass("circle")


//                     //vh create team btn and attach name to button 
//                     var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name)

//                     //vh attach img to nflDiv
//                     nflDiv.append(teamImg)
//                     //vh attach btn to nflDiv
//                     nflDiv.append(teamSpan)

//                     //vh attach nflDiv to li-nfl
//                     // $("#NFL").append(nflDiv)

//                     //vh03
//                     $(".group1").append(nflDiv)


//                 }

//                 // vh020621 group 2
//                 for (var i = 9; i < 17; i++) {
//                     //vh03
//                     // if (i === 0 || i === 25 || i === 36 ) break;
//                     //vh create a div to hold team name btn and img with class to check img size in css 
//                     // var nflDiv = $("<div>").attr("id", "nflDiv")

//                     //vh03
//                     var nflDiv = $("<li>").addClass("collection-item avatar").attr("id", "nflItem")


//                     //vh generate img url from api
//                     var imgUrl = nflData[i].WikipediaLogoUrl

//                     //vh create img tag to hold url 
//                     var teamImg = $("<img>").attr({ "id": "teamImg", "src": imgUrl }).addClass("circle")

//                     //vh create team btn and attach name to button 
//                     var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name)

//                     //vh attach img to nflDiv
//                     nflDiv.append(teamImg)
//                     //vh attach btn to nflDiv
//                     nflDiv.append(teamSpan)

//                     //vh attach nflDiv to li-nfl
//                     // $("#NFL").append(nflDiv)

//                     //vh03
//                     $(".group2").append(nflDiv)
//                 }

//                 // vh020621 group 3
//                 for (var i = 17; i < 28; i++) {
//                     //vh03
//                     if (i === 19 || i === 20 || i === 25) { continue };
//                     //vh create a div to hold team name btn and img with class to check img size in css 
//                     // var nflDiv = $("<div>").attr("id", "nflDiv")

//                     //vh03
//                     var nflDiv = $("<li>").addClass("collection-item avatar").attr("id", "nflItem")


//                     //vh generate img url from api
//                     var imgUrl = nflData[i].WikipediaLogoUrl

//                     //vh create img tag to hold url 
//                     var teamImg = $("<img>").attr({ "id": "teamImg", "src": imgUrl }).addClass("circle")

//                     //vh create team btn and attach name to button 
//                     var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name)

//                     //vh attach img to nflDiv
//                     nflDiv.append(teamImg)
//                     //vh attach btn to nflDiv
//                     nflDiv.append(teamSpan)

//                     //vh attach nflDiv to li-nfl
//                     // $("#NFL").append(nflDiv)

//                     //vh03
//                     $(".group3").append(nflDiv)
//                 }

//                 // vh020621 group 4
//                 for (var i = 28; i < 37; i++) {
//                     //vh03
//                     if (i === 30) { continue; }
//                     //vh create a div to hold team name btn and img with class to check img size in css 
//                     // var nflDiv = $("<div>").attr("id", "nflDiv")

//                     //vh03
//                     var nflDiv = $("<li>").addClass("collection-item avatar").attr("id", "nflItem")


//                     //vh generate img url from api
//                     var imgUrl = nflData[i].WikipediaLogoUrl

//                     //vh create img tag to hold url 
//                     var teamImg = $("<img>").attr({ "id": "teamImg", "src": imgUrl }).addClass("circle")

//                     //vh create team btn and attach name to button 
//                     var teamSpan = $("<span>").attr("TeamID", nflData[i].TeamID).addClass("title").text(nflData[i].Name)

//                     //vh attach img to nflDiv
//                     nflDiv.append(teamImg)
//                     //vh attach btn to nflDiv
//                     nflDiv.append(teamSpan)

//                     //vh attach nflDiv to li-nfl
//                     // $("#NFL").append(nflDiv)

//                     //vh03
//                     $(".group4").append(nflDiv)
//                 }
//             })



//     }

//     nbaDisplay();












});

