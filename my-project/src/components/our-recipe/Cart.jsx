
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const Cart = ({cookes, handleAdd}) => {

    const [currentlyCooke, setCurrentCooke] = useState([]);

    const [totalCalories, setTotalCalories] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const handleCurrentCooke = (current) => {
        const newCurrent = [...currentlyCooke, current]
        setCurrentCooke(newCurrent);
    }

    const handleTime = (time) => {
        let newTime = parseInt(time);
        setTotalTime (totalTime + newTime)
    }
    const handleCalories = (calories) => {
        let newCalories = parseInt(calories)
        setTotalCalories(totalCalories + newCalories);
    }

    const lastTime = parseInt(totalTime);
    const updateCalories = parseInt(totalCalories);

    return (
        <div className="cart-container px-7 h-fit py-5">
             <div className="">
                <h1 className="text-2xl font-semibold text-black flex items-center w-full justify-center">Want to cook: <p className='mt-[2px] ml-1'>{cookes.length}</p></h1>
                <div className='line my-3'></div>
            </div>
            <div className='flex'>
                <p className='ml-10'>Name</p>
                <p className='ml-[70px]'>Time</p>
                <p className='ml-[30px]'>Calories</p>
            </div>
            <div>
                {
                    cookes.map( (cooke, idx) => 
                    <div className='flex bg-slate-100 items-center px-3 py-3 rounded-lg my-4 gap-3' key={idx}>
                        <div className='w-5'><p className='font-semibold'>{idx +1 }</p></div>
                        <div className=' w-[125px]'><p>{cooke.name}</p></div>
                        <div className='w-15'><p>{cooke.preparing_time} Min</p></div>
                        <div className='bg-red- ml-2'><p>{cooke.calories} Calories</p></div>
                        <button onClick={() => { handleCurrentCooke (cooke); handleAdd(cooke); handleTime(cooke.preparing_time); handleCalories(cooke.calories)}} className='prepare'>Preparing</button>
                    </div>)
                }
            </div>
            <div className="mt-5">
                <h1 className="text-2xl font-semibold text-black flex items-center w-full justify-center">Currently cooking: <p className='mt-[2px] ml-1'>{currentlyCooke.length}</p></h1>
                <div className='line my-3'></div>
            </div>
            <div className='flex'>
                <p className='ml-10'>Name</p>
                <p className='ml-[108px]'>Time</p>
                <p className='ml-[83px]'>Calories</p>
            </div>
            <div>
                {
                    currentlyCooke.map( (cooke, idx) => 
                    <div className='flex bg-slate-100 items-center px-3 py-3 rounded-lg my-4 gap-1' key={idx}>
                        <div className='w-5'><p className='font-semibold'>{idx +1 }</p></div>
                        <div className='w-[147px] ml-1'><p>{cooke.name}</p></div>
                        <div><p>{cooke.preparing_time} Min</p></div>
                        <div className='ml-[63px]'><p>{cooke.calories} Calories</p></div>
                    </div>)
                }
            </div>
            <div className='flex font-semibold gap-4'>
                <p className='bg-red- ml-[190px]'>Total Time: {lastTime} Miniutes</p>
                <p className='bg-blue-'>Total Calores: {updateCalories} Calories</p>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cookes : PropTypes,
    handleAdd : PropTypes,
}

export default Cart;