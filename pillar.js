function genPlatforms() {
	for(platform in platformList){
		$('#table tbody').append('<tr><td><a href="'+platformList[platform].name+'.html">'+platformList[platform].name+'</a></td><td>'+platformList[platform].description+'</td><td>'+platformList[platform].series+'</td><td>'+platformList[platform].originalContent+'</td><td>'+platformList[platform].ads+'</td><td>'+platformList[platform].cost+'</td></tr>');
	
	}
}


function genSeries() {
	for(series in seriesList){
		$('#table tbody').append('<tr><td><a href="'+seriesList[series].name+'.html">'+seriesList[series].name+'</a></td><td>'+seriesList[series].description+'</td><td>'+seriesList[series].runtime+'</td><td>'+seriesList[series].yearsActive+'</td><td>'+seriesList[series].genre+'</td><td>'+seriesList[series].platforms+'</td></tr>');
	
	}
}

function genEpisodes() {
	for (episode in episodeList){
		$('#table tbody').append('<tr><td><a href="'+episodeList[episode].name+'.html">' + episodeList[episode].name + '</a></td><td>' + episodeList[episode].description+'</a></td><td>'+episodeList[episode].series+'</td><td>'+episodeList[episode].airDate+'</td><td>'+episodeList[episode].director+'</td><td>'+episodeList[episode].writer+'</td><td>'+episodeList[episode].season+'</td><td>'+episodeList[episode].episode+'</td></tr>');
		

	}
}