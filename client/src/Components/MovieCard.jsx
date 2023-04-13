import React from "react";

const MovieCard = ({movie}) =>{    //The only way to destructure an object passed is if you put curly bracket 
                  //between the object you pass.

    //content to consider -> Also Check what it prints in the console.
    //Year Poster Title Type 
    return(
        <div className="px-2 flex">
            <div className="flex justify-start">
                <figure className=" w-250 dark:bg-gray-700 bg-gray-200 rounded-lg drop-shadow-2xl">
                 <div className="absolute top-0 w-full bg-gray-700 rounded-t-lg opacity-70">
                    <figcaption className="px-5 py-1 text-left font-normal text-white">{movie.Title}</figcaption>
                    <figcaption className="px-5 py-1 text-right text-xs font-normal">{movie.Year}</figcaption>
                 </div>
                
                 <img className="w-full h-400 rounded-t-lg" src={movie.Poster !== 'N/A'? movie.Poster : 'https://via.placeholder.com/400'}></img>
                 <figcaption className="px-5 py-1 text-right text-xs font-normal">Comment</figcaption>

                </figure>
            </div>
        </div>
    );
}

export default MovieCard;