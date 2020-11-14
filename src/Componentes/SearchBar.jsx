import {useState} from 'react' ;
import {useDispatch} from 'react-redux' ;
import { useCallback } from "react";


const SearchBar = ({search}) => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()


    const onSubmit = useCallback(
        (e) => {
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
        </form>
    )
}

export default SearchBar;