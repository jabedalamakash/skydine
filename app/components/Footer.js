import React from 'react';
import Btn from './Btn';

const Footer = () => {
    return (
        <div className='bg-[#fffcf3] w-full'>

            <section className='w-[80%] text-black mx-auto flex flex-wrap text-center sm:text-left py-20  sm:flex-row justify-between'>
                <div className='mb-5 sm:w-1/4 sm:mb-0'>
                    <h1 className='mb-5 text-xl font-bold'>Section</h1>
                    <p className='mb-3 '>Home</p>
                    <p className='mb-3 '>Features</p>
                    <p className='mb-3 '>Pricing</p>
                    <p className='mb-3 '>FAQS</p>
                    <p>About</p>
                </div>

                <div className='mb-5 sm:w-1/4 sm:mb-0'>
                    <h1 className='mb-5 text-xl font-bold'>Section</h1>
                    <p className='mb-3 '>UI/UX Design</p>
                    <p className='mb-3 '>Product Design</p>
                    <p className='mb-3 '>Back End Developer</p>
                    <p className='mb-3 '>Back End Developer</p>
                    
                </div>

                <div className='mb-5 sm:w-1/4 sm:mb-0'>
                    <h1 className='mb-5 text-xl font-bold'>Resource</h1>
                    <p className='mb-3 '>FAQ</p>
                    <p className='mb-3 '>Support</p>
                    <p className='mb-3 '>Privacy Policy</p>
                    <p>Terms of Service</p>
                    
                </div>

                <div className='mb-5 overflow-hidden sm:w-1/4 sm:mb-0'>
                    <h1 className='mb-5 text-xl font-bold'>Subscribe to our newsletter</h1>
                    <p className='mb-3'>There are many variations of passages of available,but the the majority have suffered.</p>

                    <div className='flex justify-center  sm:justify-start'>
                        <input className="border mr-4 py-5 px-4 w-full " type="text" placeholder=' Email Address' />
                        <Btn title="Subscribe"/>

                    </div>

                    
                </div>


            </section>
            
        </div>
    );
};

export default Footer;