import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
const baseURL = "http://localhost:3500";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const [data, setData] = useState([]);

  //PROBLEM - CANNOT GET THE DATA FROM API RETURNING EMPTY ARRAY  
  useEffect(() => {
    fetch(`${baseURL}/search?query=${query}`)
    .then(response => response.json())
    .then(data => {setData(data)});
    console.log('Fetch Complete');
    console.log(data);
  }, []);

  return (
    <>
    <h1>The user searched for: {query}</h1>
    <h1>The results are: </h1>
    
    </>
  )
}

export default SearchPage;