
load('movie.js');
var movie = JSON.parse(MOVIE_FILE);
function filter(array, test) {
	  var passed = [];
	    for (var i = 0; i < array.length; i++) {
		        if (test(array[i]))
				      passed.push(array[i]);
			  }
	      return passed;
}

print(JSON.stringify(filter(movie, function(mov) {
	  return mov.genre == 'drama' ;
})));

