import { useState } from 'react' ;
import { useDispatch } from 'react-redux' ;
import { useCallback } from "react";
import {useEffect} from 'react' ;
import axios from 'axios';


const SearchBar = ({search}) => {
    const [value, setValue] = useState([])
    const dispatch = useDispatch()

            

    const onSubmit = useCallback(
        (e) => {
            console.log("value=",value)
            e.preventDefault()
            // Aca deberia ir la query al backend 
            const elementos = [{id:"1", title: "cama" },{id:"2", title: "pelota" }]
            dispatch({ type: 'SEARCH', payload : {query: value, elementos: elementos} })
            setValue("")
        },
        [setValue, search, value ],
    )

    return (
        <form onSubmit = {onSubmit}>
            <input value={value} onChange={ e => setValue(e.target.value)}></input>
            <button>SEARCH</button>
        </form>
    )
}

export default SearchBar;