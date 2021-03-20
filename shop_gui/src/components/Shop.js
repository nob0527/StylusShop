import React, {useState, useEffect} from 'react';
import Categories from "./shop/Categories";
import ItemCard from "./shop/ItemCard";
import axios from "axios";

function Checkbox({value, title}){
    return (
        <div className={"filter-item"}>
            <input type="checkbox" id={value} name={value} value={value}/>
            <label htmlFor={value}>  {title}</label>
        </div>
    )

}

function Shop(props) {
    const API_URL = process.env.REACT_APP_API_URL
    const [items, set_items] = useState([])

    const fetch_items = () => {
    axios({
        method: "get",
        url: `${API_URL}/shop`
    }).then(res => set_items(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch_items()
    },[])

    return (
        <div>
            <Categories/>

            <div className="shop-container">

                <div className="filter-layout">
                    <div className={"filter-card"}>
                        <h4>Elérhetőség</h4>
                        <hr/>
                        <Checkbox value={"raktáron"} title={"Raktáron"}/>
                        <Checkbox value={"akciós"} title={"Akciós"}/>

                    </div>
                </div>

                <div className="shop-grid">
                    {
                        items.map(data => <ItemCard key={data.id} data={data}/>)
                    }
                </div>

            </div>

        </div>
    );
}

export default Shop;