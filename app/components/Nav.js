import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Btn from './Btn';



const Nav = () => {
    return (
        <div className='bg-white w-full'>

            <nav className='sm:w-[80%] px-5 sm:px-0 py-10 items-center mx-auto flex  justify-between '>
                <div>
                    <Link href="/">
                    <Image
                    
                    src={"/images/tastyhut.png"}
                    height={24}
                    width={125}
                    alt="logo"
                    priority
                    className=""/>
                    </Link>

                </div>

                <div>
                        <Btn title="Sign Up"/>
                </div>
            </nav>
        </div>
    );
};

export default Nav;

// sticky top-0 z-10 