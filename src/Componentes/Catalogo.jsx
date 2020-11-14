import { useState } from 'react' ;
import { useDispatch , useSelector } from 'react-redux' ;
import SearchBar from './SearchBar.jsx'

const Catalogo = ({}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items)
    console.log("state de catalogo =",items)

    

    return (
        <div>
            <h1>Catalogo</h1>

            <ul>
                {items.map((item) =>
                    <li key = {item.query}>
                      item : {item.query}
                      <ul>
                      {item.elementos.map ((elemento) => 
                      <li key = {elemento.id}>{elemento.title}</li>
                      )}
                      </ul>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Catalogo;