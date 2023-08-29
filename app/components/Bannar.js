"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Btn from './Btn';
import { BiSearch} from "react-icons/bi";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Bannar = () => {

const[stext,setStext]=useState();

const router=useRouter();


const handleChange=(e)=>{
    setStext(e.target.value);
}

const handleC=(e)=>{
    e.preventDefault();
    setStext(" ");
    router.push(`/search/${stext}`);
  
}



    return (

        
        <div className=' w-full mb-20 h-full'>
           

            <section className='relative overflow-hidden flex  w-full h-full'>


            <Image
            
            src={"/images/banner.png"}
            width={1440}
            height={650}
            alt='banner image'
            priority
            className='w-full h-full brightness-50 absolute object-cover object-center '/>

            <div className='relative text-center py-32  z-10 mx-auto sm:w-[50%]  text-white w-full'>
                <h1 className='text-5xl md:text-7xl font-bold mb-10 '>Taste Our Delicious Best Foods</h1>
                <p className='text-xl mb-10 px-5 sm:px-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem odio odit ea cum fugiat, consequuntur animi in itaque repellat, cupiditate ex dolor accusantium veritatis.</p>

                <div className='flex px-5 relative justify-center'>
                     <div className='w-full text-center items-center'> 
                    < BiSearch size={30} className='absolute w-10 h-10 z-30 pl-2 text-gray-400 my-auto inset-y-0 mr-6 '/>
                    <input value={stext} required onChange={handleChange} className="w-full relative text-black placeholder-slate-800  rounded-md py-5 px-10" type="text"  placeholder='Search any food'/>
                    </div> 

                    {/* <div>
                    <Btn onClick={handleClick} title="Search"/>
                    </div> */}
                    <Link href={`/search/${stext}`}> <Btn onClick={handleC} title="Search"/></Link>

                    
                </div>


            </div>
        </section>
        </div>
    );
};

export default Bannar;