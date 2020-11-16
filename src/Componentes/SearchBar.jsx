import { useState } from 'react' ;
import { useDispatch } from 'react-redux' ;
import { useCallback } from "react";
import {useEffect} from 'react' ;
import axios from 'axios';
import { Fragment} from 'react';
import Catalogo from './Catalogo'
import React, { Component }  from 'react';


import useDataApi from 'use-data-api';


function SearchBar() {


  const dispatch = useDispatch()

  const [items, setGuardarData] = useState()
  const [query, setQuery] = useState('Ejemplo');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `http://localhost:3000/api/search/${query}`,
    { hits: [] },
    
  );  

  // useEffect(() => {
   
  // setGuardarData(data);
    // console.log("SET GUARDAR DATA=", guardarData )
  // }, [])
  

    console.log("Que hay en esta data =", data)
  return (
    <Fragment>
      <form
        onSubmit={event => {
          event.preventDefault();
          doFetch(
            `http://localhost:3000/api/search/${query}`,
          );
          dispatch({ type: 'SEARCH', payload : {query: query, elementos: data} })
          // setGuardarData(data)
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          <Catalogo/>
          {data.hits.map(item => (
            <li key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default SearchBar;


// const SearchBar = ({search}) => {

//     const [value, setValue] = useState([])
//     const [query, setQuery] = useState();
//     const [data, setData] = useState();
//     const [url, setUrl] = useState( `http://localhost:3000/api/search/${query}`)
    
//     const dispatch = useDispatch()

//               useEffect(() => {
//                 const fetchData = async () => {
//                   const result = await axios(url);
             
//                   setData(result.data);
//                   console.log("result.data ? =", result.data)
                  
//                 };
             
//                 fetchData();
//               }, [url]);

//     const onSubmit = useCallback(
//         (e) => {
//             console.log("value=",value)
//             e.preventDefault()
//             // Aca deberia ir la query al backend 

//             let elementos = [{id:"1", title: "cama" },{id:"2", title: "pelota" }]

          

            
//             // const userAction = async () => {
//             //     const response = await fetch(`http://localhost:3000/api/search/cama`);
//             //     const myJson = await response.json(); //extract JSON from the http response
//             //     // do something with myJson
//             //     elementos = myJson
//             //   }
             
//             dispatch({ type: 'SEARCH', payload : {query: value, elementos: elementos} })
//             setValue("")
//         },
//         [setValue, search, value ],
//     )

//     return (
//         <form onSubmit = {onSubmit}>
//             <input value={value} onChange={ e => setValue(e.target.value)}></input>
//             {/* <button>SEARCH</button> */}
//             <button onClick={() =>
//           setUrl(`http://localhost:3000/api/search/${query}`) }
//             > Search</button>
//         </form>
//     )
// }

// export default SearchBar;