import { useState } from 'react' ;
import { useDispatch , useSelector } from 'react-redux' ;
import SearchBar from './SearchBar.jsx'
import useDataApi from 'use-data-api';
import React, { Component }  from 'react';


const Catalogo = () => {

    
    
    const items = useSelector(state => state.items) 
    console.log("items =" , items)
    const [query, setQuery] = useState('Ejemplo');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      `http://localhost:3000/api/search/${query}`,
      { hits: [] },
      
    ); 

    //   console.log("CATALOGO DATA =", data )
    //   console.log("CATALOGO DATA HITS=", data.hits )

    // const dispatch = useDispatch();
    // const items = useSelector(state => state.items)
    // console.log("state de catalogo =",items)

    
    // items[0].elementos ?  let pepe = items[0] : let pepe.elementos.hits = 
   
   


    return (
        <div>
            <h1>Catalogo holaaaaaaaaaaaaa</h1>
            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
            <div>Loading ...</div>
                ) : (
             <ul>
              {items.map(item => (
             <li key={item.id}>
             {item.title}
              </li>
             ))}
             </ul>
)}
        </div>
    )
}
export default Catalogo;