/*
function getQuery(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
*/

function getdataSeries(series){
	for(val in seriesList){
		var item = seriesList[val];
		if (item.name === series){
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
				var linker = srs.platforms[i];
				var linker2 = linker.replace(" ", "%20");
				document.getElementById("platforms").insertAdjacentHTML('beforeend', "<a href=/networkentity.html/" +linker2+ "/>" +srs.platforms[i]+ "</a>" + "<br>");
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
			$("#episode-link").attr("href", "/episodeentity.html/" +list+ "/");
		}
		}
	}


function getdataEpisode(episode){

	for(val in episodeList){
		var item = episodeList[val];
		if (item.name === episode){ 
			document.getElementById("name").innerHTML = item.name;
			document.getElementById("name1").innerHTML = item.name;
			$("#series-img").attr("src", item.picUrl);
			document.getElementById("description").innerHTML = item.description;
			document.getElementById("airDate").innerHTML = item.airdate;
			document.getElementById("director").innerHTML = item.director;
			document.getElementById("writer").innerHTML = item.writer;
			var series = item.series;
			var linker = series.split(' ').join('%20');
			document.getElementById("series").insertAdjacentHTML('beforeend', "<a href=/seriesentity.html/" +linker+ ">" +series+ "</a>" + "<br>");
			document.getElementById("info").innerHTML = item.season + item.episode;
		for(val1 in seriesList){
			var srs = seriesList[val1];
			if (srs.name == series){
				for(i in srs.platforms){
				var linker = srs.platforms[i];
				var linker2 = linker.replace(" ", "%20");
				document.getElementById("platforms").insertAdjacentHTML('beforeend', "<a href=/networkentity.html/" +linker2+ "/>" +srs.platforms[i]+ "</a>" + "<br>");
				}
			}
		}
	}
}
}
	


function getdataNetwork(platform){

	for(val in platformList){
		var item = platformList[val];
		if (item.name === platform){
			document.getElementById("name").innerHTML = item.name;
			document.getElementById("name1").innerHTML = item.name;
			$("#series-img").attr("src", item.picUrl);
			document.getElementById("description").innerHTML = item.description;
			document.getElementById("oc").innerHTML	= item.originalContent;
			document.getElementById("ads").innerHTML = item.ads;
			document.getElementById("cost").innerHTML = item.cost;
			for(val in item.series){
				var series = item.series[val];
				var linker = series.split(' ').join('%20');
					document.getElementById("series").insertAdjacentHTML('beforeend', "<a href=/seriesentity.html/" +linker+ ">" +series+ "</a>" + "<br>");
			}
		}
	}
}

