function findEpisode(series){
	for(episode in episodeList){
		if (episodeList[episode].series == series.name) {
			return episodeList[episode];
		}
	}
}

function main(){
	var reordered = seriesList.sort(() => .5 - Math.random());
	var series = reordered.slice(0,3);
	console.log(series);
	$("#poster1").attr("src",series[0].picUrl);
	$("#title1").html(series[0].name + " (" + series[0].yearsActive + ")");
	var episode1 = findEpisode(series[0]);
	$("#link1").attr("href","episodeentity.html?series=" + episode1.series + "&season=" + episode1.season + "&episode=" + episode1.episode);
	$("#poster2").attr("src",series[1].picUrl);
	$("#title2").html(series[1].name + " (" + series[1].yearsActive + ")");
	var episode1 = findEpisode(series[1]);
	$("#link2").attr("href","episodeentity.html?series=" + episode1.series + "&season=" + episode1.season + "&episode=" + episode1.episode);
	$("#poster3").attr("src",series[2].picUrl);
	$("#title3").html(series[2].name + " (" + series[2].yearsActive + ")");
	var episode1 = findEpisode(series[2]);
	$("#link3").attr("href","episodeentity.html?series=" + episode1.series + "&season=" + episode1.season + "&episode=" + episode1.episode);
	console.log(series);
}