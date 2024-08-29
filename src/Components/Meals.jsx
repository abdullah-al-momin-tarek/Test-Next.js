'use client'
import React, { useState } from 'react';

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [search, seetSearch] = useState('')
    const handleSearch = (e) =>{
        console.log(e.target.value);
        
    }
    return (
        <div>
            <div>
                <input className='p-2 text-black' onChange={handleSearch} type="text" name="" id="" />
                <button className='bg-red-400 p-2'>Search</button>
            </div>
        </div>
    );
};

export default Meals;