function genPlatforms() {
	for(platform in platformList){
		$('#table tbody').append('<tr><td><a href="networkentity.html?name='+platformList[platform].name+'">'+platformList[platform].name+'</a></td><td>'+platformList[platform].description+'</td><td>'+platformList[platform].series+'</td><td>'+platformList[platform].originalContent+'</td><td>'+platformList[platform].ads+'</td><td>'+platformList[platform].cost+'</td></tr>');
	
	}
}


function genSeries() {
	for(series in seriesList){
		$('#table tbody').append('<tr><td><a href="seriesentity.html?name='+seriesList[series].name+'&years='+seriesList[series].yearsActive+'">'+seriesList[series].name+'</a></td><td>'+seriesList[series].description+'</td><td>'+seriesList[series].runtime+'</td><td>'+seriesList[series].yearsActive+'</td><td>'+seriesList[series].genre+'</td><td>'+seriesList[series].platforms+'</td></tr>');
	
	}
}

function genEpisodes() {
	for (episode in episodeList){
		$('#table tbody').append('<tr><td><a href="episodeentity.html?series='+episodeList[episode].series+'&season='+episodeList[episode].season+'&episode='+episodeList[episode].episode+'">' + episodeList[episode].name + '</a></td><td>' + episodeList[episode].description+'</a></td><td>'+episodeList[episode].series+'</td><td>'+episodeList[episode].airDate+'</td><td>'+episodeList[episode].director+'</td><td>'+episodeList[episode].writer+'</td><td>'+episodeList[episode].season+'</td><td>'+episodeList[episode].episode+'</td></tr>');
		

	}
}