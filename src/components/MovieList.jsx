// 1. Initial Setup
// ● Use an App component as the main container for your data and state.
// ● Create two child components:
// ○ MovieList: Seed with the provided mock data
// 2. Requirements
// ● Use state to manage:
// ○ movies (array): Contains the data for all available movies.
// ● Pass state variables and setters as needed to the child components using
// props.
// 3. Functionality
// Your app should:
// ● Display a list of genres based on the available movie data.
// ● Allow the user to select a genre (for example, by clicking on a genre name).
// ● Display only the movies that match the selected genre.
// ● Update the movie list automatically when the user selects a different genre.
// ● Use conditional rendering to display an error message if the user selects a
// genre with no movies.
// Hint: Think about where state should live so that both components update correctly
// when a genre is selected.
// 4. Example Behavior
// ● When the app loads, the user sees a list of genres.
// ● Clicking a genre updates the movie list to show only those movies.
// ● If the user clicks another genre, the movie list updates again without needing
// a refresh.
// 5. Bonus: Optional Extension
// Try adding one or more of these enhancements:
// ● Highlight the currently selected genre.
// ● Add a “Show All” option to display all movies.

import React from 'react';

const MovieList = ({ movies, currentGenre }) => {
    const filteredMovies = currentGenre === 'Show All' 
        ? movies 
        : movies.filter(movie => movie.genre === currentGenre);

    return (
        <div>
            <h2>Movies</h2> 
            {filteredMovies.length > 0 ? (
                <ul>
                    {filteredMovies.map((movie) => (    
                        <li key={movie.title}>{movie.title} ({movie.genre})</li>
                    ))}
                </ul>   
            ) : (
                <p>No movies available for the selected genre.</p>
            )}
        </div>
    );
}   

export default MovieList;