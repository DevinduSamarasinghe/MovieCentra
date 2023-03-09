import React,{useEffect,useState} from "react";
//import "./styles/Mainfile.css";
import find from "../Assets/find.svg";
import MovieCard from "../Components/MovieCard";


//2957a111 API key the movie database
const API_URL = 'http://www.omdbapi.com?apikey=2957a111';

//functions and state variables `
const Mainfile = () =>{

    const searchMovies = async(title) =>{
        const response  = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    //Reserved space for hooks
    const [movies, setMovies] = useState([])
    const [searchTerm,setSearchTerm] = useState("");
    useEffect(()=>{
       // searchMovies('Spiderman');
    },[])

    return (
        <div className="flex relative dark: bg-main-dark-bg">
            {/* <h1>MovieCentra</h1> */}
            {/* <div className="search">
                <input
                placeholder="Search Movie"
                value={searchTerm}
                onChange={(e)=>{
                    setSearchTerm(e.target.value);
                }}/>
                <img src={find} 
                alt="search"
                onClick={()=>searchMovies(searchTerm)}/>
            </div> */}
            {/* {movies?.length > 0 ? (<div className="container">
                {movies.map((movie,key)=>{
                    return(
                        <div key={key}>
                            <MovieCard movie={movie}/>
                        </div>
                        
                    )
                })}
            </div>) : (
                <div className="empty">
                    <h2>No Movies Found!</h2>
                </div>
            )} */}

        </div>
    )
}

export default Mainfile;