import { useState } from 'react' ;
import { useDispatch } from 'react-redux' ;
import { useCallback } from "react";
import {useEffect} from 'react' ;
import axios from 'axios';


const SearchBar = ({search}) => {
    const [value, setValue] = useState([])
    // const [query, setQuery] = useState()
    // const [busqueda, setBusqueda] = useState('')

    const dispatch = useDispatch()


    // useEffect(() => {
    //     console.log("useEffect")

    //     const obtenerDatos = async () => {
    //     const result = await axios(
    //         `http://localhost:3000/api/search/${busqueda}`,
    //       );
            
    //       console.log("result.data =", result.data)
    //       setValue(result.data);
    //     }    

    //     obtenerDatos()

    // }, [busqueda]);

        // const obtenerDatos = async () => {

        //     const data = `http://localhost:3000/api/search/cama`
  
        //     //Consultar la URL
        //     const respuesta = await fetch(data);
        //     const resultado = await respuesta.json();
  
        //     setValue(resultado);
        //     // setError(false);
        //     console.log("SETVALUE =", value)
        //     console.log("resultado =", resultado)
        //     console.log("Respuesta =", respuesta)
            
            
        // }

        // obtenerDatos()
     

            

    const onSubmit = useCallback(
        (e) => {
            console.log("value=",value)
            e.preventDefault()
            dispatch({ type: 'SEARCH', payload : {items: value} })
            setValue("")
        },
        [setValue, search, value ],
    )

    return (
        <form onSubmit = {onSubmit}>
            <input value={value} onChange={ e => setValue(e.target.value)}></input>
            <button>SEARCH</button>
            {/* <button type="button" onClick={(e) => setBusqueda(query)} >SEARCH</button> */}
        </form>
    )
}

export default SearchBar;