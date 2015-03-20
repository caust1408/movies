
load('movie.js');
var movie = JSON.parse(MOVIE_FILE);


var min = movie[0];
for (var i = 1; i < movie.length; i++) {
	  var cur = movie[i];
	    Curtime = new Date().getTime();
	    //print(Curtime);
	    Oldtime = cur.date;
	    //print('this is time ' + Oldtime);
	    DaysUntil = (Math.floor(Curtime-Oldtime))/(86400000);
print(new Date(DaysUntil));
}
//print(min);

/*print(JSON.stringify(movie.reduce(function(min,cur) {
	    return DaysUntil;
})));
*/

