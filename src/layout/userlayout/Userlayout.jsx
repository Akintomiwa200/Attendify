
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Header2 from '../../components/navbar/Header2'




const UserLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header2 />
      <div className="flex  bg-gray-200">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout

