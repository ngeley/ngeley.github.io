function getQuery(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function getdataSeries(series){
	for(val in seriesList){
		var item = seriesList[val];
		if (item.name == series){
			document.getElementById("name").innerHTML = item.name;
			document.getElementById("name1").innerHTML = item.name;
			$("#series-img").attr("src", item.picUrl);
			document.getElementById("description").innerHTML = item.description;
			document.getElementById("yearsActive").innerHTML = item.yearsActive;
			document.getElementById("runtime").innerHTML = item.runtime;
			document.getElementById("genre").innerHTML = item.genre;
			for(val1 in seriesList){
			var srs = seriesList[val1];
			if (srs.name == series){
				for(i in srs.platforms){
				document.getElementById("platforms").insertAdjacentHTML('beforeend', "<a href=networkentity.html?name=" +srs.platforms[i]+ "</a>" + srs.platforms[i] + "<br>");
				}
			}
		}
			var list = [] 
			for(episode in episodeList){
				if (episodeList[episode].series == series){
					var season = episodeList[episode].season
					var episode_n = episodeList[episode].episode
					list += episodeList[episode].name

				}
			}
			document.getElementById("episodes").innerHTML = list;
			// Will need to fix with multiple episodes per series
			$("#episode-link").attr("href", "episodeentity.html?series=" + item.name);
		}
	}
}
// Need to fix this when multiple episodes per series
function getdataEpisode(series){

	for(val in episodeList){

		var item = episodeList[val];
		if (item.series == series){ // This line will need to be changed
			document.getElementById("name").innerHTML = item.name;
			document.getElementById("name1").innerHTML = item.name;
			$("#series-img").attr("src", item.picUrl);
			document.getElementById("description").innerHTML = item.description;
			document.getElementById("airDate").innerHTML = item.airdate;
			document.getElementById("director").innerHTML = item.director;
			document.getElementById("writer").innerHTML = item.writer;
			document.getElementById("info").innerHTML = item.season + item.episode;
			document.getElementById("series").innerHTML = item.series;
		for(val1 in seriesList){
			var srs = seriesList[val1];
			if (srs.name == series){
				for(i in srs.platforms){
				document.getElementById("platforms").insertAdjacentHTML('beforeend', "<a href=networkentity.html?name=" +srs.platforms[i]+ "</a>" + srs.platforms[i] + "<br>");
				}
			}
		}
		}
	}
}
