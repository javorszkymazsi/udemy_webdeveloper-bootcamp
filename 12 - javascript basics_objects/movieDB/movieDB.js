var movieDB = [ {
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	}, 
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}
];

listMoviesFromDatabase(movieDB);

function listMoviesFromDatabase(movies) {	
	movies.forEach(function(movie) {
		var watchedOrNot;
		if (movie.hasWatched) {
			watchedOrNot = "watched";
		} else {
			watchedOrNot = "not seen";
		}
		console.log("You have %s \"%s\" - %d stars", watchedOrNot, movie.title, movie.rating);
	});
}