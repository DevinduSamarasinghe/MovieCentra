import React,{useEffect} from "react";
import "./styles/Mainfile.css";
//2957a111 API key the movie database
const API_URL = 'http://www.omdbapi.com?apikey=2957a111';


const Mainfile = () =>{

    const SearchMovies = async(title) =>{
        const response  = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    //Reserved space for hooks
    useEffect(()=>{
        SearchMovies('Spiderman');
    },[])



    return (
        <div className="app">
            <h1>MovieCentra</h1>
            <div className="search">
                <input
                placeholder="Search Movie"
                value="Superman"
                onChange={()=>{
                    
                }}></input>

            </div>
        </div>
    )
}

export default Mainfile;