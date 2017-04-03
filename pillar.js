function main() {
	for(platform in platformList){
		$('#table tbody').append('<tr><td><a href="'+platformList[platform].name+'.html">'+platformList[platform].name+'</a></td><td>'+platformList[platform].description+'</td><td>'+platformList[platform].series+'</td><td>'+platformList[platform].originalContent+'</td><td>'+platformList[platform].ads+'</td><td>'+platformList[platform].cost+'</td></tr>');
	
	}
}