
load('movie.js');
var movie = JSON.parse(MOVIE_FILE);


function getDate(string) {
	var date = /(\d{1,2})-(\d{1,2})-(\d{4})/;
	var match = date.exec(string);
	var output = new Date(Number(match[3]),Number(match[2]) - 1,Number(match[1]));
	return output.getTime();
	}

for (var i = 1; i < movie.length; i++) {
	  var cur = movie[i];
	  //var date = JSON.parse(cur.date);

	    Curtime = new Date().getTime();
	    //print(Curtime);
	    Oldtime = getDate(cur.date);
	    //print(Oldti;
	    //print('this is time ' + Oldtime);
	    DaysUntil = Math.ceil(((Math.abs((Curtime-Oldtime))))/(86400000));
print(JSON.stringify(cur.title) +' has been out for ' + DaysUntil + ' days');
}
//print(min);

/*print(JSON.stringify(movie.reduce(function(min,cur) {
	    return DaysUntil;
})));
*/

