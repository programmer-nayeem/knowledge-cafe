import PropTypes from 'prop-types'
import { FaBookmark} from 'react-icons/fa';
const Blog = ({blog , handleAddToBookmark , handleMarkAsRead}) => {
    const {title , cover , author , author_img , reading_time , posted_date , hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-lg' src={cover} alt={`Cover picture of the tiltel ${title}`} />
            <div className='flex justify-between'>
                <div  className='flex items-center gap-5'>
                    <img width={'60px'} className='rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-4 mt-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash , idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <button className='border-2 border-red-500 px-3 py-2 rounded-lg' onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};



Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}



export default Blog;


