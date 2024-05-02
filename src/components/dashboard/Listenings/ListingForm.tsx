import React from 'react'
import {ListeningFormData} from './ListingsFormData'
import { X } from 'lucide-react'



const ListeningForm: React.FC<{ setShowForm: (show: boolean) => void }> = ({
  setShowForm,
}) => {
 
  return (
    <div className='lg:w-1/2 border-2 shadow-lg p-4 rounded-lg'>
        <div className="flex justify-end">
            <button
            onClick={setShowForm.bind(null,false)}
            className="bg-[#716acd] text-white hover:bg-[#8d98d9]  py-2 px-4 rounded-lg font-sans">
                <X size={25}/>
            </button>
        </div>
        <header
          className="text-2xl text-slate-700 font-bold py-4"
        >Add New Listing </header>
        <form action="">
            {ListeningFormData.map((fields,index)=>{
                return(
                    <div key={index}
                    className="w-full flex flex-col">
                         <label
                  htmlFor={`field-${index}`}
                  className="text-slate-700 font-bold text-lg py-2">
                  {fields.label}
                </label>
                <input
                  type={fields.type}
                  id={`field-${index}`}
                  placeholder={fields.placeholder}
                  className="border-2 border-slate-300 p-2 rounded-md w-full"
                />
                    </div>
                )
            })}
            <div className='py-4'>
                <button className="bg-[#716acd] text-white hover:bg-[#8d98d9]  py-2 px-4 rounded-lg font-sans">
                    Add Listing
                </button>
            </div>
        </form>
    </div>
  )
}

export default ListeningForm