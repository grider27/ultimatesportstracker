$(document).ready(function(){
    //get api to display nfl team when user hover over "nfl" on nav bar
    function nflDisplay() {

        //create var from api link 
        var requestNflUrl = "https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=c92709fa7d9a4261bf1ee17785767b5b";
      
        //fetch data to use
        fetch(requestNflUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(nflData){
            console.log(nflData);

            
            //loop data to generate all team info
            for (var i =0 ; i< nflData.length; i++){

                //create a div to hold team name btn and img
                var nflDiv = $("<div>")

                //generate img url from api
                var imgUrl = nflData[i].WikipediaLogoUrl

                //create img tag to hold url 
                var teamImg= $("<img>").attr({"id": "teamImg", "src": imgUrl})

                //create team btn and attach name to button 
                var teamBtn =$("<button>").attr("id", "teamBtn").text(nflData[i].Name)

                //attach img to nflDiv
                nflDiv.append(teamImg)
                //attach btn to nflDiv
                nflDiv.append(teamBtn)

                //attach  nflDiv to li-nfl
                $(".nflTeam").append(nflDiv)




            }
        })

    }

nflDisplay();

}) 