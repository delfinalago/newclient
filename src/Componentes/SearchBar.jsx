import { useState } from 'react' ;
import { useDispatch } from 'react-redux' ;
import { useCallback } from "react";
import {useEffect} from 'react' ;
import axios from 'axios';


const SearchBar = ({search}) => {

    const [value, setValue] = useState([])
    const [query, setQuery] = useState();
    const [data, setData] = useState();
    const [url, setUrl] = useState( `http://localhost:3000/api/search/${query}`)
    
    const dispatch = useDispatch()

              useEffect(() => {
                const fetchData = async () => {
                  const result = await axios(url);
             
                  setData(result.data);
                  console.log("result.data ? =", result.data)
                  
                };
             
                fetchData();
              }, [url]);

    const onSubmit = useCallback(
        (e) => {
            console.log("value=",value)
            e.preventDefault()
            // Aca deberia ir la query al backend 

            let elementos = [{id:"1", title: "cama" },{id:"2", title: "pelota" }]

          

            
            // const userAction = async () => {
            //     const response = await fetch(`http://localhost:3000/api/search/cama`);
            //     const myJson = await response.json(); //extract JSON from the http response
            //     // do something with myJson
            //     elementos = myJson
            //   }
             
            dispatch({ type: 'SEARCH', payload : {query: value, elementos: elementos} })
            setValue("")
        },
        [setValue, search, value ],
    )

    return (
        <form onSubmit = {onSubmit}>
            <input value={value} onChange={ e => setValue(e.target.value)}></input>
            {/* <button>SEARCH</button> */}
            <button onClick={() =>
          setUrl(`http://localhost:3000/api/search/${query}`) }
            > Search</button>
        </form>
    )
}

export default SearchBar;