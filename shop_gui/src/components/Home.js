import React, {useState, useEffect} from 'react';
import axios from "axios";
import ImageSlider from "./home/ImageSlider";
import PostCard from "./home/PostCard";

function Home(props) {
    const API_URL = process.env.REACT_APP_API_URL
    const [posts, set_posts] = useState([])

    const fetch_items = () => {
        axios({
            method: "get",
            url: `${API_URL}/home`
        }).then(res => set_posts(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch_items()
    },[])

    return (
        <div>

            <div>
                <ImageSlider/>
            </div>

            {
                posts.map(data => <PostCard key={data.id} data={data}/>)
            }
        </div>
    );
}

export default Home;