import { Outlet } from 'react-router-dom'
import Sidebar2 from '../../components/sidebar/Sidebar2'
import Header2 from '../../components/navbar/Header2'



const DashboardLayout = () => {
    return (
        <>
            <div className='overflow-x-hidden'>
                <Header2 />
                <div className="flex bg-gray-200">
                    <Sidebar2 />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DashboardLayout