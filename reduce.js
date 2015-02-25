load('movie.js');
var movie = JSON.parse(MOIVE_FILE);

function reduce(array, combine, start) {
	  var current = start;
	    for (var i = 0; i < array.length; i++)
		        current = combine(current, array[i]);
	      return current;
}


print(JSON.stringify(movie.reduce(function(min,cur) {
	    return (cur.release_date < min.release_date)? cur : min;
})));

