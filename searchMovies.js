import React, {useState} from "react";
import MovieCard from "./movieCard.js";
export default function SearchMovies(){

    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=e882b0000675346aaee185987d4eee75&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <p>Select either a movie or a person:</p>

                <div class="left">
                    <label>
                        Movie
                        <input type="radio"
                                value="movie"
                                name="value" 
                                checked={value === "movie"}
                                onChange={this.onChange}/>
                    </label>
                </div>

                <div class="left">
                    <label>
                        Person
                        <input type="radio"
                                value="person"
                                name="value"
                                checked={value === "person"}
                                onChange={this.onChange}/>
                    </label>
                </div>
                
                <label className="label" htmlFor="query">Movie Name</label>
                <label className="label" htmlFor="query">Person</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>    
        </>
    )
}