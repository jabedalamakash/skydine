
"use client"
import React, { useEffect, useState } from 'react';
import Food from './Food';
import Btn from './Btn';

const AllFoods = () => {

    const[fdata,setFdata]=useState();
    const[isLoading,SetIsLoading]=useState(true);
    const [size,setSize]=useState(6);
    const [show,setShow]=useState(true);
    

    const handleClick =()=>{

    setSize(fdata.length)
     setShow(false);

        
     }


 

    const food=async()=>{

        try{

            const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`)
            const data=await res.json();

            
            SetIsLoading(false);
            setFdata(data.meals);

        }

        catch(error){
            console.log(error);
        }
        


    }



    useEffect(()=>{
        food();



    },[])
    // <Food data={fdata}/>

    return (
        <>
        <section className='mb-20'>
            <h1 className='text-5xl text-center mb-10'>Your Favorite Food</h1>
            {isLoading? <h1 className='text-5xl flex justify-center items-center'>Loading</h1>:
            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 mb-10'>
            {fdata.slice(0,size).map((fooditem)=><Food key={fooditem.idMeal} data={fooditem}/>)}
             </div>} 
             {!show?null: 
                    <div onClick={handleClick} className='text-center'>
                    <Btn title="Show All"/>
                    </div>}

        </section>
            
        </>
    );
};

export default AllFoods;