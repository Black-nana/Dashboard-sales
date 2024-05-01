import React from 'react'
// import Sales from './Sales'

// import Table from './Table'
import Details from './Details'
import Index from './Listenings/Index'

const Dashboard:React.FC = () => {
  return (
    <div className=' w-full h-screen overflow-y-auto '>
        <div className="grid place-items-center ">
        {/* <Sales /> */}
        <Details />
        
        </div>
        <div className='my-5 p-4 rounded-lg'>
          <Index/>
            {/* <Table /> */}
        </div>
    </div>
  )
}

export default Dashboard