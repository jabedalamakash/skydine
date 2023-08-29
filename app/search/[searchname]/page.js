"use client"
import Food from '@/app/components/Food';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const {searchname}= params;
    // console.log(searchname);

    const[data,setData]=useState();

    const searchdata=async ()=>{
        try{
            const url= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchname}`);
            const result= await url.json();
            setData(result.meals);


        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        searchdata();

    },[searchname])


    return (
        <> 
        <section className='w-full sm:w-[80%] px-5 mx-auto sm:px-0'>
        <h1>You are Searched for {searchname} </h1>

        {console.log(data)}
        {data===null?<>
        <h1 className='text-3xl sm:text-5xl  w-full h-screen p-32 sm:p-10 text-center  font-bold flex justify-center sm:items-center'>Not found</h1></>
        :<>
        <main className='grid grid-cols-1 gap-10 sm:grid-cols-2 mb-10'>

        { data && data.map((fooditem)=>{ return <Food key={fooditem.idMeal} data={fooditem}/>
            
        })}
        </main>
        </>
        }



        </section>
           
            
        
            
        </>
    );
};

export default page;