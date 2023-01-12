import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    // console.log('yolo');

    return (
        <div className="home">

            {error && <div>{ error }</div>}
            {isPending && <p>Loading...</p>}
            {data && <BlogList blogs={data} title="All Blogs"/>}

        </div>
    );
}
 
export default Home;