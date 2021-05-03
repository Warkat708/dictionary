import React, { useState } from "react"; 
import axios from "axios"; 
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("wine");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(null); 

    function handleResponse (response) {
        setResults(response.data[0]);
    
        }

    function search() { 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);  
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
            <input type = "search" autoFocus = {true} onChange={handleKeywordChange} placeholder= "Enter search term"></input>
        </form>
        <div className = "hint">
            Suggested words: sunset, wine, ubiquitous... 
        </div>
        </section>
        <Results results = {results} />
        </div>
    );
} else {
    load(); 
    return "Loading"; 
}
}