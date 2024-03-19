import './header.css'



const Header = () => {
    return (
        <div className="hero">
            <div className='overlay flex items-center justify-center'>
                <div className='text-center text-white'>
                    <h1 className='text-5xl font-semibold max-w-[800px] m-auto'>Experience Fusion Delights Culinary Fusion at its Finest!</h1>
                    <p className='max-w-[850px] font-normal my-8 text-lg'>Fusion Delights tantalizes taste buds with a diverse culinary fusion, where global flavors harmonize in innovative dishes, promising unforgettable dining adventures.</p>
                    <div className='flex justify-center gap-7'>
                        <butoon className='hero-btn1'>Explore Now</butoon>
                        <butoon className='hero-btn2'>Our Feedback</butoon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;