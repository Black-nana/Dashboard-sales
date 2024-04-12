import React from 'react'
import Sales from './dashboard/Sales'
import Map from './dashboard/Map'
import Table from './dashboard/Table'

const Dashboard:React.FC = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-[2fr,1fr] ">
        <Sales />
        <Map />
        </div>
        <div className='my-5 bg-slate-100 p-4 rounded-lg'>
            <Table />
        </div>
    </div>
  )
}

export default Dashboard