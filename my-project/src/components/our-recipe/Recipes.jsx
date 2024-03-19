import PropTypes from 'prop-types'
import './style.css'

const Recipes = ({data, handleCooke, handleCheck}) => {

    const {name, image, short_description, calories, preparing_time, ingredients} =data;

    return (
        <div className="recipe-container w-full">
            <div className='recipe-box '>
                <img src={image}></img>
                <h4 className='my-3 text-xl font-semibold text-black'>{name}</h4>
                <p className='text-black'>{short_description}</p>
                <div className='line my-3'></div>
                <h4 className='text-black text-[18px] font-semibold mb-3'>Ingredients: {ingredients.length}</h4>
                <ul>
                    {
                        ingredients.map((int, idx) => <li key={idx}>{int}</li>)
                    }
                </ul>
                <div className='line my-3'></div>
                <div className="flex gap-8">
                    <div className="flex items-center gap-2"><img src="../../../public/img/Frame.png"></img><p>{preparing_time} Miniutes</p></div>
                <div className="flex items-center gap-2"><img src="../../../public/img/Vector.png"></img><p className="mt-[3px]">{calories} Calories</p></div>
                </div>
                <button onClick={() =>{ handleCooke(data); handleCheck(data)}}>Want to Cook</button>
            </div>
        </div>
    );
};

Recipes.propTypes = {
    data : PropTypes,
    handleCooke : PropTypes,
    handleCheck : PropTypes,
}

export default Recipes;