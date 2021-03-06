import React, {useState, useEffect} from 'react';
import axios from "axios";

function Categories(props) {
    const API_URL = process.env.REACT_APP_API_URL
    const [categories, set_categories] = useState([])

    const fetch_items = () => {
    axios({
        method: "get",
        url: `${API_URL}/categories`
    }).then(res => set_categories(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch_items()
    },[])

    return (
        <div className={"categories-container"}>
            {
                categories.map(category => <div className={"nav-button"}>{category.name}</div>)
            }
        </div>
    );
}

export default Categories;