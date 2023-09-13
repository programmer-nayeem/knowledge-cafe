const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className="bg-slate-200 p-4 rounded-lg mb-3">
            <h3 className="text-3xl">{title}</h3>
        </div>
    );
};


export default Bookmark;