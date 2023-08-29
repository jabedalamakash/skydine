"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Btn from './Btn';
import Modal from './Modal';

const Food = ({data}) => {

    



    
    return (
        <>
        
            <section className='w-full mx-auto sm:w-[80%] px-5 sm:px-0'>
 

                                    <div className='flex border justify-center items-center' >

                                    
                                    {data.strMealThumb?<div className=''>                                   
                                    <Image
                                    src={data.strMealThumb}
                                    height={300}
                                    width={230}
                                    alt={data.strMeal}
                                    className='h-max '/>
                                    </div> :null}


                                    <div className='p-10'>
                                    {data.strMeal? <h1 className='text-xl mb-5 font-bold'>{data.strMeal}</h1>:null}
                                   
                                    <p className='mb-5'>There are many variations of passages of available, but the majority have suffered.</p>
                                    {data.strYoutube? <Modal name={data.strMeal} instra={data.strInstructions} catg={data.strCategory} img={data.strMealThumb} area={data.strArea} youtube={data.strYoutube}/>:null} 
                
                                    </div>
                
                
                                </div>
    
               
            </section>
            
        </>
    );
};

export default Food;
