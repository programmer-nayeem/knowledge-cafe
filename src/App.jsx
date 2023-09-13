import { useState } from "react";
import "./App.css";
import Blogs from "./assets/Components/Blogs/Blogs";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";
import Header from "./assets/Components/Header/Header";

function App() {
    const [bookmark , setBookmarks] = useState([]);

    const [readingTime , setReadingTime] = useState(0);

    const handleMarkAsRead = time =>{
        setReadingTime(readingTime + time)
    }


    const hanleAddToBookmark = blog => {
        const newBookmarks = [...bookmark , blog]
        setBookmarks(newBookmarks)
    }
    return (
        <>
            <Header></Header>
            <main className="md:flex justify-between max-w-6xl mx-auto">
                <Blogs handleMarkAsRead={handleMarkAsRead}  hanleAddToBookmark={hanleAddToBookmark}></Blogs>
                <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
            </main>
        </>
    );
}

export default App;
