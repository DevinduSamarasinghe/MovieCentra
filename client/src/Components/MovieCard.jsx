import React from "react";

const MovieCard = ({movie}) =>{    //The only way to destructure an object passed is if you put curly bracket 
                  //between the object you pass.

    //content to consider -> Also Check what it prints in the console.
    //Year Poster Title Type 
    return(
        <div className="px-5">
            <div className="flex justify-start">
                <figure className="w-60 h-full dark:bg-gray-700 bg-gray-200 rounded-lg drop-shadow-2xl">
                 <div>
                    <figcaption className="px-5 py-1 text-left font-normal text-gray-400">{movie.Title}</figcaption>
                    <figcaption className="px-5 py-1 text-right text-xs font-normal">{movie.Year}</figcaption>
                 </div>
                    
                 <img className="w-full h-fit object-fit" src={movie.Poster !== 'N/A'? movie.Poster : 'https://via.placeholder.com/400'}></img>
                 <span className="m-5">Hello</span>

                </figure>
            </div>
        </div>
    );
}

export default MovieCard;