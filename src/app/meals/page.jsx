import Meals from '@/Components/Meals';
import React from 'react';



const MealPage = () => {
    return (
        <div>
            <h2 className='text-2xl text-red-400 font-bold'>Our meal is hotter than your gf</h2>
            <h4>Choose your meal: </h4>
            <Meals/>
        </div>
    );
};

export default MealPage;