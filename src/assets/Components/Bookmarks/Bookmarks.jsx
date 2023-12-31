/* eslint-disable react/prop-types */
import Bookmark from "../Bookmark/Bookmark";

// eslint-disable-next-line react/prop-types
const Bookmarks = ({bookmark , readingTime}) => {
    return (
        <div className="md:w-1/3 p-4 rounded-lg ml-5">
            <h2 className="text-3xl bg-red-300 p-4 rounded-lg mb-2">Reading Time : {readingTime}</h2>
            <h2 className="text-3xl bg-slate-300 p-4 rounded-lg mb-2">Bookmarks : {bookmark.length} </h2>
            {
                // eslint-disable-next-line react/prop-types
                bookmark.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;
