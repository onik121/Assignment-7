
import './navbar.css'


const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-8">
            <div><h1 className="text-4xl font-bold">Fusion Delights</h1></div>
            <div className="flex gap-8 font-medium text-lg">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className="flex gap-5">
                <input className="search-field" type="text" placeholder="Search"></input>
                <img className="w-[45px]" src="../../../public/img/Frame 5.png"></img>
            </div>
        </div>
    );
};

export default Navbar;