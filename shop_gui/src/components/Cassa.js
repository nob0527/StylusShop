import React, {useContext} from 'react';
import {ShoppingCartContext} from "./contexts/ShoppingCart";
import {Intcomma} from "../utilities";

function Cassa(props) {
    const {shopping_list, set_shopping_list} = useContext(ShoppingCartContext)

    return (
        <div>
            {
                shopping_list.map(item => <h2>{item.title} {Intcomma(item.price)} Ft</h2>)
            }
        </div>
    );
}

export default Cassa;