import React,{useState} from 'react'
import ListingForm from './ListingForm'

const AddListenings:React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleShowForm = () => {
    setShowForm(true);
  };
 
  return (
    <div>
      <div>
        {showForm && <ListingForm setShowForm={setShowForm}/>}
        
      </div>
        <div className='flex justify-end'>
        <div className="flex justify-center items-center relative">
          {!showForm && <button 
          onClick={handleShowForm}
          className=" bg-[#716acd] text-white hover:bg-[#8d98d9]  py-2 px-4 rounded-lg font-sans">
            Add Listings
          </button>}
          </div>
        </div>
    </div>
  )
}

export default AddListenings