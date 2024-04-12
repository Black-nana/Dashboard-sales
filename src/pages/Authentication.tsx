import React from 'react'
import { Outlet } from 'react-router'

const Authentication:React.FC = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Authentication