import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({hanleAddToBookmark , handleMarkAsRead}) => {
    const [blogs , setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-4xl">Blogs :{blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={hanleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

export default Blogs;