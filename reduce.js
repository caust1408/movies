load('movie.js');
var movie = JSON.parse(MOVIE_FILE);


var min = movie[0];
for (var i = 1; i < movie.length; i++) {
	  var cur = movie[i];
	    if (cur.release_date < min.realse_date)
		        min = cur;
}
//print(min);

print(JSON.stringify(movie.reduce(function(min,cur) {
	    return (cur.release_date < min.release_date)? cur : min;
})));

