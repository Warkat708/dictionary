import React, { useState } from "react"; 
import axios from "axios"; 
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse (response) {
        console.log(response.data[0].phonetics[0].text);
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    
        }

    function search(event) {
        event.preventDefault(); 
     
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);  
    
    }

    function handleKeywordChange(event) {
        setKeyword (event.target.value); 
    }

    return (
        <div className = "Dictionary">
            <section>
        <form onSubmit = {search} >
            <input type = "search" autoFocus = {true} onChange={handleKeywordChange} placeholder= "Enter search term"></input>
        </form>
        </section>
        <Results results = {results} />
        </div>
    )
}