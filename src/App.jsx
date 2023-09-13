import { useState } from "react";
import "./App.css";
import Blogs from "./assets/Components/Blogs/Blogs";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";
import Header from "./assets/Components/Header/Header";

function App() {
    const [bookmark , setBookmarks] = useState([]);
    const hanleAddToBookmark = blog => {
        const newBookmarks = [...bookmark , blog]
        setBookmarks(newBookmarks)
    }
    return (
        <>
            <Header></Header>
            <main className="md:flex justify-between max-w-6xl mx-auto">
                <Blogs hanleAddToBookmark={hanleAddToBookmark}></Blogs>
                <Bookmarks bookmark={bookmark}></Bookmarks>
            </main>
        </>
    );
}

export default App;
