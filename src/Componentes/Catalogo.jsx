import { useState } from 'react' ;
import { useDispatch , useSelector } from 'react-redux' ;
import SearchBar from './SearchBar.jsx'
import useDataApi from 'use-data-api';
import React, { Component }  from 'react';


const Catalogo = ({}) => {

     

    // const [data, doFetch] = useDataApi(
    //     `http://localhost:3000/api/search/zapatillas`,
    //     { hits: [] },
    //   );

    //   console.log("CATALOGO DATA =", data)

    // const dispatch = useDispatch();
    // const items = useSelector(state => state.items)
    // console.log("state de catalogo =",items)

    

    return (
        <div>
            <h1>Catalogo</h1>

             {/* <ul>
                {data.hits.map((item) =>
                    <li key = {item.id}>
                      item : {item.title}
                    </li>
                )}
            </ul>  */}
        </div>
    )
}
export default Catalogo;