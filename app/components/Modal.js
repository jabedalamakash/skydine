"use client"
import Image from 'next/image';
import React from 'react';



const Modal = ({name,img,area,catg,instra,youtube}) => {
    return (
        <div>

    <label htmlFor="my_modal_6" className="btn border-none underline font-bold text-[#ffc107]">View Details</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box w-[60%] bg-white  max-w-[60%]">
        
        <h3 className="font-bold mb-10 py-4 text-2xl border-b">{name}</h3>
        <Image src={img} height={410}
        width={670} alt={name} className='w-full  mb-10 rounded-md '/>
        <p className="mb-4"><span className='font-bold'>Category: </span>{catg}</p>
        <p className="mb-4"><span className='font-bold'>Area: </span>{area}</p>


        <p className="mb-4"> <span className='font-bold'>Instruction: </span> {instra}</p>
        <p className="mb-4 "><span className='font-bold'>Youtube: </span>{youtube}</p>
        
        <div className="modal-action">
          <label htmlFor="my_modal_6" className="btn text-white hover:border-[#dc3545] hover:text-[#dc3545] bg-[#dc3545]">Close!</label>
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Modal;