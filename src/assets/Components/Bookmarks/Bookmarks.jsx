import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmark}) => {
    return (
        <div className="md:w-1/3 p-4 rounded-lg ml-5 ">
            <h2 className="text-4xl bg-slate-300 p-4 rounded-lg mb-2">Bookmarks : {bookmark.length} </h2>
            {
                bookmark.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;
