import "./App.css";
import Blogs from "./assets/Components/Blogs/Blogs";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";
import Header from "./assets/Components/Header/Header";

function App() {
    return (
        <>
            <Header></Header>
            <main className="md:flex justify-between items-center mx-8">
                <Blogs></Blogs>
                <Bookmarks></Bookmarks>
            </main>
        </>
    );
}

export default App;
