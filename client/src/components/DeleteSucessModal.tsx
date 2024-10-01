import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const DeleteSuccessModal = ({ showDeleteSuccessModal, closeDeleteSuccessModal, openDeleteSuccessModal, entityType }: { showDeleteSuccessModal: boolean, closeDeleteSuccessModal: any, openDeleteSuccessModal: any,  entityType: string }) => {
    if (!showDeleteSuccessModal) {
        return null;
      }
    

    const pStyle="font-medium";
const inputStyle="border border-black rounded-md p-1";
return (
    showDeleteSuccessModal && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 flex-col ">
    <div className="bg-white relative w-1/2 lg:w-1/6 flex flex-col items-center justify-center rounded-md ">
    <FontAwesomeIcon icon={faCircleCheck} className='size-20 text-primary absolute -top-6  '/>
    <div>
    <h1 className='mt-20 text-[28px] font-bold text-center'>Success</h1>
    <p className='my-7  text-gray-400 font-semibold text-center'>{entityType} Deleted!</p>
   
    </div>
    <div className='bg-graybg w-full rounded-b-lg flex justify-center items-center p-4'>
    <button className=' bg-primary p-2 w-1/2 rounded-[12px] text-white font-extrabold' onClick={closeDeleteSuccessModal}>OKAY</button>
      </div>
    </div>
    </div>
)
);
};
    export default DeleteSuccessModal;