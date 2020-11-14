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
                    <li>
                      item : {item.items}
                    </li>
                )}
            </ul>
            {/* { items && items.map(i => {i.items}) } */}
        </div>
    )
}
export default Catalogo;