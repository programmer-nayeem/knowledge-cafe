import profile from '../../images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-2 border-b-2 mb-10 max-w-6xl mx-auto'>
            <h1 className="text-4xl font-semibold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;