import React, { useState } from "react"; 
import axios from "axios"; 
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos"; 

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false); 
    let [photos, setPhotos] = useState (null); 

    function handleResponse (response) {
        setResults(response.data[0]);
    
        }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() { 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);  

        let pexelsApiKey = "563492ad6f91700001000001182f4031f4cf4cf9a20c4f71b8fb3e11";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
        let headers = {Authorization:  `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, {headers: headers}).then (handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        search();
    }

    function handleKeywordChange(event) {
        setKeyword (event.target.value); 
    }

    function load() {
        setLoaded(true);
        search(); 
    }

    if (loaded) {
    return (
        <div className = "Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
        <form onSubmit = {handleSubmit} >
            <input type = "search" autoFocus = {true} onChange={handleKeywordChange} defaultValue= {props.defaultKeyword} />
        </form>
        <div className = "hint">
            Suggested words: sunset, wine, ubiquitous... 
        </div>
        </section>
        <Results results = {results} />
        <Photos photos = {photos} />
        </div>
    );
} else {
    load(); 
    return "Loading"; 
}
}