import { Outlet } from 'react-router-dom'
import Header3 from '../../components/navbar/Header3'
import Sidebar3 from '../../components/sidebar/Sidebar3'



const TeacherLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header3 />
      <div className="flex  bg-gray-200">
        <Sidebar3 />
        <Outlet />
      </div>
    </div>
  )
}

export default TeacherLayout
