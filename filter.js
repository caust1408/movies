
load('moive.js');
var movie = JSON.parse(MOVIES_FILE);
function filter(array, test) {
	  var passed = [];
	    for (var i = 0; i < array.length; i++) {
		        if (test(array[i]))
				      passed.push(array[i]);
			  }
	      return passed;
}

print(JSON.stringify(filter(movie, function(title) {
	  return title.release date > 2000 && title.release date < 2009 ;
})));

