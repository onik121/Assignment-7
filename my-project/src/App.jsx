import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Cart from './components/our-recipe/Cart';
import Recipes from './components/our-recipe/Recipes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [datas, setData] = useState([]);

  useEffect (() => {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])


  const [cookes, setCooke] = useState([]);
  const handleCooke = (cooke) => {
    if (cookes.includes(cooke)) {
      toast("This item is already in the cart");
    } 
    else {
      const newCooke = [...cookes, cooke];
      setCooke(newCooke);
      toast("Item is added in the cart");
    }
  }

  const handleAdd = (id) =>{
    const remainingBookmarks = cookes.filter(bookmark => bookmark !==id);
    setCooke(remainingBookmarks);
  }


  const [handle, setCheckk] = useState([])
  const handleCheck = (id) =>{
    const newHandle = [...handle, id];
    setCheckk(newHandle)
  }


  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className='mt-14 mb-14'>
          <h1 className='text-center text-3xl font-bold mb-5'>Our Recipes</h1>
          <p className='text-center max-w-[900px] m-auto font-medium text-lg'>Indulge in our diverse range of six tantalizing recipes, each meticulously crafted with fresh ingredients and bursting with mouthwatering flavors to delight your palate.</p>
          <div className='recipe mt-8'>
          <div className='onik'>
              {
                datas.map( data => <Recipes key={data.id} data={data} handleCooke={handleCooke} handleCheck={handleCheck}></Recipes> )
              }
          </div>
          <Cart cookes={cookes} handleAdd={handleAdd}></Cart>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
    </>
  )
}

export default App;
