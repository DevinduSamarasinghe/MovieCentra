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
        console.log(data.Search)
    }

    //Reserved space for hooks
    const [movies, setMovies] = useState([])
    const [searchTerm,setSearchTerm] = useState("");
    useEffect(()=>{
        //searchMovies('Spiderman');
    },[])

    return (
        <div className="relative dark:bg-main-dark-bg dark:text-white min-h-screen">
            <div className="p-1 flex w-full h-20 rounded px-10">
                <div className={`pl-2 text-white
                transition ease-in-out delay-150  
                hover:translate-y-1 hover:scale-110 hover:text-cyan-200 duration-500`}>
                    <h1 className="text-2xl pt-2 pl-2"> MovieCentra</h1>
                </div> 
                <div className="flex px-20 pt-3 pb-3
                transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105 hover:placeholder:text-gray-800 duration-500">
                    <input className=" text-center h-10 w-800 text-white 
                    rounded-md bg-slate-500 placeholder:text-gray-400 outline-none" 
                    placeholder="Search Movies"
                    onChange={(e)=>{
                        setSearchTerm(e.target.value);
                    }} onSubmit={()=> searchMovies(searchTerm)}/>
                    <button className="flex "onClick={()=>searchMovies(searchTerm)}>
                    <img className=" w-10 h-10 pl-1 " src={find}
                        alt="search"></img>
                    </button>
                </div>
            </div>

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
             {movies.length > 0 ? (<div className="flex flex-wrap p-5">
                {movies.map((movie,key)=>{
                    return(
                        <div key={key} className="p-5">
                            <MovieCard movie={movie}/>
                        </div>
                    )
                })}
            </div>) : (
                <div className="empty">
                    <h2>No Movies Found!</h2>
                </div>
            )} 

        </div>
    )
}

export default Mainfile;