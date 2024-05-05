import React from 'react'
import Table from './table/Table'
import AddListenings from './AddListings'

const Index:React.FC = () => {
  return (
    <div className='w-full'>
      <AddListenings/>
      <hr className='my-6'/>
     
        <Table/>
       
    </div>
  )
}

export default Index